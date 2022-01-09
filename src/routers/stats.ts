import Layout from '../views/layout.vue'
const SaleStats = () => import(/* webpackChunkName: "saleStats" */ '../views/stats/saleStats.vue')
export default {
    path: '/stats',
    redirect: '/salestats',
    icon: 'stats',
    name: 'stats',
    meta: {
        title: '统计管理',
        hasChildren: false
    },
    component: Layout,
    children: [
        {
            path: '/saleStats',
            name: 'salestats',
            meta: {
                title: '销售统计',
                hasChildren: false
            },
            component: SaleStats
        }
    ]
}