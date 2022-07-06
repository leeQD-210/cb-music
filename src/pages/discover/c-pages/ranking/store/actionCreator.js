import * as actionTypes from './constant'
import { getTopList, getPlayListDetail } from '@/api/ranking'
import { message } from 'antd'
const changeTopList = (topList) => ({
  type: actionTypes.CHANGE_RANKING_TOPLIST,
  topList
})
const changePlayListDetail = (playListDetail) => ({
  type: actionTypes.CHANGE_RANKING_PLAYLIST_DETAIL,
  playListDetail
})
export const changeSongList = (songList) => ({
  type: actionTypes.CHANGE_SONG_LIST,
  songList
})
export const initTopList = () => {
  return (dispatch) => {
    getTopList().then((res) => {
      dispatch(changeTopList(res.list))
    })
  }
}
export const getDetail = (id) => {
  return (dispatch) => {
    const key = 'updatable'
    message.loading({ content: '努力加载中...', key })
    getPlayListDetail(id).then((res) => {
      dispatch(changePlayListDetail(res.playlist))
      dispatch(changeSongList(res.playlist.tracks))
      message.success({ content: '加载完成!', key, duration: 2 })
    })
  }
}
