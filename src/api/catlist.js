import { request } from '@/request'
// 获取歌单分类
export const getCatList = () => {
  return request({
    method: 'get',
    url: '/playlist/catlist'
  })
}
