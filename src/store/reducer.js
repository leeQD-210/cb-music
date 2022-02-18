import { combineReducers } from 'redux-immutable'
import recommendReducer from '@/pages/discover/c-pages/recommend/store/reducer'
import playerReducer from '@/pages/player/store/reducer'
import searchReducer from '@/pages/search/store/reducer'
import rankingReducer from '@/pages/discover/c-pages/ranking/store/reducer'
import catListReducer from '@/pages/discover/c-pages/catlist/store/reducer'
import djRadioReducer from '@/pages/discover/c-pages/djRadio/store/reducer'
import artistReducer from '@/pages/discover/c-pages/artists/store/reducer'
import commentReducer from '@/pages/discover/c-pages/store/reducer'
import mvReducer from '@/pages/discover/c-pages/mvDetail/store/reducer'
import playListReducer from '@/pages/discover/c-pages/playListDetail/store/reducer'
export default combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  search: searchReducer,
  ranking: rankingReducer,
  catlist: catListReducer,
  djRadio: djRadioReducer,
  artist: artistReducer,
  comment: commentReducer,
  mv: mvReducer,
  playList: playListReducer
})
