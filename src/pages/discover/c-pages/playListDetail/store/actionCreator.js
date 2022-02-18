import * as actionTypes from './constant'
import { getPlayListDetail, getSongList } from '@/api/playList'
const changePlayListDetail = (playListDetail) => ({
  type: actionTypes.CHANGE_PLAYLIST_DETAIL,
  playListDetail
})
const changeSongList = (songList) => ({
  type: actionTypes.CHANGE_PLAYLIST_SONGLIST,
  songList
})
export const getPlayListDetailAction = (id) => {
  return (dispatch) => {
    getPlayListDetail(id).then((res) => {
      dispatch(changePlayListDetail(res.playlist))
    })
    getSongList(id).then((res) => {
      dispatch(changeSongList(res))
    })
  }
}
