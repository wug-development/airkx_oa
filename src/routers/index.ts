import store from '../store/index';
import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';
import Layout from '../views/layout.vue';
import home from './home';
import personal from './personal';
import structure from './structure';
import attendance from './attendance';
import wages from './wages';
import rules from './rules';
import customer from './customer';
import orders from './orders';
import ticketStation from './ticketStation';
import incomes from './incomes';
import expenditures from './expenditures';
import resourcesM from './resourcesM';
import citys from './citys';
import airCompany from './airCompany';
import airModel from './airModel';
import discountAirway from './discountAirway';
import virtualAccountMonitor from './virtualAccountMonitor';
import webSiteMonitor from './webSiteMonitor';
import emails from './emails';
import persons from './persons';
import interfaces from './interfaces';
import safes from './safes';
import trainTickets from './trainTickets';
// import stats from './stats';
// import notices from './notices';
// import sets from './set';
// import sysWatchs from './sysWatchs';
// import payments from './payments';
// import mys from './my';
// import personnel from './personnel';
const Editpwd = () => import(/* webpackChunkName: "editpwd" */ '../views/editpwd.vue');
const routes = [
    home,
    personal,
    // 公司架构
    structure,
    // 考勤管理
    attendance,
    // 工资管理
    wages,
    // 制度管理
    rules,
    // 客户管理
    customer,
    // 订单管理
    orders,
    // 出票点管理
    ticketStation,
    // 收入管理
    incomes,
    // 支出管理
    expenditures,
    // 资源管理
    resourcesM,
    // 城市管理
    citys,
    // 航空公司管理
    airCompany,
    // 机型管理
    airModel,
    // 优惠航线
    discountAirway,
    // 虚拟账户监控
    virtualAccountMonitor,
    // 网站监控
    webSiteMonitor,
    // 邮箱管理
    emails,
    // 乘机人管理
    persons,
    // 接口管理
    interfaces,
    // 保险管理
    safes,
    // 火车票管理
    trainTickets,
    // // 我的
    // mys,
    // // 统计管理
    // stats,
    // // 通知管理
    // notices,
    // sets,
    // sysWatchs,
    // payments,
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
