import { request } from '@/request';
export const getSongComment = (id, limit, pageNo) => {
  return request({
    method: 'get',
    url: '/comment/music',
    params: {
      id,
      limit,
      offset: (pageNo - 1) * limit,
    },
  });
};
