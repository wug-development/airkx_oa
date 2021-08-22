<template>
    <div class="department-box">
        <div class="list-header">
            <a-button type="primary" @click="edit">添加部门</a-button>
        </div>
        <!-- <QueryForm></QueryForm> -->
        <DataList :dataApi="getSource" :detaModel="DataModel">
            <template #action="record">
                <a-button type="primary" @click="edit(record)">编辑</a-button>
                <a-button type="primary" @click="del(record)" danger>删除</a-button>
            </template>
        </DataList>
    </div>
</template>

<script lang="ts">
// import QueryForm from '@/components/queryFrom.vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import DataList from '@/components/dataList.vue'
import DataModel from './models/departments'
import { useRouter } from 'vue-router'
import { createVNode } from 'vue'
import { Modal } from 'ant-design-vue';

export default {
    components: {
        // QueryForm,
        DataList
    },
    setup () {
        const router = useRouter()
        const getSource = () => {
            return new Promise((resolve, reject) => {
                resolve([{
                    id: '1',
                    key: '1',
                    name: '技术部'
                }, {
                    id: '2',
                    key: '2',
                    name: '行政部'
                }])
            })
        }

        // 删除部门
        const del = (row: any) => {
            console.log('row :>> ', row);
            Modal.confirm({
                title: '确定要删除该部门吗?',
                icon: createVNode(ExclamationCircleOutlined),
                okText: '确定',
                okType: 'danger',
                cancelText: '取消',
                closable: true,
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        } 

        // 编辑部门
        const edit = (row: any) => {
            let name = undefined, id = undefined;
            if (row && row.data && row.data.record) {
                name = row.data.record.name;
                id = row.data.record.id
            }
            router.push({
                path: '/branchinfo',
                query: {
                    name,
                    id
                }
            })
        } 

        return {
            DataModel,
            getSource,
            del,
            edit
        }
    }
}
</script>

<style lang="scss" scoped>
.department-box{
    min-height: 100%;
    .ant-btn{
        margin: 0 5px;
    }
    .list-header{
        padding: 25px;
        background-color: #fff;
        margin-bottom: 25px;
    }
}
</style>