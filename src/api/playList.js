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
