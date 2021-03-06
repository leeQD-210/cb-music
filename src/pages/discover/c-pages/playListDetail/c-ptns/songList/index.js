import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { SongListWrapper } from './style'
import PlayListCover from '@/components/playListCover'
export default memo(function SongList() {
  const state = useSelector(
    (state) => ({
      playListDetail: state.getIn(['playList', 'playListDetail']),
      songList: state.getIn(['playList', 'songList'])
    }),
    shallowEqual
  )
  return (
    <SongListWrapper>
      <div className="list_top">
        <div className="top_left">
          <span className="top_title">歌曲列表</span>
          <span className="song_total">
            {state.playListDetail.trackCount && state.playListDetail.trackCount}
            首歌
          </span>
        </div>
        <div className="top_right">
          <span className="play_count">
            播放：&nbsp;&nbsp;
            <span className="count">
              {state.playListDetail.playCount && state.playListDetail.playCount}
            </span>
            次
          </span>
        </div>
      </div>
      <div className="list_title">
        <span className="index"></span>
        <span className="song_title">歌曲标题</span>
        <span className="duration">时长</span>
        <span className="artist">歌手</span>
        <span className="album">专辑</span>
      </div>
      <div className="list_content">
        {state.songList.length > 0 &&
          state.songList.map((item, index) => {
            return (
              <PlayListCover
                info={item}
                index={index + 1}
                key={item.id}
              ></PlayListCover>
            )
          })}
      </div>
    </SongListWrapper>
  )
})
