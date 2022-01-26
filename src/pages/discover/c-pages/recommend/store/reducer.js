import { Map } from 'immutable';
import * as actionTypes from './constants';
const defaultState = Map({
  banners: [],
  hotRecommends: [],
  newAlbums: [],
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('banners', action.banners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums);
    default:
      return state;
  }
};
export default reducer;
