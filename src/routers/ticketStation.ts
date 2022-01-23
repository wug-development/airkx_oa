import Layout from '../views/layout.vue';
const TicketList = () => import(/* webpackChunkName: "ticketList" */ '../views/ticket_station/ticketList.vue');
const TicketEdit = () => import(/* webpackChunkName: "ticketEdit" */ '../views/ticket_station/ticketEdit.vue');
export default {
    path: '/ticket',
    redirect: '/ticketlist',
    name: 'ticket',
    component: Layout,
    meta: {
        title: '出票点管理',
        icon: 'ticket',
        hasChildren: false,
    },
    children: [
        {
            path: '/ticketlist',
            name: 'ticketlist',
            meta: {
                title: '出票点列表',
                hasChildren: false,
            },
            component: TicketList,
        },
        {
            path: '/ticketinfo',
            name: 'ticketinfo',
            meta: {
                title: '出票点信息',
                hasChildren: false,
            },
            component: TicketEdit,
        },
    ],
};
