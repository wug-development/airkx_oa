<template>
    <a-table :columns="detaModel" :data-source="dataList" :pagination="pagination" @change="onChange" :rowKey="rowKey" :scroll="scroll">
        <template #action="record">
            <slot name="action" :data="record"></slot>
        </template>
    </a-table>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onBeforeMount, onBeforeUnmount } from 'vue';
import { Table } from 'ant-design-vue';
import bus from '../utils/bll/bus';
type pageType = {
    current;
    pageSize;
};

export default defineComponent({
    components: { Table },
    props: {
        dataApi: {
            type: Function,
            required: true,
        },
        detaModel: {
            type: Array,
            default: () => [],
        },
        pageConfig: {
            type: Boolean,
            default: true,
        },
        defaultParams: {
            type: Object,
            default: () => ({}),
        },
        scroll: {
            type: Object,
            default: () => {
                return { x: 1300 };
            },
        },
        rowKey: {
            type: String,
            default: 'key',
        },
    },
    setup(prop) {
        const pagination = reactive({
            current: 1,
            pageSize: 10,
            disabled: !prop.pageConfig,
            total: 1,
        });
        let params = {};
        const state = reactive({
            dataList: [],
        });
        const onChange = (page: pageType) => {
            pagination.current = page.current;
            pagination.pageSize = page.pageSize;
            params = Object.assign({}, params, {
                page: page.current,
                pageNum: page.pageSize,
            });
            getData(params);
        };
        const getData = (_params: object) => {
            prop.dataApi(_params).then((res: any) => {
                state.dataList = res.data;
                pagination.total = res.dataCount;
            });
        };

        onBeforeMount(() => {
            bus.$on('searchData', (_params) => {
                params = Object.assign(
                    {
                        page: pagination.current,
                        pageNum: pagination.pageSize,
                    },
                    prop.defaultParams,
                    _params
                );
                getData(params);
            });
            bus.$on('reloadData', () => {
                getData(params);
            });
        });
        onBeforeUnmount(() => {
            bus.$off('searchData');
            bus.$off('reloadData');
        });
        return {
            ...toRefs(state),
            onChange,
            pagination,
        };
    },
});
</script>
<style lang="scss" scoped>
::v-deep(.ant-btn) {
    margin: 0 5px;
}
</style>
