import Layout from '../views/layout.vue'
import Department from '../views/structure/department.vue'
import DepartmentInfo from '../views/structure/departmentInfo.vue'
import JobList from '../views/structure/jobList.vue'
import JobInfo from '../views/structure/jobInfo.vue'
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
            component: () => Department
        },
        {
            path: '/branchinfo',
            name: 'branchinfo',
            meta: {
                title: '部门信息',
                hidden: true,
                hasChildren: false
            },
            component: () => DepartmentInfo
        },
        {
            path: '/jobs',
            name: 'jobs',
            meta: {
                title: '职位管理',
                hasChildren: false
            },
            component: () => JobList
        },
        {
            path: '/jobinfo',
            name: 'jobinfo',
            meta: {
                title: '职位信息',
                hidden: true,
                hasChildren: false
            },
            component: () => JobInfo
        }
    ]
}