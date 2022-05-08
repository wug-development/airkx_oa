import Layout from '../views/layout.vue';
const Customerlist = () => import(/* webpackChunkName: "customerList" */ '../views/customer/customerList.vue');
const Customerinfo = () => import(/* webpackChunkName: "customerEdit" */ '../views/customer/customerEdit.vue');
export default {
    path: '/customer',
    redirect: '/customerlist',
    name: 'customer',
    component: Layout,
    meta: {
        title: '客户管理',
        icon: 'SolutionOutlined',
        hasChildren: false,
    },
    children: [
        {
            path: '/customerlist',
            name: 'customerlist',
            meta: {
                title: '客户列表',
                hasChildren: false,
            },
            component: Customerlist,
        },
        {
            path: '/customerinfo',
            name: 'customerinfo',
            meta: {
                title: '客户信息',
                hasChildren: false,
            },
            component: Customerinfo,
        },
    ],
};
