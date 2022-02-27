// export const searchModel = [
//     {
//         name: 'sellName',
//         label: '销售员名称',
//         type: 'select',
//         placeholder: '请选择',
//         col: 24,
//     },
//     {
//         name: 'type',
//         label: '类型',
//         type: 'select',
//         placeholder: '请选择',
//         col: 24,
//     },
// ];

export const listModel = [
    {
        title: '编号',
        dataIndex: 'dnCityID',
        key: 'dnCityID',
        rowKey: 'key',
        width: '100px',
        align: 'center',
    },
    {
        title: '出票点简称',
        dataIndex: 'dcCode',
        key: 'dcCode',
        width: '80px',
        align: 'center',
        customRender({ text }) {
            return Number(text === 1) ? '国际' : '国内';
        },
    },
    {
        title: '业务联系人',
        dataIndex: 'dcCityName',
        key: 'dcCityName',
        width: '200px',
        align: 'left',
    },
    {
        title: '业务联系电话',
        dataIndex: 'dcPinyin',
        align: 'left',
        key: 'dcPinyin',
        width: '200px',
    },
    {
        title: '财务对账联系人',
        dataIndex: 'dcPinyin',
        align: 'left',
        key: 'dcPinyin',
        width: '200px',
    },
    {
        title: '联系人电话',
        dataIndex: 'dcAirPortName',
        align: 'left',
        key: 'dcAirPortName',
        width: '200px',
    },
    {
        title: '优势说明',
        dataIndex: 'dcCountry',
        align: 'left',
        width: '150px',
        key: 'dcCountry',
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
