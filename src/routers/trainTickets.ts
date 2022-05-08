import Layout from '../views/layout.vue';
const trainTicket = () => import(/* webpackChunkName: "trainTicketManage" */ '../views/trainTicketsManage/index.vue');
export default {
    path: '/trainTicket',
    redirect: '/trainTicket',
    name: 'trainTicket',
    meta: {
        title: '火车票管理',
        icon: 'AlertOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/trainTicket',
            name: 'trainTicket',
            meta: {
                title: '火车票列表',
                hasChildren: false,
            },
            component: trainTicket,
        },
    ],
};
