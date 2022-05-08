import Layout from '../views/layout.vue';
const AddCity = () => import(/* webpackChunkName: "addCity" */ '../views/cityManage/addCity.vue');
const cityList = () => import(/* webpackChunkName: "cityList" */ '../views/cityManage/cityList.vue');
const cityHotList = () => import(/* webpackChunkName: "cityHotList" */ '../views/cityManage/cityHotList.vue');
export default {
    path: '/citys',
    redirect: '/citys',
    name: 'citys',
    component: Layout,
    meta: {
        title: '城市管理',
        icon: 'BuildOutlined',
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
    ],
};
