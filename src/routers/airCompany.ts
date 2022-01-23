import Layout from '../views/layout.vue';
const AddAirCompany = () => import(/* webpackChunkName: "addAirCompany" */ '../views/airCompanyManage/addAirCompany.vue');
const airCompanyList = () => import(/* webpackChunkName: "airCompanyList" */ '../views/airCompanyManage/airCompanyList.vue');
export default {
    path: '/airCompanys',
    redirect: '/airCompanylist',
    name: 'airCompanys',
    component: Layout,
    meta: {
        title: '航空公司管理',
        icon: 'airCompanys',
        hasChildren: true,
    },
    children: [
        {
            path: '/airCompanyList',
            name: 'airCompanyList',
            meta: {
                title: '航空公司列表',
                hasChildren: false,
            },
            component: airCompanyList,
        },
        {
            path: '/addAirCompany',
            name: 'addAirCompany',
            meta: {
                title: '添加航空公司',
                hasChildren: true,
            },
            component: AddAirCompany,
        },
    ],
};
