

const col = 12;
const maxCol = 24;
export const infoModel = [
    {
        name: 'dcFirstLetter',
        label: '流水单号',
        maxlength: 50,
        type: 'text',
        col: maxCol,
    },
    {
        name: 'dcFirstLetter',
        label: '申请人',
        type: 'text',
        col,
    },
    {
        name: 'dcFirstLetter',
        label: '提现金额',
        maxlength: 50,
        col,
        rules: [
            {
                required: true,
                message: '请输入提现金额',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcFirstLetter',
        label: '收款人',
        maxlength: 50,
        col,
        rules: [
            {
                required: true,
                message: '请输入收款人',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcFirstLetter',
        label: '收款人电话',
        maxlength: 50,
        col,
        rules: [
            {
                required: true,
                message: '请输入收款人电话',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcFirstLetter',
        label: '银行帐号',
        maxlength: 50,
        col,
        rules: [
            {
                required: true,
                message: '请输入银行帐号',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcFirstLetter',
        label: '收款银行',
        maxlength: 50,
        col,
        rules: [
            {
                required: true,
                message: '请输入收款银行',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcOther',
        label: '备注',
        maxlength: 200,
        col: maxCol,
    },
];


export const listModel = [
  {
    title: 'ID',
    dataIndex: 'dcShortName',
    key: 'dcShortName',
    width: '100px',
  },
  {
    title: '提现金额',
    dataIndex: 'dcShortName',
    key: 'dcShortName',
  },
  {
    title: '申请人',
    dataIndex: 'dcShortName',
    key: 'dcShortName',
  },
  {
    title: '申请时间',
    dataIndex: 'dcShortName',
    key: 'dcShortName',
  },
  {
    title: '状态',
    dataIndex: 'dcShortName',
    key: 'dcShortName',
  },
]
