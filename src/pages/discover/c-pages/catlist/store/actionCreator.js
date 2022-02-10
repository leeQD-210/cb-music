import { getCatList, getPlayListByCat } from '@/api/catlist';
import * as actionTypes from './constant';
import { handleCatListData } from '@/utils';
const changeCatList = (catList) => ({
  type: actionTypes.CHANGE_CAT_LIST,
  catList,
});
const changeTopPlayList = (playList) => ({
  type: actionTypes.CHANGE_TOP_PLAYLIST,
  playList,
});
const changePlayListTotal = (total) => ({
  type: actionTypes.CHANGE_PLAYLIST_TOTAL,
  playListTotal: total,
});
export const changeCurrentCat = (cat) => ({
  type: actionTypes.CHANGE_CURRENT_CAT,
  cat,
});
export const getList = () => {
  return (dispatch) => {
    getCatList().then((res) => {
      console.log(handleCatListData(res));
      dispatch(changeCatList(handleCatListData(res)));
    });
  };
};
export const getPlayList = (order, cat, limit, pageNo) => {
  return (dispatch) => {
    getPlayListByCat(order, cat, limit, pageNo).then((res) => {
      dispatch(changeTopPlayList(res.playlists));
      dispatch(changePlayListTotal(res.total));
    });
  };
};
