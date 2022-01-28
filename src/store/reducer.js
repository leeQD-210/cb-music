import { combineReducers } from 'redux-immutable'
import recommendReducer from '@/pages/discover/c-pages/recommend/store/reducer'
import playerReducer from '@/pages/player/store/reducer'
export default combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})
