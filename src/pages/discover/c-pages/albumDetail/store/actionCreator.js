import * as actionTypes from './constant'
import { getAlbumDetail, getAlbumInfo } from '@/api/albums'
const changeAlbumDetail = (albumDetail) => ({
  type: actionTypes.CHANGE_ALBUM_DETAIL,
  albumDetail
})
const changeAlbumInfo = (albumInfo) => ({
  type: actionTypes.CHANGE_ALBUM_INFO,
  albumInfo
})
const changeAlbumSongs = (albumSongs) => ({
  type: actionTypes.CHANGE_ALBUM_SONGS,
  albumSongs
})
export const getAlbumDetailAction = (id) => {
  return (dispatch) => {
    getAlbumDetail(id).then((res) => {
      dispatch(changeAlbumDetail(res.album))
      dispatch(changeAlbumSongs(res.songs))
    })
    getAlbumInfo(id).then((res) => {
      dispatch(changeAlbumInfo(res))
    })
  }
}
