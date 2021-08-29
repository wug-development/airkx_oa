import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout.vue'
import Home from '../views/home.vue'
import store from '../store/index'
import structure from './structure'
import personnel from './personnel'
const routes = [
    {
        path: '/',
        name: 'index',
        component: Layout,
        icon: 'home',
        meta: {
            title: '首页',
            hidden: false,
            hasChildren: false
        },
        children: [
            {
                path: '/',
                name: 'Home',
                meta: {
                    title: '首页',
                    hasChildren: false
                },
                component: Home
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue'),
        meta: {
            title: '登录',
            hidden: true,
            hasChildren: false
        },
        children: []
    },
    // 公司架构
    structure,
    // 人员管理
    personnel,
    // 修改密码
    {
        path: '/editpwd',
        name: 'editpwd',
        redirect: '/pwd',
        component: Layout,
        meta: {
            title: '修改密码',
            hidden: true,
            hasChildren: false
        },
        children: [
            {
                path: '/pwd',
                name: 'pwd',
                meta: {
                    title: '修改密码',
                    hasChildren: false
                },
                component: () => import('../views/editpwd.vue')
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(), // hash mode
    // history: createWebHistory(), // history mode
    routes
})
// 设置网站地图
router.beforeEach((to, from, next) => {
    store.dispatch('setBreadcrumb', to)
    next()
})
// 页面跳转回到头部
router.afterEach(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const _content = document.getElementById('layout-content')
    if (_content) {
        _content.scrollTop = 0;
    }
})
export default router