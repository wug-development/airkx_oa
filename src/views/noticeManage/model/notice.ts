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
    {
        name: 'AirkxID',
        label: '航空公司',
        col: 24,
    },
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
        name: 'airCode',
        label: '航空公司',
        col: 24,
    },
];

export const listModel = [
    {
        title: '航空公司',
        dataIndex: 'AirkxName',
        key: 'AirkxName',
        rowKey: 'key',
        width: '100px',
        align: 'center',
    },
    {
        title: '标题',
        dataIndex: 'noticeTitle',
        align: 'left',
        key: 'noticeTitle',
    },
    {
        title: '发布日期',
        dataIndex: 'createTime',
        align: 'center',
        key: 'createTime',
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
