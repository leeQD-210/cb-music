import { request } from '@/request'
// 获取歌曲详情
export const getSongDetail = (ids) => {
  return request({
    method: 'get',
    url: '/song/detail',
    params: {
      ids
    }
  })
}
// 获取歌曲播放链接
export function getPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
// 获取歌曲歌词
export function getSongLyric(id) {
  return request({
    method: 'get',
    url: '/lyric',
    params: {
      id
    }
  })
}
