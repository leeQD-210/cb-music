import { request } from '@/request';
// 获取歌单分类
export const getCatList = () => {
  return request({
    method: 'get',
    url: '/playlist/catlist',
  });
};
// 获取歌单信息
export const getPlayListByCat = (order, cat, limit, pageNo) => {
  return request({
    method: 'get',
    url: '/top/playlist',
    params: {
      order,
      limit,
      cat,
      offset: (pageNo - 1) * limit,
    },
  });
};
