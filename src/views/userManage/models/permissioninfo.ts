import { TreeDataItem } from 'ant-design-vue/es/tree/Tree';
import { CheckboxOptionType } from 'ant-design-vue/es/checkbox/Group';
// 项目权限模块
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
// OA系统权限模块
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
    }, {
        title: '客户管理',
        key: 'ct',
        children: [
            {
                title: '客户列表',
                key: 'ct-list',
            },
            {
                title: '客户详情',
                key: 'ct-info',
            },
            {
                title: '客户删除',
                key: 'ct-del',
            },
            {
                title: '客户添加',
                key: 'ct-add',
            },
            {
                title: '客户编辑',
                key: 'ct-edit',
            }
        ]
    }, {
        title: '出票点管理',
        key: 'ot',
        children: [
            {
                title: '出票点列表',
                key: 'ot-list',
            },
            {
                title: '出票点删除',
                key: 'ot-del',
            },
            {
                title: '出票点添加',
                key: 'ot-add',
            },
            {
                title: '出票点编辑',
                key: 'ot-edit',
            }
        ]
    }, {
        title: '销售统计',
        key: 'sale',
    }
]
// 国内/国际出票权限
export const outTicketModel: TreeDataItem[] = [
    {
        title: '导出数据',
        key: 'exports',
    }, {
        title: '收款权限',
        key: 'make_money',
    }, {
        title: '检查权限',
        key: 'check',
        children: [
            {
                title: '出票检查',
                key: 'check-outTicket',
            },
            {
                title: '退票检查',
                key: 'check-backTicket',
            }
        ]
    }, {
        title: '退票处理',
        key: 'backTicket',
        children: [
            {
                title: '已退回',
                key: 'back-end',
            },
            {
                title: '已退出',
                key: 'back-outEnd',
            },
            {
                title: '退票完成',
                key: 'back-complete',
            }
        ]
    }
]