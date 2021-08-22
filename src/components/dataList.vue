<template>
	<a-table
        :columns="detaModel" 
        :data-source="dataList"
        :pagination="false"
        @change="onChange"
        rowKey="key"
        :scroll="{ x: 1000 }">
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
            type: [],
            default: () => ([])
        },
        pageConfig: {
            type: Object || Boolean,
            default: () => {
                return false
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
