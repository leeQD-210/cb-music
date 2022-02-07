import { request } from '@/request'
export const getSearchSongs = (keywords, pageNo, limit, type = 1) => {
  return request({
    methods: 'get',
    url: '/search',
    params: {
      keywords,
      type,
      limit,
      offset: (pageNo - 1) * limit
    }
  })
}
