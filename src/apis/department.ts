//api 接口列表
import $http from '@/config/request';

// 获取列表
export const apiGetList = (params) => {
    return $http.get('/api/department/getlist', params);
};

// 添加部门
export const apiAdd = (params) => {
    return $http.get('/api/department/add', params);
};

// 保存部门
export const apiSave = (data) => {
    return $http.post('/api/department/save', data);
};

// 删除部门
export const apiDel = (params) => {
    return $http.get(`/api/department/del?id=${params}`);
};
