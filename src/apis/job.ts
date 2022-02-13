//
import $http from '@/config/request';

// 获取列表
export const apiGetList = (params) => {
    return $http.get('/api/job/getlist', params);
};

// 保存职位
export const apiSave = (data) => {
    return $http.post('/api/job/save', data);
};

// 删除职位
export const apiDel = (params) => {
    return $http.get(`/api/job/del?id=${params}`);
};
