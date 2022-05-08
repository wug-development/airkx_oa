import Layout from '../views/layout.vue';
const income = () => import(/* webpackChunkName: "incomeManage" */ '../views/incomeManage/index.vue');
export default {
    path: '/income',
    redirect: '/income',
    name: 'income',
    meta: {
        title: '收入管理',
        icon: 'MoneyCollectOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/income',
            name: 'income',
            meta: {
                title: '收入列表',
                hasChildren: false,
            },
            component: income,
        },
    ],
};
