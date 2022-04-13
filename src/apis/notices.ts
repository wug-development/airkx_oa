import $http from '@/config/request';

export const apiSavenNotice = (data) => {
    return $http.post('/notice/save', data);
};

export const apiGetNotice = (params) => {
    return $http.get('/notice/get', {
        params,
    });
};
