import $http from '@/config/request';
import qs from 'qs/lib';

// 登录
export const apiLogin = (data) => {
    return $http.post('/api/user/login', data);
};

// 修改密码
export const apiEditPassword = (data) => {
    return $http.post('/api/user/editpassword', data);
};

// 获取列表
export const apiGetList = (data) => {
    return $http.post('/api/user/getlist', data);
};

// 保存
export const apiSave = (data) => {
    return $http.post('/api/user/save', data);
};

// 删除
export const apiDel = (params) => {
    return $http.get(`/api/user/del?id=${params}`);
};

// 删除
export const apiChange = (params) => {
    return $http.get(`/api/user/change?${qs.stringify(params)}`);
};

// 查询
export const apiQuery = (params) => {
    return $http.get(`/api/user/query?id=${params}`);
};
