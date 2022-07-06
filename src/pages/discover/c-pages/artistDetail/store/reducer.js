import * as actionTypes from './constant'
import { Map } from 'immutable'
const defaultState = Map({
  artistDetail: {},
  artistHotSongs: [],
  hotAlbums: [],
  artistMv: [],
  artistDesc: [],
  topArtist: []
})
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST_DETAIL:
      return state.set('artistDetail', action.artistDetail)
    case actionTypes.CHANGE_ARTIST_HOTSONGS:
      return state.set('artistHotSongs', action.artistHotSongs)
    case actionTypes.CHANGE_ARTIST_ALBUMS:
      return state.set('hotAlbums', action.hotAlbums)
    case actionTypes.CHANGE_ARTIST_MV:
      return state.set('artistMv', action.artistMv)
    case actionTypes.CHANGE_ARTIST_DESC:
      return state.set('artistDesc', action.artistDesc)
    case actionTypes.CHANGE_TOP_ARTIST:
      return state.set('topArtist', action.topArtist)
    default:
      return state
  }
}
