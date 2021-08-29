<template>
	<a-layout class="ant-layout-box">
		<a-layout-sider v-model:collapsed="collapsed" class="ant-layout-aside">
			<div class="logo">凯行OA管理系统</div>
			<a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
				<template v-for="(item, index) in filterMenu(menuData)">
					<template v-if="item.meta">
						<template v-if="item.meta.hasChildren">
							<a-sub-menu :key="index">
								<template #title><span class="menu-icon" :class="'menu-icon-' + item.icon">{{item.meta.title}}</span></template>
								<a-menu-item v-for="(sub, j) in filterMenu(item.children)" @click="toPage(sub)" :key="index + '-' + j">{{sub.meta.title}}</a-menu-item>
							</a-sub-menu>
						</template>
						<a-menu-item v-else :key="index" @click="toPage(item)">
							<span class="menu-icon" :class="'menu-icon-' + item.icon">{{item.meta.title}}</span>
						</a-menu-item>
					</template>
				</template>
			</a-menu>
		</a-layout-sider>
		<a-layout class="ant-layout-right">
			<a-layout-header class="ant-layout-right-header">
				<div class="ant-layout-right-header-trigger">
					<menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
					<menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
				</div>
				<a-breadcrumb class="ant-layout-right-header-breadcrumb">
					<template v-for="item in breadcrumb">
						<template v-if="item.name !== 'Home'">
							<a-breadcrumb-item>
								<router-link :to="item.path">{{
									item.meta.title
								}}</router-link>
							</a-breadcrumb-item>
						</template>
					</template>
				</a-breadcrumb>
				<a-dropdown class="ant-layout-right-header-dropdown">
					<a class="ant-dropdown-link" @click.prevent>周科 <DownOutlined /></a>
					<template #overlay>
						<a-menu>
							<a-menu-item key="0" @click="toPage({path: 'editpwd'})">修改密码</a-menu-item>
							<a-menu-divider />
							<a-menu-item key="1">退出登录</a-menu-item>
						</a-menu>
					</template>
				</a-dropdown>
			</a-layout-header>
			<a-layout-content class="ant-layout-content" id="layout-content">
				<router-view></router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, computed, reactive, toRefs } from 'vue';
import { useRouter, _RouteRecordBase } from 'vue-router';
import store from '../store/index';
export default defineComponent({
	components: {
		MenuUnfoldOutlined,
		MenuFoldOutlined,
		DownOutlined
	},
	setup() {
		const router = useRouter();
		console.log('router :>> ', router.options.routes);
		// 菜单数据
		const menuData = router.options.routes
		const filterMenu = (arr: _RouteRecordBase[]) => {
			return arr.filter(item => item.meta && !item.meta.hidden)
		} 

		// 网站地图
		const breadcrumb = computed(() => {
			return store.getters.getBreadcrumb.matched;
		});
		// 跳转页面
		const toPage = (item: _RouteRecordBase) => {
			const { path } = item
			router.push({
				path
			})
		}

		return {
			selectedKeys: ref<string[]>(['1']),
			collapsed: ref<boolean>(false),
			// ...toRefs(state),
			filterMenu,
			toPage,
			menuData,
			breadcrumb
		};
	},
});
</script>
<style lang="scss" scoped>
$header-height: 64px;
.ant-layout-box {
	height: 100%;
	background-color: #f0f2f5;
	.ant-layout-aside {
		height: 100%;
		overflow-y: hidden;
		.logo {
			height: 32px;
			line-height: 32px;
			color: #fff;
			font-size: 20px;
			margin: 16px;
			text-align: center;
			overflow: hidden;
		}
		::v-deep(.ant-menu-inline-collapsed) {
			.ant-menu-title-content {
				overflow: hidden;
				width: 20px;
				display: block;
			}
		}
		.menu-icon {
			padding-left: 24px;
		}
		.menu-icon-home {
			background: url('@/assets/icon/icon-home.png') no-repeat left center;
			background-size: 16px auto;
		}
		.menu-icon-structure {
			background: url('@/assets/icon/icon-jg.png') no-repeat left center;
			background-size: 16px auto;
		}
		.menu-icon-personnel {
			background: url('@/assets/icon/icon-personnel.png') no-repeat left center;
			background-size: 18px auto;
		}
	}
	.ant-layout-right {
		height: 100%;
		overflow-y: hidden;
		position: relative;
		padding-top: $header-height;
		&-header {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1000;
			width: 100%;
			background-color: #fff;
			padding: 0;
			box-shadow: 0 1px 3px #eee;
			&-trigger {
				position: absolute;
				left: 0;
				top: 0;
				width: $header-height;
				height: $header-height;
				.trigger {
					font-size: 18px;
					line-height: $header-height;
					padding: 0 24px;
					cursor: pointer;
					transition: color 0.3s;
				}
				.trigger:hover {
					color: #1890ff;
				}
			}
			&-breadcrumb {
				padding-left: $header-height;
				height: $header-height;
				line-height: $header-height;
			}
			&-dropdown{
				position: absolute;
				right: 0px;
				top: 0px;
				height: 100%;
				padding-right: 25px;
			}
		}
		.ant-layout-content {
			padding: 24px 16px;
			min-height: 100%;
			overflow-y: auto;
		}
	}
}
::v-deep(.ant-dropdown-menu-item-active){
	background-color: #1890ff !important;
	color: #fff;
}
</style>
