import * as actionTypes from './constant';
import { getHotArtistList, getArtistList } from '@/api/artist';
const changeArtistList = (artistList) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList,
});
export const changeCurrentType = (currentType) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType,
});
export const changeCurrentArea = (currentArea) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea,
});
export const changeCurrentInitial = (currentInitial) => ({
  type: actionTypes.CHANGE_CURRENT_INITIAL,
  currentInitial,
});
export const changeCurrentPath = (currentPath) => ({
  type: actionTypes.CHANGE_CURRENT_PATH,
  currentPath,
});
export const changeCurrentTitle = (currentTitle) => ({
  type: actionTypes.CHANGE_CURRENT_TITLE,
  currentTitle,
});
export const getList = (type, area, initital = -1, url) => {
  return (dispatch) => {
    if (area === -1) {
      getHotArtistList(url).then((res) => {
        dispatch(changeArtistList(res.artists));
      });
    } else {
      getArtistList(type, area, initital).then((res) => {
        dispatch(changeArtistList(res.artists));
      });
    }
  };
};
