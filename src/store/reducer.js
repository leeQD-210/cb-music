import { combineReducers } from 'redux-immutable'
import recommendReducer from '@/pages/discover/c-pages/recommend/store/reducer'
import playerReducer from '@/pages/player/store/reducer'
import searchReducer from '@/pages/search/store/reducer'
import rankingReducer from '@/pages/discover/c-pages/ranking/store/reducer'
import catListReducer from '@/pages/discover/c-pages/catlist/store/reducer'
import djRadioReducer from '@/pages/discover/c-pages/djRadio/store/reducer'
export default combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  search: searchReducer,
  ranking: rankingReducer,
  catlist: catListReducer,
  djRadio: djRadioReducer
})
