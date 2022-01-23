import Layout from '../views/layout.vue';
const siteWatch = () => import(/* webpackChunkName: "siteWatch" */ '../views/watchManage/siteWatch.vue');
const accountWatch = () => import(/* webpackChunkName: "accountWatch" */ '../views/watchManage/accountWatch.vue');
const accountList = () => import(/* webpackChunkName: "accountList" */ '../views/watchManage/accountList.vue');
const accountInfo = () => import(/* webpackChunkName: "accountInfo" */ '../views/watchManage/accountInfo.vue');
const accountReport = () => import(/* webpackChunkName: "accountReport" */ '../views/watchManage/accountReport.vue');
export default {
    path: '/syswatch',
    redirect: '/sitewatch',
    name: 'syswatch',
    component: Layout,
    meta: {
        title: '系统监控',
        icon: 'watch',
        hasChildren: true,
    },
    children: [
        {
            path: '/siteWatch',
            name: 'siteWatch',
            meta: {
                title: '网站监控',
                hasChildren: false,
            },
            component: siteWatch,
        },
        {
            path: '/accountWatch',
            name: 'accountWatch',
            meta: {
                title: '账户监控',
                hasChildren: false,
            },
            component: accountWatch,
        },
        {
            path: '/accountList',
            name: 'accountList',
            meta: {
                title: '账户列表',
                hasChildren: false,
            },
            component: accountList,
        },
        {
            path: '/accountInfo',
            name: 'accountInfo',
            meta: {
                title: '账户信息',
                hidden: true,
                hasChildren: false,
            },
            component: accountInfo,
        },
        {
            path: '/accountReport',
            name: 'accountReport',
            meta: {
                title: '账户操作记录',
                hasChildren: false,
            },
            component: accountReport,
        },
    ],
};
