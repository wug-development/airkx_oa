import Layout from '../views/layout.vue';
const resource = () => import(/* webpackChunkName: "resourceManage" */ '../views/resourceManage/index.vue');
export default {
    path: '/resource',
    redirect: '/resource',
    name: 'resource',
    meta: {
        title: '资源管理',
        icon: 'BarcodeOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/resource',
            name: 'resource',
            meta: {
                title: '资源列表',
                hasChildren: false,
            },
            component: resource,
        },
    ],
};
