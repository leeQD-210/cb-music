import React, { memo, useEffect, useState } from 'react';
import { SimiSongListWrapper } from './style';
import { getSimiSongs } from '@/api/songDetail';
import { shallowEqual, useSelector } from 'react-redux';
import { addSong, changeSong } from '@/pages/player/store/actionCreator';
import { useDispatch } from 'react-redux';
export default memo(function SimiSongList() {
  const state = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong']),
    };
  }, shallowEqual);
  const [simiSongs, setSimiSongs] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getSimiSongs(state.currentSong.id).then((res) => {
      setSimiSongs(res.songs);
    });
  }, [state.currentSong]);
  const handlePlay = (id) => {
    dispatch(changeSong(id));
  };
  const handleAdd = (id) => {
    dispatch(addSong(id));
  };
  return (
    <SimiSongListWrapper>
      <div className="top">
        <span className="title">相似歌曲</span>
      </div>
      <div className="content">
        {simiSongs.length > 0 &&
          simiSongs.map((item) => {
            return (
              <div key={item.id} className="item">
                <img src={item.artists[0].picUrl} alt="" className="img" />
                <div className="song_info">
                  <div className="info">
                    <span className="name">{item.name}</span>
                    <span className="artist">{item.artists[0].name}</span>
                  </div>
                  <div className="action_wrap">
                    <i
                      className="iconfont icon-playfill"
                      onClick={(e) => {
                        handlePlay(item.id);
                      }}
                    ></i>
                    <i
                      className="iconfont icon-add"
                      onClick={(e) => {
                        handleAdd(item.id);
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </SimiSongListWrapper>
  );
});
