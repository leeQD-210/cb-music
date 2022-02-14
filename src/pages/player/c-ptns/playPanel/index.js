import React, { memo, useRef, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { PlayPanelWrapper } from './style';
import { handleDurationTime } from '@/utils';
import { changeSongIndex, deleteSong } from '../../store/actionCreator';
import LyricPlay from '@/components/lyricPlay';
import { message } from 'antd';
export default memo(function PlayPanel() {
  const state = useSelector((state) => {
    return {
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
      currentSong: state.getIn(['player', 'currentSong']),
      currentLyric: state.getIn(['player', 'currentLyric']),
      lyricIndex: state.getIn(['player', 'lyricIndex']),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const clickSongItem = (index) => {
    //   console.log(111)
    dispatch(changeSongIndex(index));
  };
  const clickFavor = (e) => {
    e.stopPropagation();
    message.error('功能尚未开发，别瞎点');
  };
  const clickShare = (e) => {
    e.stopPropagation();
    message.error('功能尚未开发，别瞎点');
  };
  const clickDownload = (e) => {
    e.stopPropagation();
    message.error('功能尚未开发，别瞎点');
  };
  const handleDeleteSong = (index) => {
    dispatch(deleteSong('single', index));
  };
  return (
    <PlayPanelWrapper>
      <div className="playlist">
        <div className="titleBox">
          <span className="title">{`播放列表:${state.playList.length}`}</span>
          <div className="action">
            <span
              className="favor_all"
              onClick={(e) => {
                message.error('功能尚未开发，别瞎点');
              }}
            >
              <i className="iconfont icon-favor"></i>
              <span>收藏全部</span>
            </span>
            <span
              className="delete_all"
              onClick={(e) => {
                dispatch(deleteSong('all'));
              }}
            >
              <i className="iconfont icon-delete"></i>
              <span>清除</span>
            </span>
          </div>
        </div>
        <div className="play_content">
          {state.playList.map((item, index) => {
            return (
              <div
                className="song_item"
                key={item.id + item.name}
                onClick={(e) => clickSongItem(index)}
              >
                <span className="song_name">
                  {state.currentSongIndex === index && (
                    <i className="iconfont icon-playfill"></i>
                  )}
                  <span>{item && item.name}</span>
                </span>
                <div className="action_box">
                  <i className="iconfont icon-favor" onClick={clickFavor}></i>
                  <i className="iconfont icon-share" onClick={clickShare}></i>
                  <i
                    className="iconfont icon-download"
                    onClick={clickDownload}
                  ></i>
                  <i
                    className="iconfont icon-delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteSong(index);
                    }}
                  ></i>
                </div>
                <div className="item_info">
                  <span className="artist_name">
                    {item.ar[0] && item.ar[0].name}
                  </span>
                  <span>{handleDurationTime(item.dt)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="playinfo">
        <div className="titleBox">
          <span className="title">
            {state.currentSong && state.currentSong.name}
          </span>
          <span>{state.currentSong.ar && state.currentSong.ar[0].name}</span>
        </div>
        <LyricPlay></LyricPlay>
      </div>
      {state.playList.length === 0 && (
        <div className="empty">播放列表空空如也~~，请前往添加歌曲！</div>
      )}
    </PlayPanelWrapper>
  );
});
