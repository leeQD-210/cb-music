import * as actionTypes from './constant'
import { Map } from 'immutable'
const defaultState = Map({
  albumDetail: {},
  albumSongs: [],
  albumInfo: []
})
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALBUM_DETAIL:
      return state.set('albumDetail', action.albumDetail)
    case actionTypes.CHANGE_ALBUM_SONGS:
      return state.set('albumSongs', action.albumSongs)
    case actionTypes.CHANGE_ALBUM_INFO:
      return state.set('albumInfo', action.albumInfo)
    default:
      return state
  }
}
