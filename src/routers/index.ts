import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router';
import Layout from '../views/layout.vue';
import Login from '../views/login.vue';
import store from '../store/index';
import structure from './structure';
import personnel from './personnel';
import personal from './personal';
import customer from './customer';
import ticketStation from './ticketStation';
import stats from './stats';
import notices from './notices';
import persons from './persons';
import sets from './set';
import airCompany from './airCompany';
import sysWatchs from './sysWatchs';
import payments from './payments';
import wages from './wages';
import mys from './my';
import home from './home';
const Editpwd = () => import(/* webpackChunkName: "editpwd" */ '../views/editpwd.vue');
const routes = [
    home,
    personal,
    // 公司架构
    structure,
    // 人员管理
    personnel,
    // 工资管理
    wages,
    // 我的
    mys,
    // 客户管理
    customer,
    // 出票点管理
    ticketStation,
    // 统计管理
    stats,
    // 通知管理
    notices,
    // 乘机人管理
    persons,
    airCompany,
    sets,
    sysWatchs,
    payments,
    {
        path: '/login',
        name: 'login',
        component: () => Login,
        meta: {
            title: '登录',
            hidden: true,
            hasChildren: false,
        },
        children: [],
    },
    // 修改密码
    {
        path: '/editpwd',
        name: 'editpwd',
        redirect: '/pwd',
        component: Layout,
        meta: {
            title: '修改密码',
            hidden: true,
            hasChildren: false,
        },
        children: [
            {
                path: '/pwd',
                name: 'pwd',
                meta: {
                    title: '修改密码',
                    hasChildren: false,
                },
                component: Editpwd,
            },
        ],
    },
];
const router = createRouter({
    history: createWebHashHistory(), // hash mode
    // history: createWebHistory(), // history mode
    routes,
});
// 设置网站地图
router.beforeEach((to, from, next) => {
    if (to.name !== 'login') {
        const user = localStorage.getItem('user');
        if (user) {
            store.dispatch('setBreadcrumb', to);
            next();
        } else {
            next({
                path: '/login',
            });
        }
    } else {
        localStorage.removeItem('user');
        next();
    }
});
// 页面跳转回到头部
router.afterEach(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const _content = document.getElementById('layout-content');
    if (_content) {
        _content.scrollTop = 0;
    }
});
export default router;
