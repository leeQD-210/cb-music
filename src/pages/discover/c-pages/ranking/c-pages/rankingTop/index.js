import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RankingTopWrapper } from './style';
import { handleTimeStamp } from '@/utils';
import { useDispatch } from 'react-redux';
import { addSongByTracks } from '@/pages/player/store/actionCreator';
export default memo(function RankingTop() {
  const state = useSelector((state) => {
    return { playListDetail: state.getIn(['ranking', 'playListDetail']) };
  }, shallowEqual);
  const dispatch = useDispatch();
  const addPlayList = (tracks) => {
    dispatch(addSongByTracks(tracks));
  };
  return (
    <RankingTopWrapper>
      <div className="img_box">
        <img src={state.playListDetail.coverImgUrl} alt="" className="img" />
        <a href="/abc" className="sprite_cover cover">
          {}
        </a>
      </div>
      <div className="detail">
        <span className="detail_name">{state.playListDetail.name}</span>
        <span className="detail_description">
          {state.playListDetail.description}
        </span>
        <span className="detail_update">
          <span>
            <i className="iconfont icon-clock"></i>
            <span>最近更新 :&nbsp;</span>
          </span>
          <span className="date">
            {handleTimeStamp(state.playListDetail.updateTime)}
          </span>
        </span>
        <div className="action_box">
          <i className="iconfont icon-playfill"></i>
          <i
            className="iconfont icon-add"
            onClick={(e) => {
              addPlayList(state.playListDetail.tracks);
            }}
          ></i>
          <span className="favor">
            <i className="iconfont icon-favor"></i>
            <span className="count">
              ({state.playListDetail.subscribedCount})
            </span>
          </span>
          <span className="share">
            <i className="iconfont icon-share"></i>
            <span className="count">({state.playListDetail.shareCount})</span>
          </span>
          <i className="iconfont icon-download"></i>
          <span className="comment">
            <i className="iconfont icon-comment"></i>
            <span className="count">
              {' '}
              ({state.playListDetail.commentCount})
            </span>
          </span>
        </div>
      </div>
    </RankingTopWrapper>
  );
});
