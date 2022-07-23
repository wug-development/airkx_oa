import Layout from '../views/layout.vue';
const CustomerRegister = () => import(/* webpackChunkName: "customerEdit" */ '../views/customer/customerRegister.vue');
const CustomerTransfer = () => import(/* webpackChunkName: "customerTransfer" */ '../views/customer/customerTransfer.vue');
const Customerlist = () => import(/* webpackChunkName: "customerList" */ '../views/customer/businessCustomer/customerList.vue');
const CustomerInfo = () => import(/* webpackChunkName: "customerEdit" */ '../views/customer/businessCustomer/customerInfo.vue');
const PCustomerList = () => import(/* webpackChunkName: "PCustomerList" */ '../views/customer/privateCustomer/pcustomer.vue');
const BusinessBill = () => import(/* webpackChunkName: "businessBill" */ '../views/customer/businessCustomer/businessBill.vue');
const businessBillColumn = () => import(/* webpackChunkName: "businessBillColumn" */ '../views/customer/businessCustomer/businessBillColumn.vue');
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
        title: '企业客户信息',
        hasChildren: false,
        hidden: true,
      },
      component: CustomerInfo,
    },
    {
      path: '/customerreg',
      name: 'customerreg',
      meta: {
        title: '企业客户注册',
        hasChildren: false,
      },
      component: CustomerRegister,
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
  ],
};
