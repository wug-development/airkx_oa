import Layout from '../views/layout.vue';
const orders = () => import(/* webpackChunkName: "ordersManage" */ '../views/ordersManage/index.vue');
export default {
    path: '/orders',
    redirect: '/orders',
    name: 'orders',
    meta: {
        title: '订单管理',
        icon: 'FileSearchOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/orders',
            name: 'orders',
            meta: {
                title: '国际订单列表',
                hasChildren: false,
            },
            component: orders,
        },
    ],
};
