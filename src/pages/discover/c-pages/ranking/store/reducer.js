import { Map } from 'immutable'
import * as actionTypes from './constant'
const defaultState = Map({
  topList: [],
  playListDetail: {},
  songList: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RANKING_TOPLIST:
      return state.set('topList', action.topList)
    case actionTypes.CHANGE_RANKING_PLAYLIST_DETAIL:
      return state.set('playListDetail', action.playListDetail)
    case actionTypes.CHANGE_SONG_LIST:
      return state.set('songList', action.songList)
    default:
      return state
  }
}
export default reducer
