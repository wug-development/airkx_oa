<template>
	<div class="editpwd-box">
		<DetailForm ref="refDetail" title="修改密码" :formModel="dataModel" :form="form">
			<template #default>
				<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
					<a-button type="primary" @click="onSubmit" size="large">保存 <LoadingOutlined v-if="loading" :style="{fontSize: '16px', color: '#fff'}" /></a-button>
					<a-button style="margin-left: 10px" @click="back" size="large">取消</a-button>
				</a-form-item>
			</template>
		</DetailForm>
	</div>
</template>

<script lang="ts">
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined'
import { defineComponent, reactive, ref } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import { useRouter } from 'vue-router';
import { FormItem, Button, message } from 'ant-design-vue'
import { apiEditPassword } from '@/apis/user'

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
		FormItem,
		Button,
		LoadingOutlined
	},
	setup() {
		const router = useRouter();
		const refDetail = ref();
		const loading = ref(false);
		const form = reactive({
			pwd: '',
			renewpwd: '',
			newpwd: ''
		});
		const onSubmit = async () => {
			const isCheck = await refDetail.value.onSubmit();
			if (isCheck) {
				if (form.newpwd !== form.renewpwd) {
					message.error('密码两次输入不一致')
					return false
				} else if (!loading.value){
					let info = localStorage.getItem('user');
					if (info) {
						const user = JSON.parse(info);
						loading.value = true
						apiEditPassword({
							uid: user.id,
							oldpass: form.pwd,
							newpass: form.newpwd
						}).then(res => {
							if (res.status === 1) {
								message.success('修改成功！')
								localStorage.removeItem('user')
								router.push({
									path: '/login'
								})
							} else {
								message.error('修改失败，请重试')
							}
						}).finally(() => {
							loading.value = false
						})
					} else {
						router.push({
							path: '/'
						})
					}
				}
			}
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
			loading
		};
	},
});
</script>

<style lang="scss" scoped>
.departmentinfo-box {
	min-height: 100%;
}
</style>