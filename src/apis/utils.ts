/**
 * 公共接口
 */
import $http, { baseApiURL } from '@/config/request';

// 上传文件
export const apiUploadFile = (params) => {
    return $http.post('/Uploads/AsyncUpload', params, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

// export const apiUploadUri = baseApiURL + 'upload/save';
export const apiUploadUri = baseApiURL + 'Uploads/AsyncUpload';
