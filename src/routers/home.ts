import Layout from '../views/layout.vue';
const Home = () => import(/* webpackChunkName: "home" */ '../views/main/home.vue');
const AddNotice = () => import(/* webpackChunkName: "addNotice" */ '../views/noticeManage/addNotice.vue');
const noticeInfo = () => import(/* webpackChunkName: "noticeInfo" */ '../views/noticeManage/noticeInfo.vue');
export default {
    path: '/',
    name: 'index',
    component: Layout,
    meta: {
        title: '首页',
        icon: 'home',
        hidden: false,
        hasChildren: false,
    },
    children: [
        {
            path: '/',
            name: 'Home',
            meta: {
                title: '首页',
                hasChildren: false,
            },
            component: Home,
        },
        {
            path: '/sendNotice',
            name: 'sendNotice',
            meta: {
                title: '发布通知',
                hasChildren: false,
            },
            component: AddNotice,
        },
        {
            path: '/noticeInfo',
            name: 'noticeInfo',
            meta: {
                title: '通知详情',
                hasChildren: false,
            },
            component: noticeInfo,
        },
    ],
};
