export default [
    {
        title: '部门名称',
        key: 'departmentName',
        dataIndex: 'departmentName',
        width: '200px',
        align: 'center',
        rowKey: 'key',
    },
    {
        title: '职位名称',
        key: 'jobName',
        dataIndex: 'jobName',
        width: '300px',
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
