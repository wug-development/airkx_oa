export const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        with: '40%',
        slots: {
            customRender: 'name',
        },
    },
    {
        title: '备注',
        dataIndex: 'content',
        key: 'content',
        width: '30%',
        slots: {
            customRender: 'remark',
        },
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        align: 'center',
        width: 300,
        slots: {
            customRender: 'action',
        },
    },
];

interface DataItem {
    key: number;
    name: string;
    content: string;
    children?: DataItem[];
}

export const infoModel = [
    {
        name: 'structureName',
        label: '组织架构名称',
        labelCol: { span: 6 },
        rules: [
            {
                required: true,
                message: '组织架构名称',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'structureRemark',
        labelCol: { span: 6 },
        type: 'textarea',
        maxlength: 150,
        label: '备注',
    },
];
