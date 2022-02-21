import * as actionTypes from './constant'
import { getComment } from '@/api/comment'
const changeSongComment = (songComments) => ({
  type: actionTypes.CHANGE_SONG_COMMENT,
  songComments
})
const changeSongHotComment = (songHotComments) => ({
  type: actionTypes.CHANGE_SONG_HOT_COMMENT,
  songHotComments
})
const changeSongCommentTotal = (songCommentsTotal) => ({
  type: actionTypes.CHANGE_SONG_COMMENT_TOTAL,
  songCommentsTotal
})
const changeMvComment = (mvComments) => ({
  type: actionTypes.CHANGE_MV_COMMENT,
  mvComments
})
const changeMvHotComment = (mvHotComments) => ({
  type: actionTypes.CHANGE_MV_HOT_COMMENT,
  mvHotComments
})
const changeMvCommentTotal = (mvCommentsTotal) => ({
  type: actionTypes.CHANGE_MV_COMMENT_TOTAL,
  mvCommentsTotal
})
const changePlayListComment = (playListComments) => ({
  type: actionTypes.CHANGE_PLAYLIST_COMMENT,
  playListComments
})
const changePlayListHotComment = (playListHotComments) => ({
  type: actionTypes.CHANGE_PLAYLIST_HOT_COMMENT,
  playListHotComments
})
const changePlayListCommentTotal = (playListCommentsTotal) => ({
  type: actionTypes.CHANGE_PLAYLIST_COMMENT_TOTAL,
  playListCommentsTotal
})
const changeAlbumComment = (albumComments) => ({
  type: actionTypes.CHANGE_ALBUM_COMMENT,
  albumComments
})
const changeAlbumHotComment = (albumHotComments) => ({
  type: actionTypes.CHANGE_ALBUM_HOT_COMMENT,
  albumHotComments
})
const changeAlbumCommentTotal = (albumCommentsTotal) => ({
  type: actionTypes.CHANGE_ALBUM_COMMENT_TOTAL,
  albumCommentsTotal
})
export const getCommentAction = (id, limit, pageNo, type) => {
  return (dispatch) => {
    switch (type) {
      case 'music':
        getComment(id, limit, pageNo, type).then((res) => {
          dispatch(changeSongComment(res.comments))
          pageNo === 1 && dispatch(changeSongHotComment(res.hotComments))
          dispatch(changeSongCommentTotal(res.total))
        })
        break
      case 'mv':
        getComment(id, limit, pageNo, type).then((res) => {
          dispatch(changeMvComment(res.comments))
          pageNo === 1 && dispatch(changeMvHotComment(res.hotComments))
          dispatch(changeMvCommentTotal(res.total))
        })
        break
      case 'video':
        getComment(id, limit, pageNo, type).then((res) => {
          dispatch(changeMvComment(res.comments))
          pageNo === 1 && dispatch(changeMvHotComment(res.hotComments))
          dispatch(changeMvCommentTotal(res.total))
        })
        break
      case 'playlist':
        getComment(id, limit, pageNo, type).then((res) => {
          dispatch(changePlayListComment(res.comments))
          pageNo === 1 && dispatch(changePlayListHotComment(res.hotComments))
          dispatch(changePlayListCommentTotal(res.total))
        })
        break
      case 'album':
        getComment(id, limit, pageNo, type).then((res) => {
          dispatch(changeAlbumComment(res.comments))
          pageNo === 1 && dispatch(changeAlbumHotComment(res.hotComments))
          dispatch(changeAlbumCommentTotal(res.total))
        })
        break
      default:
        return ''
    }
  }
}
