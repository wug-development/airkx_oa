<template>
    <div class="home-box">
        <div class="home-box-msgs">
            <NoticeCard :type="1" title="业务公告"></NoticeCard>
            <NoticeCard :type="2" title="公司通知"></NoticeCard>
        </div>
        <a-modal v-model:visible="visible" title="打卡提醒" ok-text="打卡" cancel-text="取消" @ok="onPunchClock">
            <p>{{ tip }}</p>
        </a-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import NoticeCard from './components/NoticeCard.vue';
import { isLogin, debounce } from '@/utils/tool/utils';
import { apiGetIsClock, apiPunchClock } from '@/apis/clock';
export default defineComponent({
    components: {
        NoticeCard,
        SearchOutlined,
        DeleteOutlined,
    },
    setup() {
        const router = useRouter();
        const toPage = (url: string, type: number) => {
            router.push({
                path: '/' + url,
                query: {
                    type,
                },
            });
        };

        const visible = ref(false);
        const tip = ref('');
        if (!isLogin()) {
            toPage('login', 1);
        } else {
            apiGetIsClock().then((res: any) => {
                if (+res.type === 0) {
                    visible.value = true;
                    tip.value = res.msg;
                }
            });
        }
        const onPunchClock = debounce(async () => {
            visible.value = false;
            await apiPunchClock();
            message.success('打卡成功');
        }, 200);

        return {
            toPage,
            visible,
            tip,
            onPunchClock,
        };
    },
});
</script>

<style lang="scss" scoped>
.home-box {
    min-height: 100%;
    background-color: #fff;
    &-msgs {
        display: flex;
        cursor: pointer;
        .ant-card {
            width: 50%;
            ::v-deep .ant-card-body {
                padding: 24px 0;
            }
        }
        &-item {
            display: flex;
            height: 40px;
            line-height: 40px;
            position: relative;
            padding: 0 24px;
            .btn-del {
                position: absolute;
                right: 5px;
                display: none;
            }
            &:hover {
                background-color: #f1f1f1;
                .btn-del {
                    display: block;
                }
            }
            &-sign {
                font-size: 28px;
                margin-right: 5px;
                color: #1890ff;
            }
            &-content {
                flex: 1;
                color: #1890ff;
                margin-right: 10px;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            &-date {
                width: 80px;
                text-align: right;
            }
        }
    }
    &-search {
        width: 200px;
        margin-left: 20px;
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0.3);
        border: 0;
        ::v-deep .ant-input {
            background-color: rgba(255, 255, 255, 0) !important;
            color: #fff;
        }
    }
    .btn-fabu {
        color: #fff;
        &:hover {
            color: #1890ff;
        }
    }
}
</style>
