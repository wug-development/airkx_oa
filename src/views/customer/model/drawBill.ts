

const col = 12;
const maxCol = 24;
// const getTypes = () => {
//     const arr = [];
//     for (let key in businessType) {
//         arr.push(businessType[key])
//     }
//     return arr;
// };
export const infoModel = [
    {
        name: 'dcShortName',
        label: '发票抬头',
        col: maxCol,
        maxlength: 150,
        rules: [
            {
                required: true,
                message: '请输入发票抬头',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcFirstLetter',
        label: '发票金额',
        maxlength: 50,
        col,
    },
    {
        name: 'dcFullName',
        label: '纳税人识别号',
        maxlength: 50,
        col,
    },
    {
        name: 'dcPassword',
        label: '联系电话',
        maxlength: 20,
        col,
    },
    {
        name: 'dcContractName',
        label: '联系地址',
        maxlength: 500,
        col,
    },
    {
        name: 'dcContractPhone',
        label: '开户行',
        maxlength: 50,
        col,
    },
    {
        name: 'dcCompanyEmail',
        label: '银行帐号',
        maxlength: 50,
        col,
    },
    {
        name: 'dcQQWechat',
        label: '服务费',
        maxlength: 10,
        col: 8,
    },
    {
        name: 'dcQQWechat',
        label: '退票费',
        maxlength: 10,
        col: 8,
    },
    {
        name: 'dcQQWechat',
        label: '机票款',
        maxlength: 10,
        col: 8,
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
    width: '80px',
  },
  {
    title: '发票号码',
    dataIndex: 'dcShortName',
    key: 'dcShortName',
  },
  {
    title: '发票金额',
    dataIndex: 'dcShortName',
    key: 'dcShortName',
  },
  {
    title: '发票项目',
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
