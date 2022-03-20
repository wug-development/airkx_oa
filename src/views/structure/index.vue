<template>
    <div>
        <div class="list-header">
            <a-button type="primary" @click="onAdd">添加顶级架构</a-button>
        </div>
        <a-table :columns="columns" :data-source="list" :pagination="false">
            <template #remark="{ recode }">
                <div>111{{ record.content }}</div>
            </template>
            <template #action="{ record }">
                <a-button type="primary" @click="onAdd(record)">添加下级</a-button>
                <a-button type="primary" @click="onEdit(record)">编辑</a-button>
                <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="onDel(record)">
                    <template #title>
                        <p>确定要删除该数据吗？</p>
                    </template>
                    <a-button type="primary" danger>删除</a-button>
                </a-popconfirm>
            </template>
        </a-table>
    </div>
    <Info :item="item" v-model:isShow="isShowInfo" @confirm="onReload"></Info>
</template>

<script lang="ts">
import { columns, data } from './models/index';
import { getTree } from '@/utils/tool/utils';
import { reactive, toRefs, ref } from 'vue';
import { message } from 'ant-design-vue';
import { apiGetStructureList, apiDel } from '@/apis/structure';
import Info from './components/structureInfo.vue';
export default {
    components: {
        Info,
    },
    setup() {
        const state = reactive({
            columns,
            list: [],
            item: {},
        });
        const isShowInfo = ref(false);

        const getJson = (obj) => {
            return Object.assign(
                {
                    key: obj.structureID,
                    name: obj.structureName,
                    content: obj.structureRemark,
                    children: [],
                },
                obj
            );
        };

        const initLoad = async () => {
            const res = await apiGetStructureList();
            if (res && res.data.length) {
                const tree = getTree(res.data, 'parentID', getJson);
                state.list = tree;
            }
        };
        initLoad();

        const onReload = () => {
            isShowInfo.value = false;
            initLoad();
        };

        const onAdd = (row) => {
            state.item = {
                parentID: row.key,
            };
            isShowInfo.value = true;
        };
        const onEdit = (row) => {
            state.item = row;
            isShowInfo.value = true;
        };

        const onDel = async (row) => {
            const res = await apiDel(row.key);
            if (res) {
                message.success('删除成功');
                initLoad();
            }
        };

        return {
            ...toRefs(state),
            onDel,
            onReload,
            onAdd,
            onEdit,
            isShowInfo,
        };
    },
};
</script>

<style></style>
