<template>
    <a-layout class="ant-layout-box">
        <a-layout-sider v-model:collapsed="collapsed" class="ant-layout-aside">
            <div class="logo">凯行OA管理系统</div>
            <div class="ant-layout-box-menu">
                <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
                    <template v-for="(item, index) in filterMenu(menuData)">
                        <template v-if="item.meta">
                            <template v-if="item.meta.hasChildren">
                                <a-sub-menu :key="index">
                                    <template #title>
                                        <span class="menu-icon" :class="'menu-icon-' + item.meta.icon">{{ item.meta.title }}</span>
                                    </template>
                                    <a-menu-item v-for="(sub, j) in filterMenu(item.children)" @click="toPage(sub)" :key="index + '-' + j">{{ sub.meta.title }}</a-menu-item>
                                </a-sub-menu>
                            </template>
                            <a-menu-item v-else :key="index" @click="toPage(item)">
                                <span class="menu-icon" :class="'menu-icon-' + item.meta.icon">{{ item.meta.title }}</span>
                            </a-menu-item>
                        </template>
                    </template>
                </a-menu>
            </div>
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
                                <router-link :to="item.path">{{ item.meta.title }}</router-link>
                            </a-breadcrumb-item>
                        </template>
                    </template>
                </a-breadcrumb>
                <a-dropdown class="ant-layout-right-header-dropdown">
                    <a class="ant-dropdown-link" @click.prevent>周科 <DownOutlined /></a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="0" @click="toPage({ path: 'editpwd' })">修改密码</a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="1" @click="loginOut">退出登录</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-layout-header>
            <a-layout-content class="ant-layout-content" id="layout-content">
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
    <div></div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from 'vue';
import store from '../store/index';
import { useRouter, _RouteRecordBase } from 'vue-router';
import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        DownOutlined,
    },
    setup() {
        const router = useRouter();
        console.log('router :>> ', router.options.routes);
        // 菜单数据
        const menuData = router.options.routes;
        const filterMenu = (arr: _RouteRecordBase[]) => {
            return arr.filter((item) => item.meta && !item.meta.hidden);
        };

        // 网站地图
        const breadcrumb = computed(() => {
            return store.getters.getBreadcrumb.matched;
        });
        // 跳转页面
        const toPage = (item: _RouteRecordBase) => {
            const { path } = item;
            router.push({
                path,
            });
        };

        // 退出登录
        const loginOut = () => {
            localStorage.removeItem('user');
            router.push({
                path: '/login',
            });
        };

        return {
            selectedKeys: ref<string[]>(['1']),
            collapsed: ref<boolean>(false),
            // ...toRefs(state),
            filterMenu,
            toPage,
            menuData,
            breadcrumb,
            loginOut,
        };
    },
});
</script>
