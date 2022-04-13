//
import $http from '@/config/request';
import qs from 'qs/lib';
// 获取是否打卡
export const apiGetIsClock = () => {
    return $http.get('/clock/getIsClock');
};

// 打卡
export const apiPunchClock = () => {
    return $http.get('/clock/punchClock');
};
