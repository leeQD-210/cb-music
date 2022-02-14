import React, { memo } from 'react';
import { SongInfoWrapper } from './style';
import LyricPlay from '@/components/lyricPlay';
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import { changePlayStatus } from '@/pages/player/store/actionCreator';
import { useDispatch } from 'react-redux';
export default memo(function SongInfo() {
  const state = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong']),
      songCommentsTotal: state.getIn(['comment', 'songCommentsTotal']),
      isPlay: state.getIn(['player', 'isPlay']),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const changePlay = () => {
    dispatch(changePlayStatus(!state.isPlay));
  };
  return (
    <SongInfoWrapper>
      <div className="cover_wrap">
        <img
          src={require('@/assets/img/download0.png')}
          alt=""
          className="img"
        />
        <div className="mask sprite_cover"></div>
        <img src={require('@/assets/img/ohuo1.png')} alt="" className="ohuo" />
      </div>
      <div className="song_wrap">
        <div className="song_info">
          <span className="song_title">
            <i className="sprite_icon2 icon"></i>
            <span className="title">
              {state.currentSong && state.currentSong.name}
            </span>
          </span>
          <span className="song_artist">
            <span className="discription">歌手:</span>
            <span className="artist">
              {state.currentSong.ar[0]
                ? state.currentSong.ar[0].name
                : '哦豁呐'}
            </span>
          </span>
          <span className="song_album">
            <span className="discription">所属专辑：</span>
            <span className="album">
              {state.currentSong.al ? state.currentSong.al.name : '哦豁呐'}
            </span>
          </span>
          <div className="action_box">
            {state.isPlay ? (
              <PauseOutlined
                className="btn paused"
                onClick={(e) => changePlay()}
              />
            ) : (
              <CaretRightOutlined
                className="btn play"
                onClick={(e) => changePlay()}
              />
            )}
            <i className="iconfont icon-favor"></i>
            <i className="iconfont icon-share"></i>
            <i className="iconfont icon-download"></i>
            <span
              className="comment"
              onClick={(e) => (document.documentElement.scrollTop = 500)}
            >
              <i className="iconfont icon-comment"></i>
              <span className="comment_total">({state.songCommentsTotal})</span>
            </span>
          </div>
        </div>
        <div className="lyric_wrap">
          <LyricPlay></LyricPlay>
        </div>
      </div>
    </SongInfoWrapper>
  );
});
