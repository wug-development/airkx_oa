export default [
    {
        title: '部门名称',
        key: 'departmentName',
        dataIndex: 'departmentName',
        align: 'center',
        rowKey: 'key',
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
