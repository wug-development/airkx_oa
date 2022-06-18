import Layout from '../views/layout.vue';
const wageList = () => import(/* webpackChunkName: "wageList" */ '../views/wageManage/wageList.vue');
const wageGrant = () => import(/* webpackChunkName: "wageGrant" */ '../views/wageManage/wageGrant.vue');

export default {
    path: '/wageslist',
    redirect: '/wageList',
    name: 'wage',
    component: Layout,
    meta: {
        title: '工资管理',
        icon: 'AccountBookOutlined',
        hasChildren: true,
    },
    children: [
        {
            path: '/wageList',
            name: 'wageList',
            meta: {
                title: '工资查询',
                hasChildren: false,
            },
            component: wageList,
        },
        {
            path: '/wageGrant',
            name: 'wageGrant',
            meta: {
                title: '工资发放',
                hasChildren: false,
            },
            component: wageGrant,
        },
    ],
};
