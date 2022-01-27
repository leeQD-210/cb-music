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
export const getNewAlbums = (limit, offset) => {
  return request({
    method: 'get',
    url: '/top/album',
    params: {
      limit,
      offset
    }
  })
}
// 获取所有榜单
export const getAllRank = () => {
  return request({
    method: 'get',
    url: '/toplist'
  })
}
// 获取榜单
export const getTopList = (id) => {
  return request({
    method: 'get',
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
// 获取入驻歌手
export const getTopArtistList = (limit, type) => {
  return request({
    method: 'get',
    url: '/artist/list',
    params: {
      limit,
      type
    }
  })
}
// 获取热门主播
export const getHotDj = (limit) => {
  return request({
    method: 'get',
    url: '/dj/toplist/popular',
    params: {
      limit
    }
  })
}
