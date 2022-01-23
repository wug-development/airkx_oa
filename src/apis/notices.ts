import $http from '@/config/request';

export const apiSavenNotice = (data) => {
  return $http.post('/api/notice/save', data);
};

export const apiGetNotice = (params) => {
  return $http.get('/api/notice/get', {
    params,
  });
};
