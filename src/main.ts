import { createApp } from 'vue'
import App from './App.vue'
import Router from './routers'
import Store from './store'
import { VueCookieNext } from 'vue-cookie-next'
import AntDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/scss/ant-global.scss'
import './index.css'

const app = createApp(App)
.use(Router)
.use(Store)
.use(VueCookieNext)
.use(AntDesign)
// .use(Icon)
.mount('#app')