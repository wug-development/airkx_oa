import { formatDate } from '@/utils/tool/utils';
export const searchModel = [
    {
        name: 'title',
        label: '部门名称',
        col: 8,
    },
    {
        name: 'date',
        label: '日期',
        type: 'date',
        col: 8,
    },
];

export const listModel = [
    {
        title: '姓名',
        key: 'name',
    },
    {
        title: '基本工资',
        key: 'basewage',
    },
    {
        title: '补助',
        key: 'basewage',
    },
    {
        title: '考勤奖',
        key: 'basewage',
    },
    {
        title: '扣除个税',
        key: 'basewage',
    },
    {
        title: '扣除保险',
        key: 'basewage',
    },
    {
        title: '扣除公积金',
        key: 'basewage',
    },
    {
        title: '业务提成',
        key: 'basewage',
    },
    {
        title: '应发工资',
        key: 'basewage',
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
