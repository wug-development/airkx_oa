import $http from '@/config/request'

export const apiSavePermission = (data) => {
    return $http.post('/api/permission/save', data)
};

export const apiGetPermission = (params) => {
    return $http.get('/api/permission/get', {
        params
    })
};
