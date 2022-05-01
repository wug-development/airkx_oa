import { formatDate } from '@/utils/tool/utils';
export const infoNotice = [
    {
        name: 'noticeTitle',
        label: '标题',
        col: 24,
        rules: [
            {
                required: true,
                message: '请输入通知标题',
                trigger: 'blur',
            },
        ],
    },
    // {
    //     name: 'AirkxName',
    //     label: '航空公司',
    //     col: 24,
    // },
    {
        name: 'noticeContent',
        label: '内容',
        type: 'custom',
    },
    {
        name: 'noticeAnnexPath',
        label: '附件',
        type: 'custom',
    },
];

export const searchModel = [
    {
        name: 'title',
        label: '通知标题',
        col: 24,
    },
];

export const listModel = [
    // {
    //     title: '航空公司',
    //     dataIndex: 'AirkxName',
    //     key: 'AirkxName',
    //     rowKey: 'key',
    //     width: '100px',
    //     align: 'center',
    // },
    {
        title: '标题',
        dataIndex: 'noticeTitle',
        align: 'left',
        key: 'noticeTitle',
    },
    {
        title: '类型',
        dataIndex: 'type',
        align: 'left',
        key: 'type',
        customRender: ({ text }) => {
            return Number(text) === 1 ? '业务通告' : '公司通知';
        },
    },
    {
        title: '发布日期',
        dataIndex: 'createTime',
        align: 'center',
        key: 'createTime',
        customRender: ({ text }) => {
            return formatDate(text);
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
