import { request } from '@/request';
export const getSearchSongs = (keywords, pageNo) => {
  return request({
    methods: 'get',
    url: '/search',
    params: {
      keywords,
      limit: 12,
      offset: (pageNo - 1) * 12,
    },
  });
};
