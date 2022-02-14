import * as actionTypes from './constants';
import {
  getTopBanner,
  getHotRecommend,
  getAlbums,
  getTopList,
  getAllRank,
  getTopArtistList,
  getHotDj,
} from '@/api/recommend';
import { getNewestAlbums } from '@/api/albums';
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
const changeNewAlbums = (newAlbums) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums,
});
// 修改热门新碟
const changeHotAlbums = (hotAlbums) => ({
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums,
});
// 修改新碟当前区域
const changeAlbumsTotal = (newAlbumsTotal) => ({
  type: actionTypes.CHANGE_ALBUMS_TOTAL,
  newAlbumsTotal,
});
// 修改飙升榜列表
const changeUpList = (list) => ({
  type: actionTypes.CHANGE_UP_LIST,
  upInfo: { imgUrl: list.coverImgUrl, tracks: list.tracks },
});
// 修改原创榜列表
const changeOriginList = (list) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  originInfo: { imgUrl: list.coverImgUrl, tracks: list.tracks },
});
// 修改最新榜列表
const changeNewList = (list) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  newInfo: { imgUrl: list.coverImgUrl, tracks: list.tracks },
});
// 修改入驻歌手
const changeArtist = (res) => ({
  type: actionTypes.CHANGE_TOP_ARTIST,
  topArtist: res.artists,
});
// 修改热门主播
const changeHotDj = (res) => ({
  type: actionTypes.CHANGE_HOT_DJ,
  hotDj: res.data.list,
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
export const getNewAlbums = (limit, offset, type) => {
  return (dispatch) => {
    if (type === 'hot') {
      getNewestAlbums().then((res) => {
        dispatch(changeHotAlbums(res.albums.slice(0, 10)));
      });
    } else {
      getAlbums(limit, offset).then((res) => {
        dispatch(changeNewAlbums(res.albums));
        dispatch(changeAlbumsTotal(res.total));
      });
    }
  };
};
// 获取榜单歌曲
export const getList = (type) => {
  return async (dispatch) => {
    const { list } = await getAllRank();
    switch (type) {
      case 'up':
        getTopList(list[0].id).then((res) => {
          dispatch(changeUpList(res.playlist));
        });
        break;
      case 'new':
        getTopList(list[1].id).then((res) => {
          dispatch(changeNewList(res.playlist));
        });
        break;
      case 'origin':
        getTopList(list[2].id).then((res) => {
          dispatch(changeOriginList(res.playlist));
        });
        break;
      default:
        return '其他操作';
    }
  };
};
// 获取入驻歌手
export const getArtist = (limit, type) => {
  return (dispatch) => {
    getTopArtistList(limit, type).then((res) => {
      dispatch(changeArtist(res));
    });
  };
};
// 获取热门主播
export const getDj = (limit) => {
  return (dispatch) => {
    getHotDj(limit).then((res) => {
      dispatch(changeHotDj(res));
    });
  };
};
