import $http from '@/config/request';

export const apiSaveNotice = (data) => {
    return $http.post('/notice/save', data);
};

export const apiNoticeInfo = (id) => {
    return $http.get('/notice/info?id=' + id);
};

export const apiNoticeDel = (id) => {
    return $http.get('/notice/del?id=' + id);
};

export const apiGetNotice = (params) => {
    return $http.post('/notice/getList', params);
};
