import $http from '@/config/request';
import qs from 'qs/lib';

// 获取个人工资列表
// export const apiWages = (data) => {
//     return $http.get('/wages/userWages', data);
// };

// 获取个人工资列表
export const apiWages = () => {
    return $http.get('/wages/getWageList');
};

// 获取个人工资组成
export const apiMyWagesInfo = () => {
    return $http.get('/wages/getMyWageInfo');
};

// 设置工资组成
export const apiWageSet = (data) => {
    return $http.post('/wages/wageSet', data);
};

// 设置工资组成
export const apiTakeSet = (data) => {
    return $http.post('/wages/takeSet', data);
};
