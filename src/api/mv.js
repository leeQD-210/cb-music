import { request } from '@/request'
export const getMvDetail = (id) => {
  return request({
    method: 'get',
    url: '/mv/detail',
    params: {
      mvid: id
    }
  })
}
export const getMvUrl = (id) => {
  return request({
    method: 'get',
    url: '/mv/url',
    params: {
      id
    }
  })
}
export const getVideoDetail = (id) => {
  return request({
    method: 'get',
    url: '/video/detail',
    params: {
      id: id
    }
  })
}
export const getVideoUrl = (id) => {
  return request({
    method: 'get',
    url: '/video/url',
    params: {
      id
    }
  })
}
export const getRelatedMv = (id) => {
  return request({
    method: 'get',
    url: '/related/allvideo',
    params: {
      id
    }
  })
}
