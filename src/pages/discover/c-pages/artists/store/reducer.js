import { Map } from 'immutable';
import * as actionTypes from './constant';
const defaultState = Map({
  currentType: 1,
  currentArea: -1,
  currentInitial: -1,
  artistList: [],
  currentPath: '/top/artists?limit=100',
  currentTitle: '推荐歌手',
});
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set('artistList', action.artistList);
    case actionTypes.CHANGE_CURRENT_AREA:
      return state.set('currentArea', action.currentArea);
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set('currentType', action.currentType);
    case actionTypes.CHANGE_CURRENT_INITIAL:
      return state.set('currentInitial', action.currentInitial);
    case actionTypes.CHANGE_CURRENT_PATH:
      return state.set('currentPath', action.currentPath);
    case actionTypes.CHANGE_CURRENT_TITLE:
      return state.set('currentTitle', action.currentTitle);
    default:
      return state;
  }
}
