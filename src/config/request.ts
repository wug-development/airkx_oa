import Axios from 'axios';
import { message } from 'ant-design-vue';
let baseURL: string = '';
if (import.meta && import.meta.env && import.meta.env.VITE_BASE_URL) {
    baseURL = String(import.meta.env.VITE_BASE_URL);
} else {
    baseURL = 'http://api.oa.airkx.com/';
}

export const baseApiURL = baseURL;

const instance = Axios.create({
    baseURL,
    timeout: 60000,
    // headers: {
    //     'Content-Type': 'application/json;charset=UTF-8'
    // }
});

// // 请求拦截
// instance.interceptors.request.use((config) => {
//     return config;
// })

// 响应拦截
instance.interceptors.response.use(
    (response) => {
        console.log('response.data :>> ', response.data);
        if (response.data.status === 1) {
            return response.data.data;
        } else {
            message.warning(response.data.msg);
            return Promise.reject(0);
        }
    },
    (error) => {
        message.warning('请求失败，网络错误');
        return Promise.reject(error);
    }
);

export default instance;
