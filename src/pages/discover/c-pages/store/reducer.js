import * as actionTypes from './constant';
import { Map } from 'immutable';
const defaultState = Map({
  songComments: [],
  songHotComments: [],
  songCommentsTotal: 0,
});
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_COMMENT:
      return state.set('songComments', action.songComments);
    case actionTypes.CHANGE_SONG_HOT_COMMENT:
      return state.set('songHotComments', action.songHotComments);
    case actionTypes.CHANGE_SONG_COMMENT_TOTAL:
      return state.set('songCommentsTotal', action.songCommentsTotal);
    default:
      return state;
  }
}
