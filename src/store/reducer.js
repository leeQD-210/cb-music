import { combineReducers } from 'redux-immutable'
import recommendReducer from '@/pages/discover/c-pages/recommend/store/reducer'
import playerReducer from '@/pages/player/store/reducer'
import searchReducer from '@/pages/search/store/reducer'
import rankingReducer from '@/pages/discover/c-pages/ranking/store/reducer'
export default combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  search: searchReducer,
  ranking: rankingReducer
})
