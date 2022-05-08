import Layout from '../views/layout.vue';
const safes = () => import(/* webpackChunkName: "safesManage" */ '../views/safeManage/index.vue');
export default {
    path: '/safes',
    redirect: '/safes',
    name: 'safes',
    meta: {
        title: '保险管理',
        icon: 'InsuranceOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/safes',
            name: 'safes',
            meta: {
                title: '保险列表',
                hasChildren: false,
            },
            component: safes,
        },
    ],
};
