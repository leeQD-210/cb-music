import * as actionTypes from './constant'
import { getSearchSongs } from '@/api/search'
const changeSearchSongs = (songs) => ({
  type: actionTypes.CHANGE_SEARCH_SONGS,
  searchSongs: songs
})
const changeSongCount = (total) => ({
  type: actionTypes.CHANGE_SEARCH_SONGSTOTAL,
  songsTotal: total
})
const changeSearchArtists = (artists) => ({
  type: actionTypes.CHANGE_SEARCH_ARTISTS,
  searchArtists: artists
})
const changeArtistsTotal = (total) => ({
  type: actionTypes.CHANGE_SEARCH_ARTISTSTOTAL,
  artistsTotal: total
})
const changeSearchAlbums = (albums) => ({
  type: actionTypes.CHANGE_SEARCH_ALBUMS,
  searchAlbums: albums
})
const changeAlbumsTotal = (total) => ({
  type: actionTypes.CHANGE_SEARCH_ALBUMSTOTAL,
  albumsTotal: total
})
const changeSearchVideos = (videos) => ({
  type: actionTypes.CHANGE_SEARCH_VIDEOS,
  searchVideos: videos
})
const changeVideosTotal = (total) => ({
  type: actionTypes.CHANGE_SEARCH_VIDEOSTOTAL,
  videosTotal: total
})
export const searchKeywords = (keywords, pageNo = 1, limit, type) => {
  return (dispatch) => {
    getSearchSongs(keywords, pageNo, limit, type).then((res) => {
      switch (type) {
        case 1:
          dispatch(changeSearchSongs(res.result.songs))
          dispatch(changeSongCount(res.result.songCount))
          break
        case 10:
          dispatch(changeSearchAlbums(res.result.albums))
          dispatch(changeAlbumsTotal(res.result.albumCount))
          break
        case 100:
          dispatch(changeSearchArtists(res.result.artists))
          dispatch(changeArtistsTotal(res.result.artistCount))
          break
        case 1014:
          dispatch(changeSearchVideos(res.result.videos))
          dispatch(changeVideosTotal(res.result.videoCount))
          break
        default:
          return
      }
    })
  }
}
