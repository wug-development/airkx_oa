<template>
    <div class="ticketlist-box">
        <!-- <CSearchForm :dataModel="searchModel" :btnCol="8">
            <template #btn>
                <a-button type="primary" ghost @click="edit">添加</a-button>
            </template>
        </CSearchForm> -->
        <DataList :dataApi="apiGetList" :detaModel="listModel" rowKey="Row">
            <template #action="record">
                <a-button type="primary" @click="edit(record)">编辑</a-button>
                <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
                    <template #title>
                        <p>确定要删除该城市吗？</p>
                    </template>
                    <a-button type="primary" danger>删除</a-button>
                </a-popconfirm>
            </template>
        </DataList>
    </div>
</template>

<script lang="ts">
// import CSearchForm from '@/components/searchForm.vue';
import DataList from '@/components/dataList.vue';
import { defineComponent } from 'vue';
import { listModel } from './model';
import { apiGetList, apiDel } from '@/apis/city';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import bus from '@/utils/bll/bus';

export default defineComponent({
    components: {
        // CSearchForm,
        DataList,
    },
    setup() {
        const router = useRouter();

        // 删除
        const del = async (row: any) => {
            console.log('row :>> ', row.data.text.dnCityID);
            const res = await apiDel(row.data.text.dnCityID);
            console.log('res :>> ', res);
            message.success('删除成功');
            bus.$emit('reloadData', '');
        };

        // 编辑
        const edit = (row: any) => {
            let id = undefined;
            if (row && row.data && row.data.record) {
                id = row.data.record.id;
            }
            router.push({
                path: `/cityinfo?id=${id}`,
            });
        };
        return {
            // searchModel,
            apiGetList,
            listModel,
            del,
            edit,
        };
    },
});
</script>

<style></style>
