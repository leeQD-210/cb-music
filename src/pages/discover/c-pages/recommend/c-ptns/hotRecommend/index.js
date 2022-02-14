import React, { memo, useCallback, useEffect } from 'react';
import { HotRecommendWrapper, MainWrapper } from './style';
import { useHistory } from 'react-router-dom';
import RecommendNav from '@/components/recommendNav';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getRecommend } from '../../store/actionCreator';
import SongListCover from '@/components/songListCover';
import { changeCurrentCat } from '@/pages/discover/c-pages/catlist/store/actionCreator';
export default memo(function HotRecommend() {
  const state = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);
  console.log(state);
  const history = useHistory();
  const onKeywordsClick = useCallback(
    (keyword) => {
      history.push('/discover/catlist');
      dispatch(changeCurrentCat(keyword));
    },
    [history, dispatch]
  );
  return (
    <HotRecommendWrapper>
      <RecommendNav
        title={'热门推荐'}
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink={'/discover/catlist'}
        keywordsClick={onKeywordsClick}
      ></RecommendNav>
      <MainWrapper>
        {state.hotRecommends.map((item) => {
          return <SongListCover info={item} key={item.id}></SongListCover>;
        })}
      </MainWrapper>
    </HotRecommendWrapper>
  );
});
