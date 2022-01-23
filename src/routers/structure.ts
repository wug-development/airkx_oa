import Layout from '../views/layout.vue';
const Department = () => import(/* webpackChunkName: "department" */ '../views/structure/department.vue');
const DepartmentInfo = () => import(/* webpackChunkName: "departmentInfo" */ '../views/structure/departmentInfo.vue');
const JobList = () => import(/* webpackChunkName: "jobList" */ '../views/structure/jobList.vue');
const JobInfo = () => import(/* webpackChunkName: "jobInfo" */ '../views/structure/jobInfo.vue');
export default {
    path: '/structure',
    redirect: '/branchs',
    name: 'structure',
    meta: {
        title: '公司架构',
        icon: 'structure',
        hasChildren: true,
    },
    component: Layout,
    children: [
        {
            path: '/branchs',
            name: 'branchs',
            meta: {
                title: '部门管理',
                hasChildren: false,
            },
            component: Department,
        },
        {
            path: '/branchinfo',
            name: 'branchinfo',
            meta: {
                title: '部门信息',
                hidden: true,
                hasChildren: false,
            },
            component: DepartmentInfo,
        },
        {
            path: '/jobs',
            name: 'jobs',
            meta: {
                title: '职位管理',
                hasChildren: false,
            },
            component: JobList,
        },
        {
            path: '/jobinfo',
            name: 'jobinfo',
            meta: {
                title: '职位信息',
                hidden: true,
                hasChildren: false,
            },
            component: JobInfo,
        },
    ],
};
