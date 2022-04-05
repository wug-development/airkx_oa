import Layout from '../views/layout.vue';
const wageList = () => import(/* webpackChunkName: "wageList" */ '../views/wageManage/wageList.vue');

export default {
    path: '/wageslist',
    redirect: '/wageList',
    name: 'wage',
    component: Layout,
    meta: {
        title: '工资管理',
        icon: 'wage',
        hasChildren: false,
    },
    children: [
        {
            path: '/wageList',
            name: 'wageList',
            meta: {
                title: '工资列表',
                hasChildren: false,
            },
            component: wageList,
        },
    ],
};
