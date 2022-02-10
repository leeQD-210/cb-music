import { Map } from 'immutable'
import * as actionTypes from './constant'
const defaultState = Map({
  catList: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CAT_LIST:
      return state.set('catList', action.catList)
    default:
      return state
  }
}
export default reducer
