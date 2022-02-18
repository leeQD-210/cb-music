import * as actionTypes from './constant'
import { Map } from 'immutable'
const defaultState = Map({
  mvDetail: {},
  mvUrl: '',
  relatedMvs: []
  // videoDetail: {},
  // videoUrl: ''
})
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MV_DETAIL:
      return state.set('mvDetail', action.mvDetail)
    case actionTypes.CHANGE_MV_URL:
      return state.set('mvUrl', action.mvUrl)
    case actionTypes.CHANGE_RELATED_MVS:
      return state.set('relatedMvs', action.relatedMvs)
    // case actionTypes.CHANGE_VIDEO_DETAIL:
    //   return state.set('videoDetail', action.videoDetail)
    // case actionTypes.CHANGE_VIDEO_URL:
    //   return state.set('videoUrl', action.videoUrl)
    default:
      return state
  }
}
