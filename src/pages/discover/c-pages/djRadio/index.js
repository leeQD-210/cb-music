import React, { memo, useEffect } from 'react';
import { CBDjRadioWrapper } from './style';
import DjCategory from './c-ptns/category';
import RecommendShow from './c-ptns/recommendShow';
import DjBrief from './c-ptns/djBrief';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  getProgram,
  getDjRecommendProgram,
  getRecommendDj,
} from './store/actionCreator';
export default memo(function CBDjRadio() {
  const state = useSelector(
    (state) => ({
      recommendProgram: state.getIn(['djRadio', 'recommendProgram']),
      djProgram: state.getIn(['djRadio', 'djProgram']),
      musicRmdDj: state.getIn(['djRadio', 'musicRmdDj']),
      knowledgeRmdDj: state.getIn(['djRadio', 'knowledgeRmdDj']),
      emotionRmdDj: state.getIn(['djRadio', 'emotionRmdDj']),
      createRmdDj: state.getIn(['djRadio', 'createRmdDj']),
      talkShowRmdDj: state.getIn(['djRadio', 'talkShowRmdDj']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDjRecommendProgram());
    dispatch(getProgram(10));
    dispatch(getRecommendDj(2));
    dispatch(getRecommendDj(3));
    dispatch(getRecommendDj(8));
    dispatch(getRecommendDj(11));
    dispatch(getRecommendDj(2001));
  }, [dispatch]);
  return (
    <CBDjRadioWrapper>
      <DjCategory></DjCategory>
      <div className="recommend_wrap">
        <RecommendShow
          info={state.recommendProgram}
          title={'推荐节目'}
        ></RecommendShow>
        <RecommendShow
          info={state.djProgram}
          title={'节目排行'}
        ></RecommendShow>
      </div>
      <DjBrief title={'情感'} info={state.emotionRmdDj.slice(0, 4)}></DjBrief>
      <DjBrief title={'音乐推荐'} info={state.musicRmdDj.slice(0, 4)}></DjBrief>
      <DjBrief
        title={'脱口秀'}
        info={state.talkShowRmdDj.slice(0, 4)}
      ></DjBrief>
      <DjBrief
        title={'创作与翻唱'}
        info={state.createRmdDj.slice(0, 4)}
      ></DjBrief>
      <DjBrief title={'知识'} info={state.knowledgeRmdDj.slice(0, 4)}></DjBrief>
    </CBDjRadioWrapper>
  );
});
