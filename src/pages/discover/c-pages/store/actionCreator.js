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
      default:
        return ''
    }
  }
}
