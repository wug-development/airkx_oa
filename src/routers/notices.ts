import Layout from '../views/layout.vue'
const AddNotice = () => import(/* webpackChunkName: "addNotice" */ '../views/noticeManage/addNotice.vue')
// const Customerinfo = () => import(/* webpackChunkName: "layout" */ '../views/noticeManage/customerEdit.vue')
export default {
    path: '/notices',
    redirect: '/noticelist',
    icon: 'notices',
    name: 'notices',
    component: Layout,
    meta: {
        title: '通知管理',
        hasChildren: false
    },
    children: [
        // {
        //     path: '/customerlist',
        //     name: 'customerlist',
        //     meta: {
        //         title: '客户列表',
        //         hasChildren: false
        //     },
        //     component: Customerlist
        // },
        {
            path: '/sendNotice',
            name: 'sendNotice',
            meta: {
                title: '发布通知',
                hasChildren: false
            },
            component: AddNotice
        },
    ]
}