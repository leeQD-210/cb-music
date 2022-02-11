import { Map } from 'immutable'
import * as actionTypes from './constant'
const defaultState = Map({
  djCategory: [],
  djRecommend: [],
  djProgram: [],
  recommendProgram: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DJ_CATEGORY:
      return state.set('djCategory', action.djCategory)
    case actionTypes.CHANGE_DJ_RECOMMEND:
      return state.set('djRecommend', action.djRecommend)
    case actionTypes.CHANGE_DJ_PROGRAM:
      return state.set('djProgram', action.djProgram)
    case actionTypes.CHANGE_DJ_RECOMMEND_PROGRAM:
      return state.set('recommendProgram', action.recommendProgram)
    default:
      return state
  }
}
export default reducer
