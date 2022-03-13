<template>
    <div>
        <searchForm :dataModel="searchModel" :btnCol="8">
            <template #btn>
                <a-button type="primary" ghost @click="edit">添加</a-button>
            </template>
        </searchForm>
        <DataList :dataApi="apiGetList" :detaModel="listModel" rowKey="Row" :scroll="{ x: 1400 }">
            <template #action="record">
                <a-button type="primary" @click="edit(record)">编辑</a-button>
                <a-button type="primary" @click="setting(record)">权限</a-button>
                <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
                    <template #title>
                        <p>确定要删除该员工吗？</p>
                    </template>
                    <a-button type="primary" danger>删除</a-button>
                </a-popconfirm>
            </template>
        </DataList>
    </div>
</template>

<script lang="ts">
import searchForm from '@/components/searchForm.vue';
import DataList from '@/components/dataList.vue';
import { apiGetList, apiChange } from '@/apis/user';
import { searchModel, listModel } from './models/userlist';
import { useRouter } from 'vue-router';
import { Button, message } from 'ant-design-vue';
import bus from '@/utils/bll/bus';
export default {
    components: {
        searchForm,
        DataList,
        Button,
    },
    setup() {
        const router = useRouter();

        // 删除人员
        const del = async (row: any) => {
            console.log('row :>> ', row);
            const { userID } = row.data.text;
            const res = await apiChange({
                id: userID,
                state: 1,
            });
            message.success('删除成功');
            bus.$emit('reloadData', '');
        };

        // 编辑人员
        const edit = (row: any) => {
            let id = undefined;
            if (row && row.data && row.data.record) {
                id = row.data.record.userID;
            }
            router.push({
                path: '/userinfo',
                query: {
                    id,
                },
            });
        };

        // 人员权限设置
        const setting = (row: any) => {
            let name = undefined,
                id = undefined;
            if (row && row.data && row.data.record) {
                name = row.data.record.name;
                id = row.data.record.id;
            }
            router.push({
                path: '/permission',
                query: {
                    name,
                    id,
                },
            });
        };

        return {
            searchModel,
            listModel,
            apiGetList,
            edit,
            del,
            setting,
        };
    },
};
</script>

<style></style>
