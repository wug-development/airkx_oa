import Layout from '../views/layout.vue';
const virtualAccountMonitor = () => import(/* webpackChunkName: "virtualAccountMonitor" */ '../views/virtualAccountMonitor/index.vue');
export default {
    path: '/virtualAccountMonitor',
    redirect: '/virtualAccountMonitor',
    name: 'virtualAccountMonitor',
    meta: {
        title: '虚拟账户监控',
        icon: 'FundViewOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/virtualAccountMonitor',
            name: 'virtualAccountMonitor',
            meta: {
                title: '虚拟账户列表',
                hasChildren: false,
            },
            component: virtualAccountMonitor,
        },
    ],
};
