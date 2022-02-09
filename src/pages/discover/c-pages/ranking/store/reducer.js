import { Map } from 'immutable'
import * as actionTypes from './constant'
const defaultState = Map({
  topList: [],
  playListDetail: {}
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RANKING_TOPLIST:
      return state.set('topList', action.topList)
    case actionTypes.CHANGE_RANKING_PLAYLIST_DETAIL:
      return state.set('playListDetail', action.playListDetail)
    default:
      return state
  }
}
export default reducer
