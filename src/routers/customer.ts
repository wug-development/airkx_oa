import Layout from '../views/layout.vue'
export default {
    path: '/customer',
    redirect: '/customerlist',
    icon: 'customer',
    name: 'customer',
    component: Layout,
    meta: {
        title: '客户管理',
        hasChildren: false
    },
    children: [
        {
            path: '/customerlist',
            name: 'customerlist',
            meta: {
                title: '客户列表',
                hasChildren: false
            },
            component: () => import('../views/customer/customerList.vue')
        },
        {
            path: '/customerinfo',
            name: 'customerinfo',
            meta: {
                title: '客户信息',
                hasChildren: false
            },
            component: () => import('../views/customer/customerEdit.vue')
        },
    ]
}