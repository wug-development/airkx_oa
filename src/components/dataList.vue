<template>
    <a-table :columns="detaModel" :data-source="dataList" :pagination="false" @change="onChange" :rowKey="rowKey" :scroll="scroll">
        <template #action="record">
            <slot name="action" :data="record"></slot>
        </template>
    </a-table>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { Table } from 'ant-design-vue';
import bus from '../utils/bll/bus';

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
            type: Object || Boolean,
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
        const state = reactive({
            dataList: [{ id: '1', airCode: 'PK', content: '通知标题' }],
        });
        const onChange = (page: object) => {
            console.log('page :>> ', page);
        };
        const getData = () => {
            prop.dataApi().then((res: any) => {
                console.log('res :>> ', res);
                state.dataList = res;
            });
        };

        onMounted(() => {
            bus.$on('searchData', () => {
                getData();
            });
        });
        return {
            ...toRefs(state),
            onChange,
        };
    },
});
</script>
<style lang="scss" scoped>
::v-deep(.ant-btn) {
    margin: 0 5px;
}
</style>
