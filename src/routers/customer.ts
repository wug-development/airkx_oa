import Layout from '../views/layout.vue';
const CustomerRegister = () => import(/* webpackChunkName: "CustomerRegister" */ '../views/customer/customerRegister.vue');
const CustomerTransfer = () => import(/* webpackChunkName: "customerTransfer" */ '../views/customer/customerTransfer.vue');
const Customerlist = () => import(/* webpackChunkName: "customerList" */ '../views/customer/businessCustomer/customerList.vue');
const CustomerInfo = () => import(/* webpackChunkName: "CustomerInfo" */ '../views/customer/businessCustomer/customerInfo.vue');
const BusinessOrder = () => import(/* webpackChunkName: "BusinessOrder" */ '../views/customer/businessCustomer/businessOrder.vue');
const BusinessPerson = () => import(/* webpackChunkName: "BusinessPerson" */ '../views/customer/businessCustomer/businessPersons.vue');
const BusinessBill = () => import(/* webpackChunkName: "businessBill" */ '../views/customer/businessCustomer/businessBill.vue');
const businessBillColumn = () => import(/* webpackChunkName: "businessBillColumn" */ '../views/customer/businessCustomer/businessBillColumn.vue');
const DrawBill = () => import(/* webpackChunkName: "DrawBill" */ '../views/customer/businessCustomer/drawBill.vue');
const Withdrawal = () => import(/* webpackChunkName: "withdrawal" */ '../views/customer/businessCustomer/withdrawal.vue');
const PCustomerList = () => import(/* webpackChunkName: "PCustomerList" */ '../views/customer/privateCustomer/pcustomer.vue');
const PcustomerRcommend = () => import(/* webpackChunkName: "recommendFriend" */ '../views/customer/privateCustomer/recommendFriend.vue');
const PcustomerSMS = () => import(/* webpackChunkName: "pcustomerSMS" */ '../views/customer/privateCustomer/pcustomerSMS.vue');
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
      path: '/customerreg',
      name: 'customerreg',
      meta: {
        title: '企业客户注册',
        hasChildren: false,
      },
      component: CustomerRegister,
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
      path: '/businessOrder',
      name: 'businessOrder',
      meta: {
        title: '订单列表',
        hasChildren: false,
        hidden: true,
      },
      component: BusinessOrder,
    },
    {
      path: '/businessBill',
      name: 'businessBill',
      meta: {
        title: '资金流水',
        hasChildren: false,
        hidden: true,
      },
      component: BusinessBill,
    },
    {
      path: '/withdrawal',
      name: 'withdrawal',
      meta: {
        title: '提现',
        hasChildren: false,
        hidden: true,
      },
      component: Withdrawal,
    },
    {
      path: '/businessPerson',
      name: 'businessPerson',
      meta: {
        title: '乘机人',
        hasChildren: false,
        hidden: true,
      },
      component: BusinessPerson,
    },
    {
      path: '/businessBillColumn',
      name: 'businessBillColumn',
      meta: {
        title: '账单下载',
        hasChildren: false,
        hidden: true,
      },
      component: businessBillColumn,
    },
    {
      path: '/drawBill',
      name: 'drawBill',
      meta: {
        title: '开发票',
        hasChildren: false,
        hidden: true,
      },
      component: DrawBill,
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
      path: '/pcustomerRcommend',
      name: 'pcustomerRcommend',
      meta: {
        title: '我推荐的好友',
        hidden: true,
        hasChildren: false,
      },
      component: PcustomerRcommend,
    },
    {
      path: '/pcustomerSMS',
      name: 'pcustomerSMS',
      meta: {
        title: '短信记录',
        hasChildren: false,
        hidden: true,
      },
      component: PcustomerSMS,
    },
  ],
};
