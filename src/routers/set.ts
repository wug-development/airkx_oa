import Layout from '../views/layout.vue';
const AddCity = () => import(/* webpackChunkName: "addCity" */ '../views/cityManage/addCity.vue');
const cityList = () => import(/* webpackChunkName: "cityList" */ '../views/cityManage/cityList.vue');
const cityHotList = () => import(/* webpackChunkName: "cityHotList" */ '../views/cityManage/cityHotList.vue');
const airModelInfo = () => import(/* webpackChunkName: "airModelInfo" */ '../views/airModelManage/airModelInfo.vue');
const airModelList = () => import(/* webpackChunkName: "airModelList" */ '../views/airModelManage/airModelList.vue');
const emailList = () => import(/* webpackChunkName: "emailList" */ '../views/sets/emailManage.vue');
const smsList = () => import(/* webpackChunkName: "smsList" */ '../views/sets/smsManage.vue');
export default {
    path: '/sets',
    redirect: '/',
    name: 'sets',
    component: Layout,
    meta: {
        title: '基础设置',
        icon: 'sets',
        hasChildren: true,
    },
    children: [
        {
            path: '/cityList',
            name: 'cityList',
            meta: {
                title: '城市列表',
                hasChildren: false,
            },
            component: cityList,
        },
        {
            path: '/cityHotList',
            name: 'cityHotList',
            meta: {
                title: '热门城市',
                hasChildren: false,
            },
            component: cityHotList,
        },
        {
            path: '/cityInfo',
            name: 'cityInfo',
            meta: {
                title: '城市信息',
                hidden: true,
                hasChildren: false,
            },
            component: AddCity,
        },
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
        {
            path: '/emailList',
            name: 'emailList',
            meta: {
                title: '邮箱管理',
                hasChildren: false,
            },
            component: emailList,
        },
        {
            path: '/smsList',
            name: 'smsList',
            meta: {
                title: '短信模板管理',
                hasChildren: false,
            },
            component: smsList,
        },
    ],
};
