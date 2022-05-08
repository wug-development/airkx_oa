import Layout from '../views/layout.vue';
const attendance = () => import(/* webpackChunkName: "attendanceManage" */ '../views/attendanceManage/index.vue');
export default {
    path: '/attendance',
    redirect: '/attendance',
    name: 'attendance',
    meta: {
        title: '考勤管理',
        icon: 'CarryOutOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/attendance',
            name: 'attendance',
            meta: {
                title: '考勤列表',
                hasChildren: false,
            },
            component: attendance,
        },
    ],
};
