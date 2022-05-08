import Layout from '../views/layout.vue';
const airModelInfo = () => import(/* webpackChunkName: "airModelInfo" */ '../views/airModelManage/airModelInfo.vue');
const airModelList = () => import(/* webpackChunkName: "airModelList" */ '../views/airModelManage/airModelList.vue');
export default {
    path: '/airModels',
    redirect: '/airModelList',
    name: 'airModels',
    component: Layout,
    meta: {
        title: '机型管理',
        icon: 'GoldOutlined',
        hasChildren: true,
    },
    children: [
        {
            path: '/airModelList',
            name: 'airModelList',
            meta: {
                title: '机型列表',
                hasChildren: false,
            },
            component: airModelList,
        },
        {
            path: '/airModelInfo',
            name: 'airModelInfo',
            meta: {
                title: '机型信息',
                hidden: true,
                hasChildren: false,
            },
            component: airModelInfo,
        },
    ],
};
