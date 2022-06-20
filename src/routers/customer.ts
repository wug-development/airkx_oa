import Layout from '../views/layout.vue';
const Customerlist = () => import(/* webpackChunkName: "customerList" */ '../views/customer/customerList.vue');
const Customerinfo = () => import(/* webpackChunkName: "customerEdit" */ '../views/customer/customerEdit.vue');
const PCustomerList = () => import(/* webpackChunkName: "PCustomerList" */ '../views/customer/pcustomerList.vue');
const CustomerTransfer = () => import(/* webpackChunkName: "customerTransfer" */ '../views/customer/customerTransfer.vue');
const BusinessBill = () => import(/* webpackChunkName: "businessBill" */ '../views/customer/businessBill.vue');
export default {
    path: '/customer',
    redirect: '/customerlist',
    name: 'customer',
    component: Layout,
    meta: {
        title: '客户管理',
        icon: 'SolutionOutlined',
        hasChildren: true,
    },
    children: [
        {
            path: '/customerlist',
            name: 'customerlist',
            meta: {
                title: '企业客户管理',
                hasChildren: false,
            },
            component: Customerlist,
        },
        {
            path: '/customerinfo',
            name: 'customerinfo',
            meta: {
                title: '企业客户注册',
                hasChildren: false,
            },
            component: Customerinfo,
        },
        {
            path: '/pcustomerlist',
            name: 'pcustomerlist',
            meta: {
                title: '个人客户管理',
                hasChildren: false,
            },
            component: PCustomerList,
        },
        {
            path: '/customertransfer',
            name: 'customertransfer',
            meta: {
                title: '客户转移',
                hasChildren: false,
            },
            component: CustomerTransfer,
        },
        {
            path: '/businessBill',
            name: 'businessBill',
            meta: {
                title: '资金流水',
                hasChildren: false,
            },
            component: BusinessBill,
        },
    ],
};
