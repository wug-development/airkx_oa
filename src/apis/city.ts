import $http from '@/config/request';

// 获取列表
export const apiGetList = (data) => {
    return $http.post('/api/city/getlist', data);
};

// 保存
export const apiSave = (data) => {
    return $http.post('/api/city/save', data);
};

// 删除
export const apiDel = (params) => {
    return $http.get(`/api/city/del?id=${params}`);
};
