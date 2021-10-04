// 搜索条件
export const searchParams = [
    {
        label: '开始年月',
        name: 'sdate',
        span: 8,
        format: 'YYYY-MM',
        valueFormat: 'YYYY-MM',
        type: 'month',
        placeholder: '请选择'
    },
    {
        label: '截止年月',
        name: 'edate',
        span: 8,
        format: 'YYYY-MM',
        valueFormat: 'YYYY-MM',
        type: 'month',
        placeholder: '请选择'
    },
    {
        label: '人员筛选',
        name: 'persons',
        span: 24,
        type: 'select',
        placeholder: '公司12个月销售总额',
        mode: 'multiple',
        showArrow: true,
        allowClear: true,
        options: [
            {
                value: '0',
                label: '全部'
            }
        ]
    }
]