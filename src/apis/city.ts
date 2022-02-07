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

// 获取热门城市列表
export const apiGetHotList = (data) => {
    return $http.post('/api/hotcity/gethotlist', data);
};

// 添加热门城市
export const apiInsertHotList = (params) => {
    return $http.get(`/api/hotcity/addhot?id=${params}`);
};

// 删除热门城市
export const apiDelHot = (params) => {
    return $http.get(`/api/hotcity/del?id=${params}`);
};
