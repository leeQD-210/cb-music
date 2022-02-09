import { request } from '@/request'
export const getTopList = () => {
  return request({
    method: 'get',
    url: '/toplist'
  })
}
export const getPlayListDetail = (id) => {
  return request({
    method: 'get',
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
