import { validateRequired } from '@/utils/tool/validator';
export const infoModel = [
    {
        name: 'dcCode',
        label: '三字码',
        col: 24,
        rules: [
            {
                required: true,
                message: '请输入三字码',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcCityName',
        label: '城市中文名',
        col: 24,
        rules: [
            {
                required: true,
                message: '请输入城市中文名',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcEnCityName',
        label: '城市英文名',
        col: 24,
        rules: [
            {
                required: true,
                message: '请输入城市英文名',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcPinyin',
        label: '城市拼音',
        col: 24,
        rules: [
            {
                required: true,
                message: '请输入城市拼音',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcAirPortName',
        label: '机场名称',
        col: 24,
        rules: [
            {
                required: true,
                message: '请输入机场名称',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcCountry',
        label: '国家',
        col: 24,
        rules: [
            {
                required: true,
                message: '请输入国家',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dcContinent',
        label: '洲',
        col: 24,
        rules: [
            {
                required: true,
                message: '请输入洲',
                trigger: 'blur',
            },
        ],
    },
    {
        name: 'dnType',
        label: '类型',
        col: 24,
        type: 'radio',
        options: [
            {
                label: '国内',
                value: '2',
            },
            {
                label: '国际',
                value: '1',
            },
        ],
        rules: [
            {
                required: true,
                message: '请选择',
                trigger: 'change',
            },
        ],
    },
];

export const searchModel = [
    {
        name: 'cityname',
        label: '城市名称',
        placeholder: '请输入城市名称',
        col: 24,
    },
];

export const listModel = [
    {
        title: 'ID',
        dataIndex: 'dnCityID',
        key: 'dnCityID',
        rowKey: 'key',
        width: '100px',
        align: 'center',
    },
    {
        title: '三字码',
        dataIndex: 'dcCode',
        key: 'dcCode',
        width: '80px',
        align: 'center',
    },
    {
        title: '城市名称',
        dataIndex: 'dcCityName',
        key: 'dcCityName',
        width: '200px',
        align: 'left',
    },
    {
        title: '英文名称',
        dataIndex: 'dcEnCityName',
        align: 'left',
        key: 'dcEnCityName',
        width: '200px',
    },
    {
        title: '拼音',
        dataIndex: 'dcPinyin',
        align: 'left',
        key: 'dcPinyin',
        width: '200px',
    },
    {
        title: '机场',
        dataIndex: 'dcAirPortName',
        align: 'left',
        key: 'dcAirPortName',
        width: '200px',
    },
    {
        title: '国家',
        dataIndex: 'dcCountry',
        align: 'left',
        width: '150px',
        key: 'dcCountry',
    },
    {
        title: '洲',
        dataIndex: 'dcContinent',
        align: 'left',
        width: '100px',
        key: 'dcContinent',
    },
    {
        title: '类型',
        dataIndex: 'dnType',
        align: 'center',
        key: 'dnType',
        customRender({ text }) {
            return Number(text === 1) ? '国际' : '国内';
        },
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

export const insertModel = [
    {
        name: 'id',
        label: '城市名称',
        placeholder: '请输入搜索城市名称',
        col: 24,
        span: 8,
        options: [],
        rules: [
            {
                validator: validateRequired,
                message: '请选择城市',
                trigger: 'change',
            },
        ],
    },
];

export const tableModel = [
    {
        title: '三字码',
        dataIndex: 'dcCode',
        key: 'dcCode',
        width: '80px',
        align: 'center',
    },
    {
        title: '城市名称',
        dataIndex: 'dcCityName',
        key: 'dcCityName',
        width: '200px',
        align: 'left',
    },
    {
        title: '英文名称',
        dataIndex: 'dcEnCityName',
        align: 'left',
        key: 'dcEnCityName',
        width: '200px',
    },
    {
        title: '拼音',
        dataIndex: 'dcPinyin',
        align: 'left',
        key: 'dcPinyin',
        width: '200px',
    },
    {
        title: '国家',
        dataIndex: 'dcCountry',
        align: 'left',
        width: '150px',
        key: 'dcCountry',
    },
    {
        title: '类型',
        dataIndex: 'dnType',
        align: 'center',
        key: 'dnType',
        customRender({ text }) {
            return Number(text === 1) ? '国际' : '国内';
        },
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
