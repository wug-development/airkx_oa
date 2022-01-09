import Layout from '../views/layout.vue'
const Users = () => import(/* webpackChunkName: "userList" */ '../views/personnel/userList.vue')
const UserEdit = () => import(/* webpackChunkName: "UserEdit" */ '../views/personnel/userEdit.vue')
const Wages = () => import(/* webpackChunkName: "wages" */ '../views/personnel/wages.vue')
const Permissions = () => import(/* webpackChunkName: "permissions" */ '../views/personnel/permissions.vue')

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
            component: Users
        },
        {
            path: '/userinfo',
            name: '人员信息',
            meta: {
                title: '人员信息',
                hasChildren: false
            },
            component: UserEdit
        },
        {
            path: '/wages',
            name: '工资设置',
            meta: {
                title: '工资设置',
                hasChildren: false
            },
            component: Wages
        },
        {
            path: '/permission',
            name: '权限设置',
            meta: {
                title: '权限设置',
                hasChildren: false
            },
            component: Permissions
        }
    ]
}