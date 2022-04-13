import $http from '@/config/request';

export const apiSavePermission = (data) => {
    return $http.post('/permission/save', data);
};

export const apiGetPermission = (params) => {
    return $http.get('/permission/get', {
        params,
    });
};
