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
  videosTotal: 0
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
    default:
      return state
  }
}
