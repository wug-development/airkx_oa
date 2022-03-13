<template>
	<div class="permissions-box">
        <div class="sys-check-box">
            <span class="sys-check-box-label">项目权限：</span>
            <a-checkbox-group v-model:value="proCheckedList" :options="programModel" />
        </div>
        <div class="sys-check-box">
            <span class="sys-check-box-label">OA系统权限：</span>
            <a-tree checkable :tree-data="treeModel" :selectable="false" v-model:checkedKeys="sysCheckedList"></a-tree>
        </div>
        <div class="sys-check-box">
            <span class="sys-check-box-label">国际/国内出票权限：</span>
            <a-tree checkable :tree-data="outTicketModel" :selectable="false" v-model:checkedKeys="ticketCheckedList"></a-tree>
        </div>
		<div class="sys-btns">
			<a-button type="primary" @click="onSubmit" size="large">保存 <LoadingOutlined v-if="loading" :style="{fontSize: '16px', color: '#fff'}" /></a-button>
			<a-button style="margin-left: 10px" @click="onBack" size="large">返回</a-button>
		</div>
	</div>
</template>

<script lang="ts">
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined'
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { programModel, treeModel, outTicketModel } from './models/permissioninfo';
import { useRouter, useRoute } from 'vue-router'
import { CheckboxGroup, Tree, Button, message } from 'ant-design-vue'
import { apiSavePermission, apiGetPermission } from '@/apis/permission'

export default defineComponent({
    components: { CheckboxGroup, Tree, Button, LoadingOutlined },
	setup() {
        const router = useRouter()
        const route = useRoute()
        const { id, name } = route.query

        const state = reactive({
            // 项目默认权限
            proCheckedList: ['sysBack', 'sysBusiness'],
            // 系统默认权限
            sysCheckedList: [],
            // 国际/国内出票默认权限
            ticketCheckedList: []
        })
        console.log('id :>> ', id);

        // 获取权限
        apiGetPermission({
            id: id
        }).then(res => {
            if (res.status === 1) {
                const list = res.data
                const len = list.length
                const plist = [], sysList = [], tickerList = []
                if (len > 0) {
                    for(const item of list) {
                        if (item.type === 0) {
                            plist.push(item.promise)
                        } else if (item.type === 1) {
                            sysList.push(item.promise)
                        } else if (item.type === 2) {
                            tickerList.push(item.promise)
                        }
                    }
                    if (plist.length > 0) {
                        state.proCheckedList = plist
                    }
                    if (sysList.length > 0) {
                        state.sysCheckedList = sysList
                    }
                    if (tickerList.length > 0) {
                        state.ticketCheckedList = tickerList
                    }
                }
            }
        })

		const loading = ref(false);

		// 保存
		const onSubmit = async () => {
            if (loading.value) return false;
            let info = localStorage.getItem('user');
            if (info) {
                const user = JSON.parse(info);
                loading.value = true;
                apiSavePermission({
                    userid: user.id,
                    per: [
                        {
                            type: 0,
                            name: state.proCheckedList
                        },
                        {
                            type: 1,
                            name: state.sysCheckedList
                        },
                        {
                            type: 2,
                            name: state.ticketCheckedList
                        }
                    ]
                }).then(res => {
                    if (res.status === 1) {
                        message.success(`保存成功，请${name}重新登录！`)
                    } else {
                        message.error('保存失败，请重试')
                    }
                }).finally(() => {
                    loading.value = false
                })
            } else {
                router.push({
                    path: '/'
                })
            }
		};
		// 返回
        const onBack = () => {
            router.go(-1)
        }

		return {
            programModel,
            treeModel,
            outTicketModel,
            ...toRefs(state),
			onSubmit,
			onBack,
            loading
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
            width: 150px;
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