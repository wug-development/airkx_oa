<template>
    <div>
        <searchForm :dataModel="searchModel" :btnCol="8"></searchForm>
        <DataList :dataApi="getSource" :detaModel="listModel" :scroll="{x: 1400}">
            <template #action="record">
                <a-button type="primary" @click="edit(record)">编辑</a-button>
                <a-button type="primary" @click="setting(record)">权限</a-button>
                <a-button type="primary" @click="del(record)" danger>删除</a-button>
            </template>
        </DataList>
    </div>
</template>

<script lang="ts">
import searchForm from '@/components/searchForm.vue'
import DataList from '@/components/dataList.vue'
import { searchModel, listModel } from './models/userlist'
import { useRouter } from 'vue-router'
import { confirm } from '@/utils/bll/bll'
import { Button } from 'ant-design-vue'
export default {
    components: {
        searchForm,
        DataList,
        Button
    },
    setup () {
        const router = useRouter()
        // 获取数据接口
        const getSource = () => {
            return new Promise((resolve, reject) => {
                resolve([{
                    id: '1',
                    key: '1',
                    name: '武广',
                    sex: '男',
                    departmentName: '技术部',
                    job: '前端开发',
                    tel: '13810173310',
                    phone: '73310321',
                    idcardno: '138282912723282349',
                    joindate: '2021-09-09',
                    edu: '本科',
                    wages: '100000'
                }])
            })
        }
        
        // 删除人员
        const del = (row: any) => {
            console.log('row :>> ', row);
            confirm({
                title: '确定要删除该部门吗?',
                callback: () => {
                    console.log('object :>> 确定');
                }
            });
        }

        // 编辑人员
        const edit = (row: any) => {
            let name = undefined, id = undefined;
            if (row && row.data && row.data.record) {
                name = row.data.record.name;
                id = row.data.record.id
            }
            router.push({
                path: '/userinfo',
                query: {
                    name,
                    id
                }
            })
        }

        // 人员权限设置
        const setting = (row: any) => {
            let name = undefined, id = undefined;
            if (row && row.data && row.data.record) {
                name = row.data.record.name;
                id = row.data.record.id
            }
            router.push({
                path: '/permission',
                query: {
                    name,
                    id
                }
            })
        }

        return {
            searchModel,
            listModel,
            getSource,
            edit,
            del,
            setting
        }
    }
}
</script>

<style>

</style>