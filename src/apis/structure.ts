//api 接口列表
import $http from '@/config/request';

// 获取列表
export const apiGetStructureList = () => {
    return $http.get('/api/structure/getlist');
};

// 获取列表
export const apiStructureTree = (pid = '') => {
    return $http.get('/api/structure/getTreeList?parentID=' + pid);
};

// 获取列表
export const apiGetStructure = (pid = '') => {
    return $http.get('/api/structure/getTree?parentID=' + pid);
};

// 保存
export const apiSave = (data) => {
    return $http.post('/api/structure/save', data);
};

// 删除
export const apiDel = (params) => {
    return $http.get(`/api/structure/del?id=${params}`);
};
