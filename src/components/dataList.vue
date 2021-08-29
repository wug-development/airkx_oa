<template>
	<a-table
        :columns="detaModel" 
        :data-source="dataList"
        :pagination="false"
        @change="onChange"
        rowKey="key"
        :scroll="scroll">
		<template #action="record">
			<slot name="action" :data="record"></slot>
		</template>
	</a-table>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
    props: {
        dataApi: {
            type: Function,
            required: true
        },
        detaModel: {
            type: Array,
            default: () => ([])
        },
        pageConfig: {
            type: Object || Boolean
        },
        scroll: {
            type: Object,
            default: () => {
                return {x: 1300}
            }
        }
    },
	setup(prop) {
        const state = reactive({
            dataList: []
        })
        const onChange = (page: object) => {
            console.log('page :>> ', page);
        }
        prop.dataApi().then((res: any)=> {
            console.log('res :>> ', res);
            state.dataList = res
        })
		return {
            ...toRefs(state),
            onChange
		};
	},
});
</script>
<style lang="scss" scoped>
::v-deep(.ant-btn){
    margin: 0 5px;
}
</style>