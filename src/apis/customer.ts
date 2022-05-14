import $http from '@/config/request';

// 获取列表
export const apiGetList = (data) => {
    return $http.post('/customer/getCompanyList', data);
};

// 保存
export const apiSave = (data) => {
    return $http.post('/customer/save', data);
};

// 删除
export const apiDel = (params) => {
    return $http.get(`/customer/del?id=${params}`);
};

// 查询
export const apiQuery = (params) => {
    return $http.get(`/customer/query?id=${params}`);
};
