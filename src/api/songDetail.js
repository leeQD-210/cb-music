import { request } from '@/request';
export const getSimiSongs = (id) => {
  return request({
    method: 'get',
    url: '/simi/song',
    params: {
      id,
    },
  });
};
export const getSongListenUser = (id) => {
  return request({
    method: 'get',
    url: '/simi/user',
    params: {
      id,
    },
  });
};
