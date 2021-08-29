import { TreeDataItem } from 'ant-design-vue/es/tree/Tree';
import { CheckboxOptionType } from 'ant-design-vue/es/checkbox/Group';
export const programModel: CheckboxOptionType[] = [
    {
        label: '后台管理系统',
        value: 'sysBack',
    }, {
        label: '企业预定系统',
        value: 'sysBusiness',
    }, {
        label: '国际出票系统',
        value: 'sysInternational',
    }, {
        label: '国内出票系统',
        value: 'sysDomestic',
    }, {
        label: '支出管理系统',
        value: 'sysExpend',
    }
]

export const treeModel: TreeDataItem[] = [
    {
        title: '公司架构',
        key: 'jg',
        children: [
            {
                title: '部门管理',
                key: 'jg-bm',
                children: [
                    {
                        title: '添加部门',
                        key: 'jg-bm-add',
                    },
                    {
                        title: '编辑部门',
                        key: 'jg-bm-edit',
                    },
                    {
                        title: '删除部门',
                        key: 'jg-bm-del',
                    }
                ],
            }, 
            {
                title: '职位管理',
                key: 'jg-zw',
                children: [
                    {
                        title: '添加职位',
                        key: 'jg-zw-edit',
                    },
                    {
                        title: '编辑职位',
                        key: 'jg-zw-edit',
                    },
                    {
                        title: '删除职位',
                        key: 'jg-zw-del',
                    }
                ],
            }
        ]
    }, {
        title: '人员管理',
        key: 'ry',
        children: [
            {
                title: '查看人员信息',
                key: 'ry-info',
            },
            {
                title: '编辑人员',
                key: 'ry-edit',
            },
            {
                title: '删除人员',
                key: 'ry-del',
            },
            {
                title: '人员权限',
                key: 'ry-qx',
            },
            {
                title: '人员工资',
                key: 'ry-gz',
            }
        ]
    }
]