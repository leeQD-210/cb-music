import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ArtistListWrapper } from './style';
import { NavLink } from 'react-router-dom';
import ArtistCover from '@/components/artistCover';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getList, changeCurrentInitial } from '../../store/actionCreator';
import classnames from 'classnames';
import { generateAlphaList } from '@/utils';
export default memo(function ArtistList() {
  const dispatch = useDispatch();
  const alphaList = generateAlphaList() || [];
  const state = useSelector((state) => {
    return {
      artistList: state.getIn(['artist', 'artistList']),
      currentType: state.getIn(['artist', 'currentType']),
      currentArea: state.getIn(['artist', 'currentArea']),
      currentInitial: state.getIn(['artist', 'currentInitial']),
      currentPath: state.getIn(['artist', 'currentPath']),
      currentTitle: state.getIn(['artist', 'currentTitle']),
    };
  }, shallowEqual);
  useEffect(() => {
    dispatch(
      getList(
        state.currentType,
        state.currentArea,
        state.currentInitial,
        state.currentPath
      )
    );
  }, [dispatch, state.currentType, state.currentArea, state.currentInitial, state.currentPath]);
  const handleAlphaClick = (value) => {
    dispatch(changeCurrentInitial(value));
  };
  return (
    <ArtistListWrapper>
      <div className="recommend_artist">
        <div className="top">
          <span className="title">{state.currentTitle}</span>
        </div>
        {state.currentType !== -1 && (
          <div className="category">
            {alphaList.length > 0 &&
              alphaList.map((item) => {
                return (
                  <span
                    key={item.value}
                    className={classnames('alpha', {
                      current: state.currentInitial === item.value,
                    })}
                    onClick={(e) => {
                      handleAlphaClick(item.value);
                    }}
                  >
                    {item.name}
                  </span>
                );
              })}
          </div>
        )}
        <div className="content">
          {state.artistList.length > 0 &&
            state.currentTitle !== '入驻歌手' &&
            state.artistList.slice(0, 10).map((item, index) => {
              return <ArtistCover key={item.id} info={item}></ArtistCover>;
            })}
          {state.artistList.length > 0 &&
            state.currentTitle === '入驻歌手' &&
            state.artistList.map((item) => {
              return <ArtistCover key={item.id} info={item}></ArtistCover>;
            })}
          {state.artistList.length > 0 &&
            state.currentTitle !== '入驻歌手' &&
            state.artistList.slice(10, 100).map((item) => {
              return (
                <div className="name_wrap" key={item.id}>
                  <NavLink className="name" to={'/'}>
                    {item.name}
                  </NavLink>
                  <i className="iconfont icon-user"></i>
                </div>
              );
            })}
        </div>
      </div>
    </ArtistListWrapper>
  );
});
