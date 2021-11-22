import Axios from 'axios';
import { message } from 'ant-design-vue'
let baseURL: string = '';
if (typeof process !== 'undefined') {
    baseURL = 'https://api.xxx.com/'
} else {
    baseURL = String(import.meta.env.VITE_BASE_URL);
}

const instance = Axios.create({
    baseURL,
    timeout: 60000,
    // headers: {
    //     'Content-Type': 'application/json;charset=UTF-8'
    // }
})

// // 请求拦截
// instance.interceptors.request.use((config) => {
//     return config;
// })

// 响应拦截
instance.interceptors.response.use(response => {
    return response.data
}, error => {
    message.warning('请求失败，网络错误');
    return Promise.reject(error);
})

export default instance;
