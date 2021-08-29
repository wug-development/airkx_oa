<template>
	<div class="editpwd-box">
		<DetailForm ref="refDetail" title="修改密码" :formModel="dataModel" :form="form">
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
import DetailForm from '@/components/detailForm.vue';
import { useRouter } from 'vue-router';

const dataModel = [
	{
		name: 'pwd',
		label: '原密码',
		rules: [
			{
				required: true,
				message: '请输入原密码',
				trigger: 'blur',
			},
		],
	},
	{
		name: 'newpwd',
		label: '新密码',
		rules: [
			{
				required: true,
				message: '请输入新密码',
				trigger: 'blur',
			},
		],
	},
	{
		name: 'renewpwd',
		label: '确认密码',
		rules: [
			{
				required: true,
				message: '请输入确认密码',
				trigger: 'blur',
			},
		],
	},
];

export default defineComponent({
	components: {
		DetailForm,
	},
	setup() {
		const router = useRouter();
		const refDetail = ref();
		const form = reactive({
			name: '',
		});
		const onSubmit = async () => {
			const isCheck = await refDetail.value.onSubmit();
			console.log('isCheck :>> ', isCheck);
		};
		const back = () => {
			router.go(-1);
		};
		return {
			form,
			dataModel,
			onSubmit,
			refDetail,
			back,
		};
	},
});
</script>

<style lang="scss" scoped>
.departmentinfo-box {
	min-height: 100%;
}
</style>