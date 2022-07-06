import * as actionTypes from './constant'
import {
  getArtistDetail,
  getArtistAlbums,
  getArtistMv,
  getArtistDesc,
  getTopArtist
} from '@/api/artist'
const changeArtistDetail = (artistDetail) => ({
  type: actionTypes.CHANGE_ARTIST_DETAIL,
  artistDetail
})
const changeArtistHotSongs = (artistHotSongs) => ({
  type: actionTypes.CHANGE_ARTIST_HOTSONGS,
  artistHotSongs
})
const changeArtistAlbums = (hotAlbums) => ({
  type: actionTypes.CHANGE_ARTIST_ALBUMS,
  hotAlbums
})
const changeArtistMv = (artistMv) => ({
  type: actionTypes.CHANGE_ARTIST_MV,
  artistMv
})
const changeArtistDesc = (artistDesc) => ({
  type: actionTypes.CHANGE_ARTIST_DESC,
  artistDesc
})
const changeTopArtist = (topArtist) => ({
  type: actionTypes.CHANGE_TOP_ARTIST,
  topArtist
})
export const getArtistDetailAction = (id) => {
  return (dispatch) => {
    getArtistDetail(id).then((res) => {
      dispatch(changeArtistDetail(res.artist))
      dispatch(changeArtistHotSongs(res.hotSongs))
    })
  }
}
export const getArtistAlbumsAction = (id, pageNo, limit) => {
  return (dispatch) => {
    getArtistAlbums(id, pageNo, limit).then((res) => {
      dispatch(changeArtistAlbums(res.hotAlbums))
    })
  }
}
export const getArtistMvAction = (id) => {
  return (dispatch) => {
    getArtistMv(id).then((res) => {
      dispatch(changeArtistMv(res.mvs))
    })
  }
}
export const getArtistDescAction = (id) => {
  return (dispatch) => {
    getArtistDesc(id).then((res) => {
      dispatch(changeArtistDesc(res.introduction))
    })
  }
}
export const getTopArtistAction = (limit) => {
  return (dispatch) => {
    getTopArtist(limit).then((res) => {
      dispatch(changeTopArtist(res.artists))
    })
  }
}
