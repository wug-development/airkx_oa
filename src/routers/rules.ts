import Layout from '../views/layout.vue';
const rules = () => import(/* webpackChunkName: "rulesManage" */ '../views/rulesManage/index.vue');
export default {
    path: '/rules',
    redirect: '/rules',
    name: 'rules',
    meta: {
        title: '制度管理',
        icon: 'AuditOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/rules',
            name: 'rules',
            meta: {
                title: '制度列表',
                hasChildren: false,
            },
            component: rules,
        },
    ],
};
