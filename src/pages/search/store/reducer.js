import * as actionTypes from './constant'
import { Map } from 'immutable'
const defaultState = Map({
  searchSongs: [],
  songsTotal: 0,
  searchArtists: [],
  artistsTotal: 0,
  searchAlbums: [],
  albumsTotal: 0,
  searchVideos: [],
  videosTotal: 0,
  searchLyricSongs: [],
  lyricSongsTotal: 0,
  searchSongsWrap: [],
  songsWrapTotal: 0,
  searchDj: [],
  djTotal: 0,
  searchUser: [],
  userTotal: 0
})
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_SONGS:
      return state.set('searchSongs', action.searchSongs)
    case actionTypes.CHANGE_SEARCH_SONGSTOTAL:
      return state.set('songsTotal', action.songsTotal)
    case actionTypes.CHANGE_SEARCH_ARTISTS:
      return state.set('searchArtists', action.searchArtists)
    case actionTypes.CHANGE_SEARCH_ARTISTSTOTAL:
      return state.set('artistsTotal', action.artistsTotal)
    case actionTypes.CHANGE_SEARCH_ALBUMS:
      return state.set('searchAlbums', action.searchAlbums)
    case actionTypes.CHANGE_SEARCH_ALBUMSTOTAL:
      return state.set('albumsTotal', action.albumsTotal)
    case actionTypes.CHANGE_SEARCH_VIDEOS:
      return state.set('searchVideos', action.searchVideos)
    case actionTypes.CHANGE_SEARCH_VIDEOSTOTAL:
      return state.set('videosTotal', action.videosTotal)
    case actionTypes.CHANGE_SEARCH_LYRICS:
      return state.set('searchLyricSongs', action.searchLyricSongs)
    case actionTypes.CHANGE_SEARCH_LYRICSTOTAL:
      return state.set('lyricSongsTotal', action.lyricSongsTotal)
    case actionTypes.CHANGE_SEARCH_SONGSWRAP:
      return state.set('searchSongsWrap', action.searchSongsWrap)
    case actionTypes.CHANGE_SEARCH_SONGSWRAP_TOTAL:
      return state.set('songsWrapTotal', action.songsWrapTotal)
    case actionTypes.CHANGE_SEARCH_DJ:
      return state.set('searchDj', action.searchDj)
    case actionTypes.CHANGE_SEARCH_DJTOTAL:
      return state.set('djTotal', action.djTotal)
    case actionTypes.CHANGE_SEARCH_USER:
      return state.set('searchUser', action.searchUser)
    case actionTypes.CHANGE_SEARCH_USERTOTAL:
      return state.set('userTotal', action.userTotal)
    default:
      return state
  }
}
