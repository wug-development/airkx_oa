import moment from 'moment';
import { validateRequired } from '@/utils/tool/validator';
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
        name: 'ctype',
        label: '类型',
        type: 'select',
        placeholder: '请选择',
        col: 24,
        options: costomerTypes,
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
        title: '类型',
        dataIndex: 'KHType',
        key: 'KHType',
        width: '120px',
        align: 'center',
    },
    {
        title: '客户简称',
        dataIndex: 'JCName',
        key: 'JCName',
        width: '200px',
        align: 'left',
    },
    {
        title: '拼音首字母',
        dataIndex: 'KHPY',
        key: 'KHPY',
        width: '120px',
    },
    {
        title: '业务联系人',
        dataIndex: 'KHLXR',
        key: 'KHLXR',
        width: '200px',
    },
    {
        title: '联系电话',
        dataIndex: 'KHLXDH',
        align: 'left',
        key: 'KHLXDH',
        width: '180px',
        ellipsis: true,
    },
    {
        title: '传真',
        dataIndex: 'KHFax',
        align: 'left',
        key: 'KHFax',
        width: '180px',
    },
    {
        title: '销售员',
        dataIndex: 'KHXSY',
        align: 'center',
        width: '150px',
        key: 'KHXSY',
    },
    {
        title: '欠款',
        dataIndex: 'JCID',
        align: 'left',
        width: '100px',
        key: 'JCID',
        // slots: {
        //     customRender: 'labels',
        // },
        // customRender: ({ text }) => {
        //     return `<div style="color:red">${text}</div>`;
        // },
    },
    {
        title: '录入日期',
        dataIndex: 'AddTime',
        align: 'center',
        key: 'AddTime',
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

export const infoModel = [
    {
        name: 'KHType',
        label: '客户类型',
        type: 'select',
        col: 12,
        options: costomerTypes,
        rules: [
            {
                required: true,
                message: '请选择客户类型',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'KHProvince',
        label: '所在地区',
        type: 'select',
        col: 12,
        options: [],
    },
    {
        name: 'JCName',
        label: '客户简称',
        col: 12,
        rules: [
            {
                required: true,
                message: '请输入客户简称',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'KHPY',
        label: '拼音首字母',
        col: 12,
    },
    {
        name: 'KHGSQC',
        label: '公司全称',
        col: 12,
    },
    {
        name: 'KHFax',
        label: '传真号码',
        col: 12,
    },
    {
        name: 'KHBGDZ',
        label: '详细地址',
        maxlength: 150,
        col: 12,
    },
    {
        name: 'BZ',
        label: '备注',
        col: 12,
    },
    {
        name: 'KHLXR',
        label: '业务联系人',
        col: 12,
    },
    {
        name: 'KHLXDH',
        label: '业务联系电话',
        col: 12,
    },
    {
        name: 'YWSJ',
        label: '业务联系手机',
        col: 12,
    },
    {
        name: 'YWQQ',
        label: '业务联系QQ',
        col: 12,
    },
    {
        name: 'CWLXR',
        label: '财务联系人',
        col: 12,
    },
    {
        name: 'CWDH',
        label: '财务联系电话',
        col: 12,
    },
    {
        name: 'CWSJ',
        label: '财务联系手机',
        col: 12,
    },
    {
        name: 'ZYFZR',
        label: '主要负责人',
        col: 12,
    },
    {
        name: 'FZRSJ',
        label: '主要负责手机',
        col: 12,
    },
    {
        name: 'KHSYR',
        label: '返现受益人',
        col: 12,
    },
    {
        name: 'KHYHZH',
        label: '受益人卡号',
        col: 12,
    },
    {
        name: 'KHSYRDH',
        label: '受益人电话',
        col: 12,
    },
];
