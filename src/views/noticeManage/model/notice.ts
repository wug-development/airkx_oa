export const infoNotice = [
    {
        name: 'title',
        label: '标题',
        col: 24,
        rules: [{
            required: true,
            message: '请输入通知标题',
            trigger: 'blur'
        }]
    }, {
        name: 'airName',
        label: '航空公司',
        col: 24,
    }, {
        name: 'content',
        label: '内容',
        type: 'custom'
    }
]
