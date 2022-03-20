export const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        with: '40%',
    },
    {
        title: '备注',
        dataIndex: 'content',
        key: 'content',
        width: '30%',
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

export const data: DataItem[] = [
    {
        key: 1,
        name: 'John Brown sr.',
        content: 'New York No. 1 Lake Park',
        children: [
            {
                key: 11,
                name: 'John Brown',
                content: 'New York No. 2 Lake Park',
            },
            {
                key: 12,
                name: 'John Brown jr.',
                content: 'New York No. 3 Lake Park',
                children: [
                    {
                        key: 121,
                        name: 'Jimmy Brown',
                        content: 'New York No. 3 Lake Park',
                    },
                ],
            },
            {
                key: 13,
                name: 'Jim Green sr.',
                content: 'London No. 1 Lake Park',
                children: [
                    {
                        key: 131,
                        name: 'Jim Green',
                        content: 'London No. 2 Lake Park',
                        children: [
                            {
                                key: 1311,
                                name: 'Jim Green jr.',
                                content: 'London No. 3 Lake Park',
                            },
                            {
                                key: 1312,
                                name: 'Jimmy Green sr.',
                                content: 'London No. 4 Lake Park',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 2,
        name: 'Joe Black',
        content: 'Sidney No. 1 Lake Park',
    },
];

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
