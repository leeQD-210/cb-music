import React, { memo } from 'react'
import { SongListWrapper } from './style'
export default memo(function SongList() {
  return (
    <SongListWrapper>
      <div className="top">
        <div className="left">
          <span className="top_title">歌曲列表</span>
          <span>{}首歌</span>
        </div>
        <div className="right">
          <span className="play_count">
            播放：&nbsp;&nbsp;<span className="count">{456}</span>次
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
      <div className='list_content'></div>
    </SongListWrapper>
  )
})
