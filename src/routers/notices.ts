import Layout from '../views/layout.vue';
// const AddNotice = () => import(/* webpackChunkName: "addNotice" */ '../views/noticeManage/addNotice.vue');
const noticeList = () => import(/* webpackChunkName: "noticeList" */ '../views/noticeManage/noticeList.vue');
// const noticeInfo = () => import(/* webpackChunkName: "noticeInfo" */ '../views/noticeManage/noticeInfo.vue');
export default {
    path: '/notices',
    redirect: '/noticelist',
    name: 'notices',
    component: Layout,
    meta: {
        title: '通知管理',
        icon: 'notices',
        hasChildren: true,
    },
    children: [
        {
            path: '/noticeList',
            name: 'noticeList',
            meta: {
                title: '通知列表',
                hasChildren: false,
            },
            component: noticeList,
        },
        // {
        //     path: '/sendNotice',
        //     name: 'sendNotice',
        //     meta: {
        //         title: '发布通知',
        //         hasChildren: false,
        //     },
        //     component: AddNotice,
        // },
        // {
        //     path: '/noticeInfo',
        //     name: 'noticeInfo',
        //     meta: {
        //         title: '通知详情',
        //         hasChildren: false,
        //     },
        //     component: noticeInfo,
        // },
    ],
};
