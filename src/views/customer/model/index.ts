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
        name: 'sellname',
        label: '销售员名称',
        type: 'select',
        placeholder: '请选择',
        col: 24,
    },
    {
        name: 'customername',
        label: '客户名称',
        placeholder: '请输入',
        col: 24,
    },
];

export const listModel = [
    {
        title: '客户简称',
        dataIndex: 'dcShortName',
        key: 'dcShortName',
        width: '200px',
        align: 'left',
    },
    {
        title: '拼音首字母',
        dataIndex: 'dcFirstLetter',
        key: 'dcFirstLetter',
        width: '120px',
    },
    {
        title: '业务联系人',
        dataIndex: 'dcBusinessLinkName',
        key: 'dcBusinessLinkName',
        width: '200px',
    },
    {
        title: '联系电话',
        dataIndex: 'dcBusinessLinkPhone',
        align: 'left',
        key: 'dcBusinessLinkPhone',
        width: '180px',
        ellipsis: true,
    },
    {
        title: '销售员',
        dataIndex: 'dcSalesPerson',
        align: 'center',
        width: '150px',
        key: 'dcSalesPerson',
    },
    {
        title: '录入日期',
        dataIndex: 'dtAddDatetime',
        align: 'center',
        key: 'dtAddDatetime',
        width: '150px',
        customRender: ({ text }) => {
            return moment(text).format('YYYY-MM-DD');
        },
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
