<template>
    <div class="department-box">
        <div class="list-header">
            <a-button type="primary" @click="edit">添加部门</a-button>
        </div>
        <DataList :dataApi="apiGetList" rowKey="departmentName" :detaModel="DataModel">
            <template #action="{ data: { record } }">
                <a-button type="primary" @click="edit(record)">编辑</a-button>
                <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
                    <template #title>
                        <p>确定要删除该部门吗</p>
                    </template>
                    <a-button type="primary" danger>删除</a-button>
                </a-popconfirm>
            </template>
        </DataList>
    </div>
</template>

<script lang="ts">
import DataList from '@/components/dataList.vue';
import DataModel from './models/departments';
import { useRouter } from 'vue-router';
import { Button, notification } from 'ant-design-vue';
import { apiGetList, apiDel } from '@/apis/department';
import { defineComponent, onMounted } from 'vue';
import bus from '@/utils/bll/bus';

export default defineComponent({
    components: {
        DataList,
        Button,
    },
    setup() {
        const router = useRouter();

        // 删除部门
        const del = async (row: any) => {
            const res = await apiDel(row.departmentID);
            if (res) {
                notification.success({
                    message: '删除成功',
                });
                bus.$emit('reloadData', '');
            }
        };

        // 编辑部门
        const edit = (row: any) => {
            let name = undefined,
                id = undefined;
            if (row) {
                name = row.departmentName;
                id = row.departmentID;
            }
            router.push({
                path: '/branchinfo',
                query: {
                    name,
                    id,
                },
            });
        };

        onMounted(() => {
            bus.$emit('searchData', '');
        });

        return {
            DataModel,
            apiGetList,
            del,
            edit,
        };
    },
});
</script>

<style lang="scss" scoped>
.department-box {
    min-height: 100%;
    .ant-btn {
        margin: 0 5px;
    }
    .list-header {
        padding: 25px;
        background-color: #fff;
        margin-bottom: 25px;
    }
}
</style>
