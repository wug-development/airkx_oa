import Layout from '../views/layout.vue';
const email = () => import(/* webpackChunkName: "emailManage" */ '../views/emailManage/index.vue');
export default {
    path: '/email',
    redirect: '/email',
    name: 'email',
    meta: {
        title: '邮箱管理',
        icon: 'MailOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/email',
            name: 'email',
            meta: {
                title: '邮箱列表',
                hasChildren: false,
            },
            component: email,
        },
    ],
};
