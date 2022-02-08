import * as actionTypes from './constant'
import { getSearchSongs } from '@/api/search'
// 单曲
const changeSearchSongs = (songs) => ({
  type: actionTypes.CHANGE_SEARCH_SONGS,
  searchSongs: songs
})
const changeSongCount = (total) => ({
  type: actionTypes.CHANGE_SEARCH_SONGSTOTAL,
  songsTotal: total
})
// 歌手
const changeSearchArtists = (artists) => ({
  type: actionTypes.CHANGE_SEARCH_ARTISTS,
  searchArtists: artists
})
const changeArtistsTotal = (total) => ({
  type: actionTypes.CHANGE_SEARCH_ARTISTSTOTAL,
  artistsTotal: total
})
// 专辑
const changeSearchAlbums = (albums) => ({
  type: actionTypes.CHANGE_SEARCH_ALBUMS,
  searchAlbums: albums
})
const changeAlbumsTotal = (total) => ({
  type: actionTypes.CHANGE_SEARCH_ALBUMSTOTAL,
  albumsTotal: total
})
// MV
const changeSearchVideos = (videos) => ({
  type: actionTypes.CHANGE_SEARCH_VIDEOS,
  searchVideos: videos
})
const changeVideosTotal = (total) => ({
  type: actionTypes.CHANGE_SEARCH_VIDEOSTOTAL,
  videosTotal: total
})
// 歌词
const changeSearchLyrics = (songs) => ({
  type: actionTypes.CHANGE_SEARCH_LYRICS,
  searchLyricSongs: songs
})
const changeLyricsTotal = (total) => ({
  type: actionTypes.CHANGE_SEARCH_LYRICSTOTAL,
  lyricSongsTotal: total
})
// 歌单
const changeSearchSongsWrap = (songsWrap) => ({
  type: actionTypes.CHANGE_SEARCH_SONGSWRAP,
  searchSongsWrap: songsWrap
})
const changeSongsWrapTotal = (total) => ({
  type: actionTypes.CHANGE_SEARCH_SONGSWRAP_TOTAL,
  songsWrapTotal: total
})
// 声音主播
const changeSearchDj = (dj) => ({
  type: actionTypes.CHANGE_SEARCH_DJ,
  searchDj: dj
})
// 用户
const changeSearchUser = (user) => ({
  type: actionTypes.CHANGE_SEARCH_USER,
  searchUser: user
})
const changeUserTotal = (total) => ({
  type: actionTypes.CHANGE_SEARCH_USERTOTAL,
  userTotal: total
})
export const searchKeywords = (keywords, pageNo = 1, limit, type) => {
  return (dispatch) => {
    getSearchSongs(keywords, pageNo, limit, type).then((res) => {
      switch (type) {
        case 1:
          if (res.result && res.result.songs && res.result.songCount) {
            dispatch(changeSearchSongs(res.result.songs))
            dispatch(changeSongCount(res.result.songCount))
          } else {
            dispatch(changeSearchSongs([]))
            dispatch(changeSongCount(0))
          }
          break
        case 10:
          if (res.result && res.result.albums && res.result.albumCount) {
            dispatch(changeSearchAlbums(res.result.albums))
            dispatch(changeAlbumsTotal(res.result.albumCount))
          } else {
            dispatch(changeSearchAlbums([]))
            dispatch(changeAlbumsTotal(0))
          }
          break
        case 100:
          if (res.result && res.result.artists && res.result.artistCount) {
            dispatch(changeSearchArtists(res.result.artists))
            dispatch(changeArtistsTotal(res.result.artistCount))
          } else {
            dispatch(changeSearchArtists([]))
            dispatch(changeArtistsTotal(0))
          }
          break
        case 1000:
          if (res.result && res.result.playlists && res.result.playlistCount) {
            dispatch(changeSearchSongsWrap(res.result.playlists))
            dispatch(changeSongsWrapTotal(res.result.playlistCount))
          } else {
            dispatch(changeSearchSongsWrap([]))
            dispatch(changeSongsWrapTotal(0))
          }
          break
        case 1006:
          if (res.result && res.result.songs && res.result.songCount) {
            const result = res.result.songs.map((item) => {
              item.lyrics.txt = item.lyrics.txt.split('\n')
              return item
            })
            dispatch(changeSearchLyrics(result))
            dispatch(changeLyricsTotal(res.result.songCount))
          } else {
            dispatch(changeSearchLyrics([]))
            dispatch(changeLyricsTotal(0))
          }
          break
        case 1009:
          if (res.result && res.result.djRadios) {
            dispatch(changeSearchDj(res.result.djRadios))
          } else {
            dispatch(changeSearchDj([]))
          }
          break
        case 1002:
          if (
            res.result &&
            res.result.userprofiles &&
            res.result.userprofileCount
          ) {
            dispatch(changeSearchUser(res.result.userprofiles))
            dispatch(changeUserTotal(res.result.userprofileCount))
          } else {
            dispatch(changeSearchUser([]))
            dispatch(changeUserTotal(0))
          }
          break
        case 1014:
          if (res.result && res.result.videos && res.result.videoCount) {
            dispatch(changeSearchVideos(res.result.videos))
            dispatch(changeVideosTotal(res.result.videoCount))
          } else {
            dispatch(changeSearchVideos([]))
            dispatch(changeVideosTotal(0))
          }
          break
        default:
          return
      }
    })
  }
}
