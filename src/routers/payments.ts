import Layout from '../views/layout.vue';
const incomeList = () => import(/* webpackChunkName: "incomeList" */ '../views/paymentManage/incomeList.vue');
const expendList = () => import(/* webpackChunkName: "expendList" */ '../views/paymentManage/expendList.vue');
export default {
    path: '/payments',
    redirect: '/paymentlist',
    name: 'payments',
    component: Layout,
    meta: {
        title: '收支管理',
        icon: 'payments',
        hasChildren: true,
    },
    children: [
        {
            path: '/incomeList',
            name: 'incomeList',
            meta: {
                title: '收入列表',
                hasChildren: false,
            },
            component: incomeList,
        },
        {
            path: '/expendList',
            name: 'expendList',
            meta: {
                title: '支出列表',
                hasChildren: false,
            },
            component: expendList,
        },
    ],
};
