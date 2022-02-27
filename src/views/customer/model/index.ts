export const searchModel = [
    {
        name: 'sellName',
        label: '销售员名称',
        type: 'select',
        placeholder: '请选择',
        col: 24,
    },
    {
        name: 'type',
        label: '类型',
        type: 'select',
        placeholder: '请选择',
        col: 24,
    },
];

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
        title: '类型',
        dataIndex: 'dcCode',
        key: 'dcCode',
        width: '80px',
        align: 'center',
        customRender({ text }) {
            return Number(text === 1) ? '国际' : '国内';
        },
    },
    {
        title: '客户简称',
        dataIndex: 'dcCityName',
        key: 'dcCityName',
        width: '200px',
        align: 'left',
    },
    {
        title: '拼音首字母',
        dataIndex: 'dcPinyin',
        align: 'left',
        key: 'dcPinyin',
        width: '200px',
    },
    {
        title: '业务联系人',
        dataIndex: 'dcPinyin',
        align: 'left',
        key: 'dcPinyin',
        width: '200px',
    },
    {
        title: '联系电话',
        dataIndex: 'dcAirPortName',
        align: 'left',
        key: 'dcAirPortName',
        width: '200px',
    },
    {
        title: '销售员',
        dataIndex: 'dcCountry',
        align: 'left',
        width: '150px',
        key: 'dcCountry',
    },
    {
        title: '欠款',
        dataIndex: 'dcContinent',
        align: 'left',
        width: '100px',
        key: 'dcContinent',
    },
    {
        title: '录入日期',
        dataIndex: 'dnType',
        align: 'center',
        key: 'dnType',
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
