import * as actionTypes from './constant';
import { getSearchSongs } from '@/api/search';
const changeSearchSongs = (songs) => ({
  type: actionTypes.CHANGE_SEARCH_SONGS,
  searchSongs: songs,
});
const changeSongCount = (total) => ({
  type: actionTypes.CHANGE_SEARCH_TOTAL,
  total,
});
export const searchSongs = (keywords, pageNo = 1) => {
  return (dispatch) => {
    getSearchSongs(keywords, pageNo).then((res) => {
      dispatch(changeSearchSongs(res.result.songs));
      dispatch(changeSongCount(res.result.songCount));
    });
  };
};
