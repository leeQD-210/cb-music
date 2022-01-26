import { request } from '@/request'
// 获取轮播图
export const getTopBanner = () => {
  return request({
    method: 'get',
    url: '/banner'
  })
}
// 获取热门歌单
export const getHotRecommend = () => {
  return request({
    method: 'get',
    url: '/personalized',
    params: { limit: 8 }
  })
}
// 获取新上碟片
export const getNewAlbums = (limit,offset) => {
  return request({
    method: 'get',
    url: '/top/album',
    params: {
      limit,
      offset
    }
  })
}