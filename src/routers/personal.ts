import Layout from '../views/layout.vue';
const Personal = () => import(/* webpackChunkName: "personal" */ '../views/personalManage/personalInfo.vue');
const mywages = () => import(/* webpackChunkName: "personalwages" */ '../views/personalManage/mywages.vue');
// const noticeInfo = () => import(/* webpackChunkName: "noticeInfo" */ '../views/noticeManage/noticeInfo.vue');
export default {
    path: '/personal',
    redirect: '/personal',
    name: 'personal',
    component: Layout,
    meta: {
        title: '个人事务',
        icon: 'UserOutlined',
        hasChildren: true,
    },
    children: [
        {
            path: '/Personal',
            name: 'Personal',
            meta: {
                title: '个人资料',
                hasChildren: false,
            },
            component: Personal,
        },
        {
            path: '/personalwages',
            name: 'personalwages',
            meta: {
                title: '我的工资',
                hasChildren: false,
            },
            component: mywages,
        },
    ],
};
