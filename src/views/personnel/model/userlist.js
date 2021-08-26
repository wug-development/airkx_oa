import { validatePhoneTwo } from '@/utils/tool/validator.js'
export const searchModel = [
    {
        label: '姓名',
        name: 'name',
        placeholder: '请输入人员姓名',
        rules: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }]
    },
    {
        label: '手机号',
        name: 'phone',
        placeholder: '请输入人员手机号',
        rules: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }]
    }
]