import $http from '@/config/request';
import qs from 'qs/lib';

// 登录
export const apiLogin = (data) => {
    return $http.post('/user/login', data);
};

// 修改密码
export const apiEditPassword = (data) => {
    return $http.post('/user/editpassword', data);
};

// 获取列表
export const apiGetList = (data) => {
    return $http.post('/user/getlist', data);
};

// 保存
export const apiSave = (data) => {
    return $http.post('/user/save', data);
};

// 删除
export const apiDel = (params) => {
    return $http.get(`/user/del?id=${params}`);
};

// 删除
export const apiChange = (params) => {
    return $http.get(`/user/change?${qs.stringify(params)}`);
};

// 查询
export const apiQuery = (params) => {
    return $http.get(`/user/query?id=${params}`);
};

// 获取公网IP
export const apiGetIP = () => {
    return $http.get(`https://apis.map.qq.com/ws/location/v1/ip?key=XSWBZ-2BIW5-SZOIF-QLW4C-OETC5-5FBX6`);
};
