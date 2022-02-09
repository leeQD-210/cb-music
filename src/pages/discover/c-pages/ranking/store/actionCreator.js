import * as actionTypes from './constant'
import { getTopList, getPlayListDetail } from '@/api/ranking'
const changeTopList = (topList) => ({
  type: actionTypes.CHANGE_RANKING_TOPLIST,
  topList
})
const changePlayListDetail = (playListDetail) => ({
  type: actionTypes.CHANGE_RANKING_PLAYLIST_DETAIL,
  playListDetail
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
    getPlayListDetail(id).then((res) => {
      dispatch(changePlayListDetail(res.playlist))
    })
  }
}
