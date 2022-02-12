import { Map } from 'immutable';
import * as actionTypes from './constant';
const defaultState = Map({
  djCategory: [],
  djRecommend: [],
  djProgram: [],
  recommendProgram: [],
  musicRmdDj: [],
  knowledgeRmdDj: [],
  createRmdDj: [],
  emotionRmdDj: [],
  talkShowRmdDj: [],
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DJ_CATEGORY:
      return state.set('djCategory', action.djCategory);
    case actionTypes.CHANGE_DJ_RECOMMEND:
      return state.set('djRecommend', action.djRecommend);
    case actionTypes.CHANGE_DJ_PROGRAM:
      return state.set('djProgram', action.djProgram);
    case actionTypes.CHANGE_DJ_RECOMMEND_PROGRAM:
      return state.set('recommendProgram', action.recommendProgram);
    case actionTypes.CHANGE_MUSIC_RECOMMEND_DJ:
      return state.set('musicRmdDj', action.musicRmdDj);
    case actionTypes.CHANGE_CREATE_RECOMMEND_DJ:
      return state.set('createRmdDj', action.createRmdDj);
    case actionTypes.CHANGE_KNOWLEDGE_RECOMMEND_DJ:
      return state.set('knowledgeRmdDj', action.knowledgeRmdDj);
    case actionTypes.CHANGE_EMOTION_RECOMMEND_DJ:
      return state.set('emotionRmdDj', action.emotionRmdDj);
    case actionTypes.CHANGE_TALKSHOW_RECOMMEND_DJ:
      return state.set('talkShowRmdDj', action.talkShowRmdDj);
    default:
      return state;
  }
};
export default reducer;
