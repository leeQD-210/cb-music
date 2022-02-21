import * as actionTypes from './constant'
import { getPlayListDetail, getRelatedSongList } from '@/api/playList'
import { getSongDetail } from '@/api/player'
import { message } from 'antd'
const changePlayListDetail = (playListDetail) => ({
  type: actionTypes.CHANGE_PLAYLIST_DETAIL,
  playListDetail
})
const changeSongList = (songList) => ({
  type: actionTypes.CHANGE_PLAYLIST_SONGLIST,
  songList
})
const changeRelatedSongList = (relatedSongList) => ({
  type: actionTypes.CHANGE_RELATED_SONGLIST,
  relatedSongList
})
export const getPlayListDetailAction = (id) => {
  return (dispatch) => {
    const key = 'updatePlayList'
    message.loading({ content: '努力加载中...', key })
    getPlayListDetail(id).then((res) => {
      dispatch(changePlayListDetail(res.playlist))
      const idArr = res.playlist.trackIds.map((item) => {
        return item.id
      })
      getSongDetail(idArr.join()).then((result) => {
        dispatch(changeSongList(result.songs))
        message.success({ content: '加载完成', key })
      })
    })
    getRelatedSongList(id).then((res) => {
      dispatch(changeRelatedSongList(res.playlists))
    })
  }
}
