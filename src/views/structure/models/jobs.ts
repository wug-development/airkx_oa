export default [{
    title: '部门名称',
    key: '1',
    dataIndex: 'dePartName',
    width: '200px',
    align: 'center',
    rowKey: 'key'
}, {
    title: '职位名称',
    key: '2',
    dataIndex: 'name',
    width: '300px',
    align: 'center',
    rowKey: 'key'
}, {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    align: 'center',
    width: 200,
    slots: {
        customRender: 'action'
    },
}]