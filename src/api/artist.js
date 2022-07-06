import { request } from '@/request'
// 获取热门歌手列表
export const getHotArtistList = (url) => {
  return request({
    method: 'get',
    url
  })
}
// 获取歌手列表
export const getArtistList = (type, area, initial) => {
  return request({
    method: 'get',
    url: '/artist/list',
    params: {
      type,
      area,
      initial,
      limit: 100
    }
  })
}
// 获取歌手详情
export const getArtistDetail = (id) => {
  return request({
    method: 'get',
    url: '/artists/detail',
    params: {
      id
    }
  })
}
// 获取歌手专辑
export const getArtistAlbums = (id, pageNo, limit) => {
  return request({
    method: 'get',
    url: '/artist/album',
    params: {
      id,
      limit,
      offset: (pageNo - 1) * limit
    }
  })
}
// 获取歌手mv
export const getArtistMv = (id) => {
  return request({
    method: 'get',
    url: '/artist/mv',
    params: {
      id
    }
  })
}
// 获取歌手描述
export const getArtistDesc = (id) => {
  return request({
    method: 'get',
    url: '/artist/desc',
    params: {
      id
    }
  })
}
// 获取热门个够
export const getTopArtist = (limit) => {
  return request({
    method: 'get',
    url: '/top/artists',
    params: {
      limit
    }
  })
}
