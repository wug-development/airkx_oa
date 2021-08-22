import Layout from '../views/layout.vue'
export default {
    path: '/structure',
    redirect: '/branchs',
    icon: 'structure',
    name: 'structure',
    meta: {
        title: '公司架构',
        hasChildren: true
    },
    component: Layout,
    children: [
        {
            path: '/branchs',
            name: 'branchs',
            meta: {
                title: '部门管理',
                hasChildren: false
            },
            component: () => import('../views/structure/department.vue')
        },
        {
            path: '/branchinfo',
            name: 'branchinfo',
            meta: {
                title: '部门信息',
                hidden: true,
                hasChildren: false
            },
            component: () => import('../views/structure/departmentInfo.vue')
        },
        {
            path: '/jobs',
            name: 'jobs',
            meta: {
                title: '职位管理',
                hasChildren: false
            },
            component: () => import('../views/structure/jobList.vue')
        },
        {
            path: '/jobinfo',
            name: 'jobinfo',
            meta: {
                title: '职位信息',
                hidden: true,
                hasChildren: false
            },
            component: () => import('../views/structure/jobInfo.vue')
        }
    ]
}