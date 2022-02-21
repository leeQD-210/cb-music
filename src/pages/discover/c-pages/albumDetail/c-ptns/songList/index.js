import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { AlbumSongListWrapper } from './style'
import PlayListCover from '@/components/playListCover'
export default memo(function AlbumSongList() {
  const state = useSelector(
    (state) => ({
      albumDetail: state.getIn(['album', 'albumDetail']),
      albumSongs: state.getIn(['album', 'albumSongs'])
    }),
    shallowEqual
  )
  return (
    <AlbumSongListWrapper>
      <div className="list_top">
        <div className="top_left">
          <span className="top_title">歌曲列表</span>
          <span className="song_total">
            {state.albumDetail.songs && state.albumDetail.songs.length}
            首歌
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
        {state.albumSongs.length > 0 &&
          state.albumSongs.map((item, index) => {
            return (
              <PlayListCover
                info={item}
                index={index + 1}
                key={item.id}
              ></PlayListCover>
            )
          })}
      </div>
    </AlbumSongListWrapper>
  )
})
