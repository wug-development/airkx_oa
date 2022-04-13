//
import $http from '@/config/request';

// 获取列表
export const apiGetJobList = (params) => {
    return $http.get('/job/getlist', params);
};

// 保存职位
export const apiSave = (data) => {
    return $http.post('/job/save', data);
};

// 删除职位
export const apiDel = (params) => {
    return $http.get(`/job/del?id=${params}`);
};
