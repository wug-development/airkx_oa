import Layout from '../views/layout.vue';
const webSiteMonitor = () => import(/* webpackChunkName: "webSiteMonitor" */ '../views/webSiteMonitor/index.vue');
export default {
    path: '/webSiteMonitor',
    redirect: '/webSiteMonitor',
    name: 'webSiteMonitor',
    meta: {
        title: '网站监控',
        icon: 'FundProjectionScreenOutlined',
        hasChildren: false,
    },
    component: Layout,
    children: [
        {
            path: '/webSiteMonitor',
            name: 'webSiteMonitor',
            meta: {
                title: '监控列表',
                hasChildren: false,
            },
            component: webSiteMonitor,
        },
    ],
};
