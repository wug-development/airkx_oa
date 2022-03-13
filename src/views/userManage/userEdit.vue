<template>
	<div class="edituser-box">
		<DetailForm ref="refDetail" title="人员信息" :formModel="dataModel" :form="form">
			<template #default>
				<a-col :span="24">
					<a-form-item :wrapper-col="{ span: 20, offset: 3 }">
						<a-button type="primary" @click="onSubmit" size="large">保存</a-button>
						<a-button @click="back" size="large">返回列表</a-button>
						<a-button @click="toPage('permission')" class="ant-btn-warning" size="large">权限设置</a-button>
						<a-button @click="toPage('wages')" class="ant-btn-info" size="large">工资管理</a-button>
					</a-form-item>
				</a-col>
			</template>
		</DetailForm>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import { dataModel } from './models/userinfo';
import { useRouter } from 'vue-router';
import { Col, FormItem, Button } from 'ant-design-vue';

export default defineComponent({
	components: {
		DetailForm,
		Col,
		FormItem,
		Button,
	},
	setup() {
		const router = useRouter();
		const refDetail = ref();
		const form = reactive({
			id: '',
			name: '',
			dePartName: '',
		});
		const onSubmit = async () => {
			const isCheck = await refDetail.value.onSubmit();
			console.log('isCheck :>> ', isCheck);
		};
		const back = () => {
			router.go(-1);
		};

		const toPage = (path: string) => {
			router.push({
				path,
				query: {
					id: form.id,
					name: form.name
				}
			});
		};

		return {
			form,
			dataModel,
			onSubmit,
			refDetail,
			back,
			toPage,
		};
	},
});
</script>

<style lang="scss" scoped>
.edituser-box {
	height: 100%;
}
</style>