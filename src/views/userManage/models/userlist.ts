import { validatePhone } from '@/utils/tool/validator'
export const searchModel = [
    {
        label: '姓名',
        name: 'name',
        placeholder: '请输入人员姓名'
    },
    {
        label: '手机号',
        name: 'phone',
        placeholder: '请输入人员手机号',
        rules: [{ 
            validator: validatePhone,
            trigger: 'blur'
        }]
    }
]

export const listModel = [
    {
        title: '员工姓名',
        key: '1',
        dataIndex: 'name',
        width: '100px',
        align: 'center',
    }, {
        title: '性别',
        key: '1',
        dataIndex: 'sex',
        width: '80px',
        align: 'center',
    }, {
        title: '部门',
        key: '1',
        dataIndex: 'departmentName',
        width: '130px',
        align: 'center',
    }, {
        title: '职位',
        key: '1',
        dataIndex: 'job',
        width: '150px',
        align: 'center',
    }, {
        title: '电话',
        key: '1',
        dataIndex: 'phonenum',
        align: 'center',
        customRender: (row: any) => {
            const record: any = row.record
            if (record.tel && record.phone) {
                return record.tel + '/' + record.phone 
            } else if (record.tel) {
                return record.tel
            } else if (record.phone) {
                return record.phone
            } else {
                return ''
            }
        }
    }, {
        title: '身份证号码',
        key: '1',
        dataIndex: 'idcardno',
        align: 'center',
    }, {
        title: '入职日期',
        key: '1',
        width: '110px',
        dataIndex: 'joindate',
        align: 'center',
    }, {
        title: '学历',
        key: '1',
        dataIndex: 'edu',
        width: '80px',
        align: 'center',
    }, {
        title: '基本工资',
        key: '1',
        dataIndex: 'wages',
        width: '100px',
        align: 'center',
    }, {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        align: 'center',
        width: 260,
        slots: {
            customRender: 'action'
        },
    }
]