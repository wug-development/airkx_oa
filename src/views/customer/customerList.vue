<template>
    <div class="customlist-box">
        <CSearchForm :dataModel="searchModel" :btnCol="24">
            <template #btn>
                <a-button type="primary" ghost @click="edit">添加</a-button>
            </template>
        </CSearchForm>
        <DataList :dataApi="apiGetList" :detaModel="listModel" rowKey="Row">
            <!-- <template #labels="record">2222 </template> -->
            <template #action="record">
                <a-button type="primary" @click="edit(record)">编辑</a-button>
                <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
                    <template #title>
                        <p>确定要删除该客户吗？</p>
                    </template>
                    <a-button type="primary" danger>删除</a-button>
                </a-popconfirm>
            </template>
        </DataList>
    </div>
</template>

<script lang="ts">
import CSearchForm from '@/components/searchForm.vue';
import DataList from '@/components/dataList.vue';
import { defineComponent } from 'vue';
import { searchModel, listModel } from './model';
import { apiGetList, apiDel } from '@/apis/customer';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import bus from '@/utils/bll/bus';

export default defineComponent({
    components: {
        CSearchForm,
        DataList,
    },
    setup() {
        const router = useRouter();

        // 删除
        const del = async (row: any) => {
            await apiDel(row.data.text.JCID);
            message.success('删除成功');
            bus.$emit('reloadData', '');
        };

        // 编辑
        const edit = (row: any) => {
            let id = undefined;
            if (row && row.data && row.data.record) {
                id = row.data.record.JCID;
            }
            router.push({
                path: `/customerinfo`,
                query: { id },
            });
        };
        return {
            searchModel,
            apiGetList,
            listModel,
            del,
            edit,
        };
    },
});
</script>

<style></style>
