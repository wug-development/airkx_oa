import Layout from '../views/layout.vue';
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
