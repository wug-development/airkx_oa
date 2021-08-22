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
    // 公司架构
    structure,
    // 人员管理
    personnel,
    {
        path: '/editpwd',
        name: 'editpwd',
        component: Layout,
        meta: {
            title: '修改密码',
            hidden: true,
            hasChildren: false
        },
        children: [
            {
                path: '/',
                name: 'pwd',
                meta: {
                    title: '修改密码',
                    hidden: true,
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
router.beforeEach((to, from, next) => {
    store.dispatch('setBreadcrumb', to)
    next()
})
export default router