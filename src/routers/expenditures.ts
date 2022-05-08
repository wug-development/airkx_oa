import Layout from '../views/layout.vue';
const expenditure = () => import(/* webpackChunkName: "expenditureManage" */ '../views/expenditureManage/index.vue');
export default {
    path: '/expenditure',
    redirect: '/expenditure',
    name: 'expenditure',
    meta: {
        title: '支出管理',
        icon: 'PayCircleOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/expenditure',
            name: 'expenditure',
            meta: {
                title: '支出列表',
                hasChildren: false,
            },
            component: expenditure,
        },
    ],
};
