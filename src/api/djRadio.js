import { request } from '@/request';
export const getDjCategory = () => {
  return request({
    method: 'get',
    url: '/dj/catelist',
  });
};
// 推荐电台
export const getDjRecommend = () => {
  return request({
    method: 'get',
    url: '/dj/recommend',
  });
};
// 电台节目
export const getDjProgram = (limit) => {
  return request({
    method: 'get',
    url: '/dj/program/toplist',
    params: {
      limit,
    },
  });
};
// 推荐节目
export const getProgramRecommend = () => {
  return request({
    method: 'get',
    url: '/program/recommend',
  });
};
// 根据类型获取推荐电台
export const getDjRecommendByType = (type) => {
  return request({
    method: 'get',
    url: '/dj/recommend/type',
    params: {
      type: type,
    },
  });
};
