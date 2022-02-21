import { request } from '@/request'
// 获取最新碟片
export const getNewestAlbums = (limit, pageNo, area, type) => {
  return request({
    method: 'get',
    url: '/album/newest'
  })
}
export const getAlbumDetail = (id) => {
  return request({
    method: 'get',
    url: '/album',
    params: {
      id
    }
  })
}
export const getAlbumInfo = (id) => {
  return request({
    method: 'get',
    url: '/album/detail/dynamic',
    params: {
      id
    }
  })
}
