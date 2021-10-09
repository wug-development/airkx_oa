import Layout from '../views/layout.vue'
export default {
    path: '/ticket',
    redirect: '/ticketlist',
    icon: 'ticket',
    name: 'ticket',
    component: Layout,
    meta: {
        title: '出票点管理',
        hasChildren: false
    },
    children: [
        {
            path: '/ticketlist',
            name: 'ticketlist',
            meta: {
                title: '出票点列表',
                hasChildren: false
            },
            component: () => import('../views/ticket_station/ticketList.vue')
        },
        {
            path: '/ticketinfo',
            name: 'ticketinfo',
            meta: {
                title: '出票点信息',
                hasChildren: false
            },
            component: () => import('../views/ticket_station/ticketEdit.vue')
        },
    ]
}