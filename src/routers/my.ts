import Layout from '../views/layout.vue';
const mywages = () => import(/* webpackChunkName: "mywages" */ '../views/my/mywages.vue');
const timesheet = () => import(/* webpackChunkName: "timesheet" */ '../views/my/timesheet.vue');
export default {
    path: '/my',
    redirect: '/mywages',
    name: 'my',
    component: Layout,
    meta: {
        title: '我的',
        icon: 'my',
        hasChildren: false,
    },
    children: [
        {
            path: '/mywages',
            name: 'mywages',
            meta: {
                title: '我的工资',
                hasChildren: false,
            },
            component: mywages,
        },
        {
            path: '/timesheet',
            name: 'timesheet',
            meta: {
                title: '我的考勤',
                hasChildren: false,
            },
            component: timesheet,
        },
    ],
};
