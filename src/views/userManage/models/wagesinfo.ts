import { jsonToArray } from '@/utils/tool/utils';
import { isInteger } from '@/utils/tool/validator';
import { orderTypes } from '@/config/appsetting';
export const dataModelBefore = [
    {
        name: 'probation_base_wages',
        label: '基本工资',
        col: 12,
    },
    {
        name: 'probation_subsidy',
        label: '补助',
        col: 12,
    },
    {
        name: 'begin_date',
        label: '启用时间',
        col: 12,
        type: 'date',
    },
];

export const dataModel = [
    {
        name: 'base_wages',
        label: '基本工资',
        col: 12,
    },
    {
        name: 'subsidy',
        label: '补助',
        col: 12,
    },
    {
        name: 'insurance',
        label: '保险',
        col: 12,
    },
    {
        name: 'gongjijin',
        label: '公积金',
        col: 12,
    },
    {
        name: 'tax',
        label: '个税',
        col: 12,
    },
    {
        name: 'bonus',
        label: '全勤奖金',
        col: 12,
    },
    {
        name: 'enable_time',
        label: '启用时间',
        col: 12,
        type: 'date',
    },
];

export const orderTypeModel = {
    name: 'orderType',
    type: 'select',
    label: '提成类型',
    col: 24,
    options: jsonToArray(orderTypes),
};

export const takeItem = {
    name: '',
    type: 1,
    percentage: 0,
};

export const takeModal = [
    {
        name: 'name',
        label: '员工',
        type: 'select',
        mode: 'tags',
        options: [],
        rules: [
            {
                required: true,
                message: '请选择员工',
                type: 'array',
                trigger: ['change', 'blur'],
            },
        ],
    },
    {
        name: 'take',
        label: '提成%',
        placeholder: '请输入整数提成',
        rules: [
            {
                required: true,
                validator: isInteger,
                message: '请输入整数提成',
                trigger: 'blur',
            },
        ],
    },
];
