<template>
    <div class="jobs-box">
        <div class="list-header">
            <a-button type="primary" @click="edit">添加职位</a-button>
        </div>
        <DataList :dataApi="getSource" :detaModel="DataModel">
            <template #action="record">
                <a-button type="primary" @click="edit(record)">编辑</a-button>
                <a-button type="primary" @click="del(record)" danger>删除</a-button>
            </template>
        </DataList>
    </div>
</template>

<script lang="ts">
import DataList from '@/components/dataList.vue'
import DataModel from './models/jobs'
import { useRouter } from 'vue-router'
import { confirm } from '../../utils/bll/bll'

export default {
    components: {
        DataList
    },
    setup () {
        const router = useRouter()
        const getSource = () => {
            return new Promise((resolve, reject) => {
                resolve([{
                    id: '1',
                    key: '1',
                    dePartName: '技术部',
                    name: '前端开发'
                }, {
                    id: '2',
                    key: '2',
                    dePartName: '行政部',
                    name: '人事'
                }])
            })
        }

        // 删除职位
        const del = (row: any) => {
            console.log('row :>> ', row);
            confirm({
                title: '确定要删除该职位吗?',
                callback () {
                    console.log('OK');
                }
            });
        } 

        // 编辑职位
        const edit = (row: any) => {
            let name = undefined, id = undefined;
            if (row && row.data && row.data.record) {
                name = row.data.record.name;
                id = row.data.record.id
            }
            router.push({
                path: '/jobinfo',
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
.jobs-box{
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