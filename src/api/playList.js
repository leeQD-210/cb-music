import { request } from '@/request'
export const getPlayListDetail = (id) => {
  return request({
    method: 'get',
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
export const getSongList = (id) => {
  return request({
    method: 'get',
    url: '/playlist/track/all',
    params: {
      id
    }
  })
}
export const getRelatedSongList = (id) => {
  return request({
    method: 'get',
    url: '/related/playlist',
    params: {
      id
    }
  })
}
