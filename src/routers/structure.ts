import Layout from '../views/layout.vue';
const Department = () => import(/* webpackChunkName: "department" */ '../views/structure/department.vue');
const DepartmentInfo = () => import(/* webpackChunkName: "departmentInfo" */ '../views/structure/departmentInfo.vue');
const JobList = () => import(/* webpackChunkName: "jobList" */ '../views/structure/jobList.vue');
const JobInfo = () => import(/* webpackChunkName: "jobInfo" */ '../views/structure/jobInfo.vue');
const Structure = () => import(/* webpackChunkName: "structure" */ '../views/structure/index.vue');
const UserEdit = () => import(/* webpackChunkName: "UserEdit" */ '../views/userManage/userEdit.vue');
export default {
    path: '/structure',
    redirect: '/structure',
    name: 'structure',
    meta: {
        title: '人员管理',
        icon: 'TeamOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/structure',
            name: 'structure',
            meta: {
                title: '部门管理',
                hasChildren: false,
            },
            component: Structure,
        },
        {
            path: '/userinfo',
            name: '人员信息',
            meta: {
                title: '人员信息',
                hasChildren: false,
            },
            component: UserEdit,
        },
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
