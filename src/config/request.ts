import Axios, { AxiosRequestConfig } from 'axios';
import { message } from 'ant-design-vue';
import { debounce } from '@/utils/tool/utils';
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
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

const refreshToken = async () => {
    const res = await instance.post('/token/refreshToken', {
        token: localStorage.getItem('token'),
    });
    console.log('refreshToken res :>> ', res);
    if (res && res.data === 405) {
        localStorage.removeItem('token');
        window.location.href = '/';
    } else {
        localStorage.setItem('token', String(res));
        return Promise.resolve(res);
    }
};

let isRefreshing = false;
const pendingRequest = [];
const onRefreshed = (token) => {
    pendingRequest.map((cb) => cb(token));
};

// 请求拦截
instance.interceptors.request.use((config) => {
    config.headers = {
        token: localStorage.getItem('token') || '',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json;charset=UTF-8',
    };
    return config;
});

// 响应拦截
instance.interceptors.response.use(
    (response) => {
        return new Promise(async (resolve, reject) => {
            if (response.data.status === 1) {
                resolve(response.data.data);
            } else if (response.data.status === 405) {
                resolve(response.data);
            } else if (response.data.status === 401) {
                if (response.data.expired) {
                    pendingRequest.push(async (token) => {
                        response.headers.token = `${token}`;
                        let config: AxiosRequestConfig<any> = response.config;
                        config.headers = {
                            'content-type': 'application/json;charset=UTF-8',
                        };
                        const r = await instance(config);
                        resolve(r);
                    });
                    if (!isRefreshing) {
                        isRefreshing = true;
                        const token = await refreshToken();
                        isRefreshing = false;
                        onRefreshed(token);
                    }
                } else {
                    debounce(function () {
                        message.warning(response.data.msg);
                        localStorage.removeItem('token');
                        window.location.href = '/';
                    })();
                }
            } else {
                message.warning(response.data.msg);
                reject(0);
            }
        });
    },
    (error) => {
        console.log('error :>> ', error.config, error.status);
        message.warning('请求失败，网络错误');
        return Promise.reject(error);
    }
);

export default instance;
