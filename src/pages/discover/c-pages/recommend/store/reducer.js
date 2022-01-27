import { Map } from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  originInfo: [],
  newInfo: [],
  upInfo: [],
  topArtist: [],
  hotDj: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('banners', action.banners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set('originInfo', action.originInfo)
    case actionTypes.CHANGE_NEW_LIST:
      return state.set('newInfo', action.newInfo)
    case actionTypes.CHANGE_UP_LIST:
      return state.set('upInfo', action.upInfo)
    case actionTypes.CHANGE_TOP_ARTIST:
      return state.set('topArtist', action.topArtist)
    case actionTypes.CHANGE_HOT_DJ:
      return state.set('hotDj', action.hotDj)
    default:
      return state
  }
}
export default reducer
