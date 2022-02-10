import { Map } from 'immutable';
import * as actionTypes from './constant';
const defaultState = Map({
  catList: [],
  playList: [],
  currentCat: '全部',
  playListTotal: 0,
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CAT_LIST:
      return state.set('catList', action.catList);
    case actionTypes.CHANGE_TOP_PLAYLIST:
      return state.set('playList', action.playList);
    case actionTypes.CHANGE_CURRENT_CAT:
      return state.set('currentCat', action.cat);
    case actionTypes.CHANGE_PLAYLIST_TOTAL:
      return state.set('playListTotal', action.playListTotal);
    default:
      return state;
  }
};
export default reducer;
