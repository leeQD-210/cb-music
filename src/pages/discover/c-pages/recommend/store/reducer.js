import { Map } from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
  banners: [],
  hotRecommends: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('banners', action.banners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    default:
      return state
  }
}
export default reducer
