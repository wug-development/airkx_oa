<template>
    <div class="noticelist-box">
        <CSearchForm :dataModel="searchModel" :btnCol="8"></CSearchForm>
        <DataList :dataApi="apiGetNotice" :defaultParams="defaultParams" :detaModel="listModel" rowKey="id" :scroll="{ x: false }">
            <template #action="record">
                <a-button type="primary" @click="edit(record)">编辑</a-button>
                <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
                    <template #title>
                        <p>确定要删除该通知吗？</p>
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
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { searchModel, listModel } from './model/notice';
import { apiGetNotice } from '@/apis/notices';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
    components: {
        CSearchForm,
        DataList,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            defaultParams: {
                type: 0,
            },
        });

        onBeforeMount(async () => {
            state.defaultParams.type = Number(route.query.type) || 0;
        });

        // 删除人员
        const del = (row: any) => {
            console.log('row :>> ', row);
        };

        // 编辑人员
        const edit = (row: any) => {
            let id = undefined;
            if (row && row.data && row.data.record) {
                id = row.data.record.id;
            }
            router.push({
                path: `/sendNotice?id=${id}`,
            });
        };
        return {
            searchModel,
            apiGetNotice,
            listModel,
            del,
            edit,
            ...toRefs(state),
        };
    },
});
</script>

<style></style>
