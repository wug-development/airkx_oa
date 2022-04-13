import $http from '@/config/request';
import qs from 'qs/lib';

// 获取个人工资列表
// export const apiWages = (data) => {
//     return $http.get('/wages/userWages', data);
// };

// 获取个人工资列表
export const apiWages = (data) => {
    return $http.get('/wages/getWageList?userid=' + data);
};
