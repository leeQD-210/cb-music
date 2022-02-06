import * as actionTypes from './constant';
import { Map } from 'immutable';
const defaultState = Map({
  searchSongs: [],
  total: 0,
});
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_SONGS:
      return state.set('searchSongs', action.searchSongs);
    case actionTypes.CHANGE_SEARCH_TOTAL:
      return state.set('total', action.total);
    default:
      return state;
  }
}
