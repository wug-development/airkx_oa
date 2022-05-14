<template>
    <a-card :headStyle="{ backgroundColor: '#001529', color: '#fff' }">
        <template #title>
            <div>
                <span>{{ title }}</span>
                <a-input class="msgs-search" placeholder="搜索关键字" :maxlength="20" v-model:value="searchKey" @pressEnter="onSearch">
                    <template #prefix>
                        <SearchOutlined style="color: #fff" />
                    </template>
                </a-input>
            </div>
        </template>
        <template #extra><a class="btn-fabu" @click="toPage('sendNotice', type)">发布</a></template>
        <div class="msgs-item" v-for="item in list" :key="item.noticeID" @click="toInfo(item.noticeID)">
            <div class="msgs-item-sign" v-if="item.AirkxName">{{ item.AirkxName }}</div>
            <div class="msgs-item-content" :title="item.noticeTitle">{{ item.noticeTitle }}</div>
            <div class="msgs-item-date">{{ formatDate(item.createTime, 'YYYY-MM-DD') }}</div>
            <div class="btn-del" @click.stop="() => ({})">
                <FormOutlined @click="onEdit(item.noticeID)" />
                <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="onDelItem(item.noticeID)">
                    <template #title>
                        <p>确定要删除该通知吗？</p>
                    </template>
                    <DeleteOutlined />
                </a-popconfirm>
            </div>
        </div>
        <div class="msgs-page" v-if="total / pageNum > 1">
            <a-pagination show-quick-jumper v-model:current="page" v-model:pageSize="pageNum" :total="total" @change="onSearch" />
        </div>
    </a-card>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, ref, toRefs } from 'vue';
import { SearchOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons-vue';
import { apiGetNotice, apiNoticeDel } from '@/apis/notices';
import { formatDate } from '@/utils/tool/utils';
import { useRouter } from 'vue-router';
export default defineComponent({
    components: {
        SearchOutlined,
        DeleteOutlined,
        FormOutlined,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        api: {
            type: Function,
            default: () => ({}),
        },
        type: {
            type: Number,
            default: 1,
        },
    },
    setup(props) {
        const router = useRouter();
        const state = reactive({
            searchKey: '',
            list: [],
            total: 0,
            page: 1,
            pageNum: 15,
        });

        const getList = async () => {
            const res = await apiGetNotice({
                page: state.page,
                pageNum: state.pageNum,
                type: props.type,
                title: state.searchKey,
            });
            state.list = res.data;
            if (res.dataCount) {
                state.total = res.dataCount;
            }
        };

        onBeforeMount(async () => {
            getList();
        });

        const onSearch = () => {
            getList();
        };
        const onDelItem = async (id) => {
            const res = await apiNoticeDel(id);
            onSearch();
        };

        const toPage = (url: string, type: number) => {
            router.push({
                path: '/' + url,
                query: {
                    type,
                },
            });
        };
        const onEdit = (id) => {
            router.push({
                path: 'sendNotice',
                query: {
                    id,
                },
            });
        };
        const toInfo = (id) => {
            router.push({
                path: 'noticeInfo',
                query: {
                    id,
                },
            });
        };

        return {
            ...toRefs(state),
            onSearch,
            onDelItem,
            formatDate,
            toPage,
            toInfo,
            onEdit,
        };
    },
});
</script>

<style lang="scss" scoped>
::v-deep(.ant-card-body) {
    padding: 24px 0;
}
.msgs {
    &-search {
        width: 200px;
        margin-left: 20px;
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0.3);
        border: 0;
        ::v-deep(.ant-input) {
            background-color: rgba(255, 255, 255, 0) !important;
            color: #fff;
        }
    }
    &-item {
        display: flex;
        height: 40px;
        line-height: 40px;
        position: relative;
        padding: 0 50px 0 24px;
        .btn-del {
            position: absolute;
            right: 5px;
            width: 36px;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            display: none;
        }
        &:hover {
            background-color: #f1f1f1;
            .btn-del {
                display: flex;
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
            width: 100px;
            text-align: right;
        }
    }
    &-page {
        margin-top: 20px;
        text-align: right;
    }
}
.btn-fabu {
    color: #fff;
    &:hover {
        color: #1890ff;
    }
}
</style>
