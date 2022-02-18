import * as actionTypes from './constant'
import {
  getMvDetail,
  getMvUrl,
  getVideoDetail,
  getVideoUrl,
  getRelatedMv
} from '@/api/mv'
const changeMvDetail = (mvDetail) => ({
  type: actionTypes.CHANGE_MV_DETAIL,
  mvDetail
})
const changeMvUrl = (mvUrl) => ({
  type: actionTypes.CHANGE_MV_URL,
  mvUrl
})
const changeRelatedMvs = (relatedMvs) => ({
  type: actionTypes.CHANGE_RELATED_MVS,
  relatedMvs
})
// const changeVideoDetail = (videoDetail) => ({
//   type: actionTypes.CHANGE_VIDEO_DETAIL,
//   videoDetail
// })
// const changeVideoUrl = (videoUrl) => ({
//   type: actionTypes.CHANGE_VIDEO_URL,
//   videoUrl
// })
export const getMvAction = (id, type) => {
  return (dispatch) => {
    switch (type) {
      case 0:
        getMvDetail(id).then((res) => {
          dispatch(changeMvDetail(res.data))
        })
        getMvUrl(id).then((res) => {
          dispatch(changeMvUrl(res.data.url))
        })
        getRelatedMv(id).then((res) => {
          dispatch(changeRelatedMvs(res.data))
        })
        break
      case 1:
        getVideoDetail(id).then((res) => {
          dispatch(changeMvDetail(res.data))
        })
        getVideoUrl(id).then((res) => {
          dispatch(changeMvUrl(res.urls[0].url))
        })
        getRelatedMv(id).then((res) => {
          dispatch(changeRelatedMvs(res.data))
        })
        break
      default:
        return ''
    }
  }
}
