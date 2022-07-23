import moment from 'moment';
import { validateRequired } from '@/utils/tool/validator';
import { businessType } from '@/config/appsetting';
const costomerTypes = [
    { label: '散客', value: '散客' },
    { label: '同业', value: '同业' },
    { label: '旅行社', value: '旅行社' },
];
export const searchModel = [
  {
      name: 'createDate',
      label: '注册日期',
      placeholder: '请选择',
      type: 'daterange',
  },
  {
      name: 'customerPhone',
      label: '手机号码',
      placeholder: '请输入',
      maxLength: 11,
      col: 24,
  },
  {
      name: 'customerManage',
      label: '客户经理',
      type: 'select',
      placeholder: '请选择',
      col: 24,
  },
  {
      name: 'balance',
      label: '账户资金',
      type: 'select',
      placeholder: '请选择',
      col: 24,
      options: [
        { value: 1, label: '有余额' },
        { value: 2, label: '有欠款' }
      ]
  },
  {
      name: 'source',
      label: '客户来源',
      type: 'select',
      placeholder: '请选择',
      col: 24,
      options: [
        { value: 'PC端' },
        { value: '手机端' },
        { value: '后台' },
      ]
  },
];

export const listModel = [
    {
        title: 'ID',
        dataIndex: 'dnID',
        width: '80px',
    },
    {
        title: '客户来源',
        dataIndex: 'source',
        key: 'source',
        width: '120px',
    },
    {
        title: '姓名',
        dataIndex: 'dcLinkName',
        key: 'dcLinkName',
        width: '150px',
    },
    {
        title: '手机号',
        dataIndex: 'dcLinkPhone',
        key: 'dcLinkPhone',
        width: '150px',
    },
    {
        title: '登录密码',
        dataIndex: 'dcPassword',
        key: 'dcPassword',
        width: '150px',
    },
    {
        title: '注册日期',
        dataIndex: 'dtAddDatetime',
        key: 'dtAddDatetime',
        align: 'center',
        width: '150px',
        customRender: ({ text }) => {
            return moment(text).format('YYYY-MM-DD');
        },
    },
    {
        title: '客服经理',
        dataIndex: 'dcCustomerManage',
        key: 'dcCustomerManage',
        width: '150px',
    },
    {
        title: '推荐人码',
        dataIndex: 'dcCustomerManage',
        key: 'dcCustomerManage',
        width: '150px',
    },
    {
        title: '余额',
        dataIndex: 'dnBalance',
        key: 'dnBalance',
        width: '150px',
    },
    {
        title: '欠款',
        dataIndex: 'dnQiankuan',
        key: 'dnQiankuan',
        width: '150px',
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        align: 'center',
        width: 200,
        slots: {
            customRender: 'action',
        },
    },
];

const col = 8;
const maxCol = 24;
const getTypes = () => {
    const arr = [];
    for (let key in businessType) {
        arr.push(businessType[key])
    }
    return arr;
};
export const infoModel = [
    {
        name: 'dcShortName',
        label: '客户简称',
        col,
        maxlength: 50,
        rules: [
            {
                required: true,
                message: '请输入客户简称',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcFirstLetter',
        label: '拼音首字母',
        maxlength: 50,
        col,
    },
    {
        name: 'dcFullName',
        label: '公司全称',
        maxlength: 100,
        col,
    },
    {
        name: 'dcPassword',
        label: '登录密码',
        maxlength: 50,
        col,
    },
    {
        name: 'dcContractName',
        label: '合同联系人',
        maxlength: 50,
        col,
    },
    {
        name: 'dcContractPhone',
        label: '联系人电话',
        maxlength: 50,
        col,
    },
    {
        name: 'dcCompanyEmail',
        label: '企业邮箱',
        maxlength: 150,
        col,
    },
    {
        name: 'dcQQWechat',
        label: 'QQ/微信',
        maxlength: 50,
        col,
    },
    {
        name: 'dcCompanyType',
        label: '企业类型',
        maxlength: 50,
        col,
    },
    {
        name: 'dcBusinessLinkName',
        label: '业务对接人',
        maxlength: 50,
        col,
    },
    {
        name: 'dcBusinessLinkPhone',
        label: '对接人电话',
        maxlength: 50,
        col,
    },
    {
        name: 'dcContactDate',
        label: '合同期限',
        type: 'date-range',
        maxlength: 50,
        col,
        options: ['dcContactStartDate', 'dcContactEndDate'],
    },
    {
        name: 'dcSalesPerson',
        label: '销售员',
        type: 'select',
        maxlength: 50,
        options: [],
        col,
    },
    {
        name: 'dcBusinessPerson',
        label: '业务员',
        type: 'select',
        maxlength: 50,
        options: [],
        col,
    },
    {
        name: 'dtCheckOutDate',
        label: '结账日期',
        type: 'date',
        maxlength: 20,
        col,
    },
    {
        name: 'dnCreditLine',
        label: '信用额度',
        maxlength: 50,
        col,
    },
    {
        name: 'dcBusinesslicense',
        label: '营业执照',
        maxlength: 50,
        type: 'custom',
        col: maxCol,
    },
    {
        name: 'dcServices',
        label: '服务费设定',
        maxlength: 50,
        type: 'checkbox',
        col: maxCol,
        options: getTypes()
    },
    {
        name: 'dcBusinessAddress',
        label: '办公地址',
        maxlength: 120,
        col: maxCol,
    },
    {
        name: 'dcInvoiceInfo',
        label: '开发票信息',
        maxlength: 200,
        col: maxCol,
    },
    {
        name: 'dcOther',
        label: '备注',
        maxlength: 200,
        col: maxCol,
    },
];
