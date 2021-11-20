<template>
	<div class="jobinfo-box">
        <DetailForm ref="refDetail" title="职位信息" :formModel="dataModel" :form="form">
            <template #default>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click="onSubmit" size="large">保存</a-button>
                    <a-button style="margin-left: 10px" @click="back" size="large">取消</a-button>
                </a-form-item>
            </template>
        </DetailForm>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import DetailForm from '@/components/detailForm.vue'
import { dataModel } from './models/jobinfo'
import { useRouter } from 'vue-router'
import { Button, FormItem } from 'ant-design-vue'

export default defineComponent({
    components: {
        DetailForm,
        FormItem,
        Button
    },
	setup() {
        const router = useRouter()
		const refDetail = ref();
		const form = reactive({
			name: ''
		});
		const onSubmit = async () => {
            const isCheck = await refDetail.value.onSubmit()
            console.log('isCheck :>> ', isCheck);
		};
        const back = () => {
            router.go(-1)
        }
		return {
			form,
			dataModel,
			onSubmit,
            refDetail,
            back
		};
	},
});
</script>

<style lang="scss" scoped>
.jobinfo-box{
    min-height: 100%;
}
</style>