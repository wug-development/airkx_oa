//api 接口列表
import $http from '@/config/request';

// 获取列表
export const apiGetDepartList = (params) => {
    return $http.get('/department/getlist', params);
};

// 添加部门
export const apiAdd = (params) => {
    return $http.get('/department/add', params);
};

// 保存部门
export const apiSave = (data) => {
    return $http.post('/department/save', data);
};

// 删除部门
export const apiDel = (params) => {
    return $http.get(`/department/del?id=${params}`);
};
