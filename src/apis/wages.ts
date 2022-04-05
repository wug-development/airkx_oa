import $http from '@/config/request';
import qs from 'qs/lib';

// 获取个人工资列表
// export const apiWages = (data) => {
//     return $http.get('/api/wages/userWages', data);
// };

// 获取个人工资列表
export const apiWages = (data) => {
    return $http.get('/api/wages/getWageList?userid=' + data);
};
