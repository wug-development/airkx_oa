export const dataModel = [{
    name: 'dePartName',
    label: '部门名称',
    type: 'select',
    rules: [{
        required: true,
        message: '请选择部门名称',
        trigger: 'change'
    }],
    options: []
}, {
    name: 'name',
    label: '职位名称',
    rules: [{
        required: true,
        message: '请输入职位名称',
        trigger: 'blur'
    }]
}]