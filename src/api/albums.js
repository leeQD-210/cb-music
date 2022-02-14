import { request } from '@/request';
// 获取最新碟片
export const getNewestAlbums = (limit, pageNo, area, type) => {
  return request({
    method: 'get',
		url: '/album/newest',
  });
};
