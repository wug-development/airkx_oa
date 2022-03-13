<template>
	<div class="wages-box">
		<DetailForm ref="refDetail" title="试用期工资设置" :formModel="dataModelBefore" :form="form">
			<template #subtitle>
				<div class="subtitle-name">（ {{form.name}} ）</div>
			</template>
		</DetailForm>
		<DetailForm ref="refDetail" title="转正工资设置" :formModel="dataModel" :form="form">
			<template #subtitle>
				<div class="subtitle-name">（ {{form.name}} ）</div>
			</template>
			<template #default>
				<a-col :span="24">
					<a-form-item :wrapper-col="{ span: 20, offset: 4 }">
						<a-button type="primary" @click="onSubmit" size="large">保存</a-button>
						<a-button style="margin-left: 10px" @click="back" size="large">返回</a-button>
					</a-form-item>
				</a-col>
			</template>
		</DetailForm>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import { dataModel, dataModelBefore } from './models/wagesinfo';
import { useRouter } from 'vue-router';
import { Button, Col, FormItem } from 'ant-design-vue';

export default defineComponent({
	components: {
		DetailForm,
		Button,
		Col,
		FormItem,
	},
	setup() {
		const router = useRouter();
		const refDetail = ref();
		const form = reactive({
			name: '武广',
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
			dataModelBefore,
			onSubmit,
			refDetail,
			back,
		};
	},
});
</script>

<style lang="scss" scoped>
.wages-box {
	height: 100%;
	.subtitle-name {
		font-size: 14px;
	}
}
</style>