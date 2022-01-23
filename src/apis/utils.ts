/**
 * 公共接口
 */
import $http from '@/config/request';
import { baseApiURL } from '@/config/request';

// 上传文件
export const apiUploadFile = () => {
    return $http.post('/api/upload/save');
};

export const apiUploadUri = baseApiURL + 'api/upload/save';
