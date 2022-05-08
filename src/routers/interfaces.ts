import Layout from '../views/layout.vue';
const interfaces = () => import(/* webpackChunkName: "InterfaceManage" */ '../views/interfaceManage/index.vue');
export default {
    path: '/interfaces',
    redirect: '/interfaces',
    name: 'interfaces',
    meta: {
        title: '接口管理',
        icon: 'ApiOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/interfaces',
            name: 'interfaces',
            meta: {
                title: '接口列表',
                hasChildren: false,
            },
            component: interfaces,
        },
    ],
};
