import Layout from '../views/layout.vue';
const discountAirway = () => import(/* webpackChunkName: "discountAirway" */ '../views/discountAirway/index.vue');
export default {
    path: '/discountAirway',
    redirect: '/discountAirway',
    name: 'discountAirway',
    meta: {
        title: '优惠航线',
        icon: 'NodeIndexOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/discountAirway',
            name: 'discountAirway',
            meta: {
                title: '优惠航线列表',
                hasChildren: false,
            },
            component: discountAirway,
        },
    ],
};
