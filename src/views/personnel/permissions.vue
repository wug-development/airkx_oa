<template>
	<div class="permissions-box">
        <div class="sys-check-box">
            <span class="sys-check-box-label">项目权限：</span>
            <a-checkbox-group v-model:value="proCheckedList" :options="programModel" />
        </div>
        <div class="sys-check-box">
            <span class="sys-check-box-label">系统权限：</span>
            <a-tree checkable :tree-data="treeModel" :selectable="false" v-model:checkedKeys="sysCheckedList"></a-tree>
        </div>
		<div class="sys-btns">
			<a-button type="primary" @click="onSubmit" size="large">保存</a-button>
			<a-button style="margin-left: 10px" @click="onBack" size="large">返回</a-button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { programModel, treeModel } from './models/permissioninfo';
import { useRouter } from 'vue-router'

export default defineComponent({
	setup() {
        const router = useRouter()
		// 项目默认权限
        const proCheckedList = ref<string[]>(['sysBack', 'sysBusiness'])

		// 系统默认权限
		const sysCheckedList = ref<string[]>();

		// 保存
		const onSubmit = async () => {
            console.log('isCheck :>> ', proCheckedList.value);
            console.log('isCheck :>> ', sysCheckedList.value);
		};
		// 返回
        const onBack = () => {
            router.go(-1)
        }

		return {
            programModel,
            treeModel,
			proCheckedList,
            sysCheckedList,
			onSubmit,
			onBack
		};
	},
});
</script>

<style lang="scss" scoped>
.permissions-box{
    min-height: 100%;
    background-color: #fff;
    .sys-check-box{
        padding: 25px 0;
        display: flex;
        &-label{
            width: 100px;
            text-align: right;
            margin-right: 10px;
        }
    }
	.sys-btns{
		margin-top: 20px;
		padding-left: 110px;
	}
}
</style>