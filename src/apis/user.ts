import $http from '@/config/request'

export const apiLogin = (data) => {
    return $http.post('/api/user/login', data)
};

export const apiEditPassword = (data) => {
    return $http.post('/api/user/editpassword', data)
};


