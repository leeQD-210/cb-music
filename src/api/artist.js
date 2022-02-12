import { request } from '@/request';
export const getHotArtistList = (url) => {
  return request({
    method: 'get',
    url,
  });
};
export const getArtistList = (type, area, initial) => {
  return request({
    method: 'get',
    url: '/artist/list',
    params: {
      type,
      area,
      initial,
      limit: 100, 
    },
  });
};
