<template>
    <div class="home-box">
        <div class="home-box-msgs">
            <a-card>
                <template #title>业务通告 <a @click="toPage('noticeList', 1)">more</a></template>
                <template #extra><a @click="toPage('sendNotice', 1)">发布</a></template>
                <div class="home-box-msgs-item" v-for="item in businessList" :key="item.id">
                    <div class="home-box-msgs-item-sign">EK</div>
                    <div class="home-box-msgs-item-content" :title="item.content">{{ item.content }}</div>
                    <div class="home-box-msgs-item-date">2016-11-12</div>
                </div>
            </a-card>
            <a-card>
                <template #title>公司通知 <a @click="toPage('noticeList', 2)">more</a></template>
                <template #extra><a @click="toPage('sendNotice', 2)">发布</a></template>
                <div class="home-box-msgs-item" v-for="item in compNoticeList" :key="item.id">
                    <div class="home-box-msgs-item-sign"></div>
                    <div class="home-box-msgs-item-content" :title="item.content">{{ item.content }}</div>
                    <div class="home-box-msgs-item-date">2016-11-12</div>
                </div>
            </a-card>
        </div>
        <a-modal v-model:visible="visible" title="打卡提醒" ok-text="打卡" cancel-text="取消" @ok="onPunchClock">
            <p>{{ tip }}</p>
        </a-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import SysCard from '@/components/sysCard.vue';
import { isLogin, debounce } from '@/utils/tool/utils';
import { apiGetIsClock, apiPunchClock } from '@/apis/clock';
export default defineComponent({
    components: {
        SysCard,
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

        // 业务公共
        const businessList = reactive([]);
        // 公司通知
        const compNoticeList = reactive([]);

        const getList = () => {
            businessList.push({
                content: '广州发布运价提示广州发布运价提示',
                creatTime: '2021-12-30',
            });
            compNoticeList.push({
                content: '广州发布运价提示广州发布运价提示',
                creatTime: '2021-12-30',
            });
        };
        for (let i = 0; i < 20; i++) {
            getList();
        }

        return {
            toPage,
            visible,
            tip,
            businessList,
            compNoticeList,
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
        .ant-card {
            width: 50%;
        }
        &-item {
            display: flex;
            height: 30px;
            line-height: 30px;
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
}
</style>
