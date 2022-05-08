import { createApp } from 'vue';
import App from './App.vue';

// ant-design-vue
import antd from 'ant-design-vue';
import router from './routers';
import store from './store';

// import 'ant-design-vue/dist/antd.css'
import { setupAntdIcon } from './plugin/antd/createAntdIcon';
import 'moment/dist/locale/zh-cn';
import './assets/scss/ant-global.scss';
import './index.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(antd);
setupAntdIcon(app);
app.mount('#app');
