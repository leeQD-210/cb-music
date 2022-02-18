import { request } from '@/request'
// 评论
export const getComment = (id, limit, pageNo, type) => {
  return request({
    method: 'get',
    url: `/comment/${type}`,
    params: {
      id,
      limit,
      offset: (pageNo - 1) * limit
    }
  })
}
