export const dataModel = [
    {
        name: 'departmentName',
        label: '部门名称',
        type: 'select',
        rules: [
            {
                type: 'string',
                required: true,
                message: '请选择部门名称',
                trigger: 'blur',
            },
        ],
        options: [],
    },
    {
        name: 'jobName',
        label: '职位名称',
        rules: [
            {
                required: true,
                message: '请输入职位名称',
                trigger: 'blur',
            },
        ],
    },
];
