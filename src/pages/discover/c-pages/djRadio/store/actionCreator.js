import * as actionTypes from './constant';
import {
  getDjCategory,
  getDjRecommend,
  getDjProgram,
  getProgramRecommend,
  getDjRecommendByType,
} from '@/api/djRadio';
const changeDjRadioCategory = (djCategory) => ({
  type: actionTypes.CHANGE_DJ_CATEGORY,
  djCategory,
});
// 推荐电台
const changeDjRecommend = (djRecommend) => ({
  type: actionTypes.CHANGE_DJ_RECOMMEND,
  djRecommend,
});
// 电台节目
const changeDjProgram = (djProgram) => ({
  type: actionTypes.CHANGE_DJ_PROGRAM,
  djProgram,
});
// 推荐节目
const changeDjRecommendProgram = (recommendProgram) => ({
  type: actionTypes.CHANGE_DJ_RECOMMEND_PROGRAM,
  recommendProgram,
});
// 音乐推荐类电台
const changeMusicRecommendDj = (musicRmdDj) => ({
  type: actionTypes.CHANGE_MUSIC_RECOMMEND_DJ,
  musicRmdDj,
});
// 情感类电台
const changeEmotionRmdDj = (emotionRmdDj) => ({
  type: actionTypes.CHANGE_EMOTION_RECOMMEND_DJ,
  emotionRmdDj,
});
// 脱口秀电台
const changeTalkShowRmdDj = (talkShowRmdDj) => ({
  type: actionTypes.CHANGE_TALKSHOW_RECOMMEND_DJ,
  talkShowRmdDj,
});
// 创作翻唱类电台
const changeCreateRmdDj = (createRmdDj) => ({
  type: actionTypes.CHANGE_CREATE_RECOMMEND_DJ,
  createRmdDj,
});
// 知识类电台
const changeKnowledgeRmdDj = (knowledgeRmdDj) => ({
  type: actionTypes.CHANGE_KNOWLEDGE_RECOMMEND_DJ,
  knowledgeRmdDj,
});
export const getDjCatelist = () => {
  return (dispatch) => {
    getDjCategory().then((res) => {
      dispatch(changeDjRadioCategory(res.categories));
    });
  };
};
export const getRecommend = () => {
  return (dispatch) => {
    getDjRecommend().then((res) => {
      dispatch(changeDjRecommend(res));
    });
  };
};
export const getProgram = (limit) => {
  return (dispatch) => {
    getDjProgram(limit).then((res) => {
      dispatch(changeDjProgram(res.toplist));
    });
  };
};
export const getDjRecommendProgram = () => {
  return (dispatch) => {
    getProgramRecommend().then((res) => {
      dispatch(changeDjRecommendProgram(res.programs));
    });
  };
};
export const getRecommendDj = (type) => {
  return (dispatch) => {
    getDjRecommendByType(type).then((res) => {
      switch (type) {
        case 2:
          dispatch(changeMusicRecommendDj(res.djRadios));
          break;
        case 3:
          dispatch(changeEmotionRmdDj(res.djRadios));
          break;
        case 8:
          dispatch(changeTalkShowRmdDj(res.djRadios));
          break;
        case 11:
          dispatch(changeKnowledgeRmdDj(res.djRadios));
          break;
        case 2001:
          dispatch(changeCreateRmdDj(res.djRadios));
          break;
        default:
          return '';
      }
    });
  };
};
