import Layout from '../views/layout.vue'
export default {
    path: '/personnel',
    redirect: '/users',
    icon: 'personnel',
    name: 'personnel',
    component: Layout,
    meta: {
        title: '人员管理',
        hasChildren: false
    },
    children: [
        {
            path: '/users',
            name: 'users',
            meta: {
                title: '人员列表',
                hasChildren: false
            },
            component: () => import('../views/personnel/userList.vue')
        },
        {
            path: '/userinfo',
            name: '人员信息',
            meta: {
                title: '人员信息',
                hasChildren: false
            },
            component: () => import('../views/personnel/userEdit.vue')
        }
    ]
}