import $http from '@/config/request';

export const apiSaveNotice = (data) => {
    return $http.post('/notice/save', data);
};

export const apiGetNotice = (params) => {
    return $http.post('/notice/getList', params);
};
