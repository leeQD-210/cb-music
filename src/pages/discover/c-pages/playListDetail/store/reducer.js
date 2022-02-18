import * as actionTypes from './constant'
import { Map } from 'immutable'
const defaultState = Map({
  playListDetail: {},
  songList: []
})
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PLAYLIST_DETAIL:
      return state.set('playListDetail', action.playListDetail)
    case actionTypes.CHANGE_PLAYLIST_SONGLIST:
      return state.set('songList', action.songList)
    default:
      return state
  }
}
