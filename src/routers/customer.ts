// import Layout from '../views/layout.vue'
// import Customerlist from '../views/customer/customerList.vue'
// import Customerinfo from '../views/customer/customerEdit.vue'
const Layout = () => import(/* webpackChunkName: "layout" */ '../views/layout.vue')
const Customerlist = () => import(/* webpackChunkName: "layout" */ '../views/customer/customerList.vue')
const Customerinfo = () => import(/* webpackChunkName: "layout" */ '../views/customer/customerEdit.vue')
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
            component: Customerlist
        },
        {
            path: '/customerinfo',
            name: 'customerinfo',
            meta: {
                title: '客户信息',
                hasChildren: false
            },
            component: Customerinfo
        },
    ]
}