import * as actionTypes from './constants';
import { getTopBanner, getHotRecommend, getNewAlbums } from '@/api/recommend';
// 修改state轮播图
const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  banners: res.banners,
});
// 修改state中热门歌单
const changeHotRecommend = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});
// 修改新碟
const changeNewAlbums = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
});
// 获取轮播图
export const getBanner = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};
// 获取热门歌单
export const getRecommend = () => {
  return (dispatch) => {
    getHotRecommend().then((res) => {
      dispatch(changeHotRecommend(res));
    });
  };
};
// 获取新上碟
export const getAlbums = () => {
  return (dispatch) => {
    getNewAlbums(10,0).then((res) => {
      dispatch(changeNewAlbums(res));
    });
  };
};
