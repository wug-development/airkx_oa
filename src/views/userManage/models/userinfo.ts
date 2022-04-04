import { getStructure } from '@/bll/structure';

export const dataModel = () => [
    {
        name: 'username',
        label: '姓名',
        col: 12,
        rules: [
            {
                required: true,
                message: '请输入人员姓名',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'upassword',
        label: '系统密码',
        col: 12,
        rules: [
            {
                required: true,
                message: '请输入系统密码',
                trigger: 'blur',
            },
            {
                min: 6,
                message: '系统密码最少6位',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'depart',
        label: '部门名称',
        type: 'custom',
        rules: [
            {
                required: true,
                type: 'array',
                message: '请选择部门',
                trigger: ['change', 'blur'],
            },
        ],
        col: 12,
    },
    {
        name: 'idcardno',
        col: 12,
        label: '身份证号',
        maxlength: 18,
        rules: [
            {
                required: true,
                message: '请输入人员身份证号码',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'telPhone',
        col: 12,
        label: '手机号',
        rules: [
            {
                required: true,
                message: '请输入人员手机号码',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'phone',
        col: 12,
        label: '分机号',
    },
    {
        name: 'ulabel',
        col: 12,
        label: '标签',
        maxlength: 18,
    },
    {
        name: 'wagecardno',
        col: 12,
        label: '工资卡号',
    },
    {
        name: 'email',
        col: 12,
        label: '电子邮箱',
    },
    {
        name: 'qq',
        col: 12,
        label: '工作QQ',
    },
    {
        name: 'wechat',
        col: 12,
        label: '微信号码',
    },
    {
        name: 'joindate',
        col: 12,
        label: '入职日期',
        type: 'date',
    },
    {
        name: 'sex',
        col: 12,
        label: '性别',
        type: 'radio',
        defaultValue: '保密',
        options: [
            {
                label: '女',
            },
            {
                label: '男',
            },
            {
                label: '保密',
            },
        ],
    },
    {
        name: 'birthday',
        col: 12,
        label: '出生日期',
        type: 'date',
    },
    {
        name: 'wedding',
        label: '婚姻状况',
        type: 'select',
        col: 12,
        options: [
            {
                label: '已婚',
            },
            {
                label: '未婚',
            },
        ],
    },
    {
        name: 'facename',
        label: '政治面貌',
        type: 'select',
        col: 12,
        options: [
            {
                label: '群众',
            },
            {
                label: '团员',
            },
            {
                label: '党员',
            },
        ],
    },
    {
        name: 'nation',
        col: 12,
        label: '民族',
    },
    {
        name: 'nativeplace',
        col: 12,
        label: '籍贯',
    },
    {
        name: 'finishschool',
        col: 12,
        label: '毕业院校',
    },
    {
        name: 'education',
        col: 12,
        label: '学历',
    },
    {
        name: 'major',
        col: 12,
        label: '专业',
    },
    {
        name: 'height',
        col: 12,
        label: '身高',
    },
    {
        name: 'weight',
        col: 12,
        label: '体重',
    },
    {
        name: 'contract_start_date',
        type: 'date',
        col: 12,
        label: '合同起始日',
    },
    {
        name: 'contract_end_date',
        type: 'date',
        col: 12,
        label: '合同截止日',
    },
];
