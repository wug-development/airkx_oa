import Layout from '../views/layout.vue';
const AddPerson = () => import(/* webpackChunkName: "addPerson" */ '../views/personManage/addPerson.vue');
const personList = () => import(/* webpackChunkName: "personList" */ '../views/personManage/personList.vue');
export default {
    path: '/persons',
    redirect: '/personlist',
    name: 'persons',
    component: Layout,
    meta: {
        title: '乘机人管理',
        icon: 'persons',
        hasChildren: true,
    },
    children: [
        {
            path: '/personList',
            name: 'personList',
            meta: {
                title: '乘机人列表',
                hasChildren: false,
            },
            component: personList,
        },
        {
            path: '/sendPerson',
            name: 'sendPerson',
            meta: {
                title: '添加乘机人',
                hasChildren: false,
            },
            component: AddPerson,
        },
    ],
};
