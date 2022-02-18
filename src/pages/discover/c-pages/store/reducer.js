import * as actionTypes from './constant'
import { Map } from 'immutable'
const defaultState = Map({
  songComments: [],
  songHotComments: [],
  songCommentsTotal: 0,
  mvComments: [],
  mvHotComments: [],
  mvCommentsTotal: 0
})
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_COMMENT:
      return state.set('songComments', action.songComments)
    case actionTypes.CHANGE_SONG_HOT_COMMENT:
      return state.set('songHotComments', action.songHotComments)
    case actionTypes.CHANGE_SONG_COMMENT_TOTAL:
      return state.set('songCommentsTotal', action.songCommentsTotal)
    case actionTypes.CHANGE_MV_COMMENT:
      return state.set('mvComments', action.mvComments)
    case actionTypes.CHANGE_MV_HOT_COMMENT:
      return state.set('mvHotComments', action.mvHotComments)
    case actionTypes.CHANGE_MV_COMMENT_TOTAL:
      return state.set('mvCommentsTotal', action.mvCommentsTotal)
    default:
      return state
  }
}
