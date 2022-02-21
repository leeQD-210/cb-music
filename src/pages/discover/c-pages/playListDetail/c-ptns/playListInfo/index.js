import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PlayListInfoWrapper } from './style'
import { handleTimeStamp } from '@/utils'
import { addSongByTracks } from '@/pages/player/store/actionCreator'
import ActionBar from '@/components/actionBar'
export default memo(function PlayListInfo() {
  const state = useSelector(
    (state) => ({
      playListDetail: state.getIn(['playList', 'playListDetail']),
      songList: state.getIn(['playList', 'songList'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const addPlayList = useCallback(() => {
    dispatch(addSongByTracks(state.songList))
  }, [dispatch, state.songList])
  return (
    <PlayListInfoWrapper>
      <div className="img_wrap">
        <img
          src={
            state.playListDetail.coverImgUrl && state.playListDetail.coverImgUrl
          }
          alt=""
          className="img"
        />
      </div>
      <div className="info_wrap">
        <div className="title_wrap">
          <i className="sprite_icon2 icon"></i>
          <span className="title">
            {state.playListDetail.name && state.playListDetail.name}
          </span>
        </div>
        <div className="creator_wrap">
          <img
            src={
              state.playListDetail.creator &&
              state.playListDetail.creator.avatarUrl
            }
            alt=""
            className="avatar"
          />
          <span className="name">
            {state.playListDetail.creator &&
              state.playListDetail.creator.nickname}
          </span>
          <span className="create_time">
            {state.playListDetail.createTime &&
              handleTimeStamp(state.playListDetail.createTime, 'year')}
            &nbsp;创建
          </span>
        </div>
        <ActionBar
          subCount={state.playListDetail.subscribedCount}
          shareCount={state.playListDetail.shareCount}
          commentCount={state.playListDetail.commentCount}
          handleAdd={addPlayList}
        ></ActionBar>
        <div className="tips_wrap">
          <span className="tips">标签：</span>
          {state.playListDetail.tags &&
            state.playListDetail.tags.map((item, index) => {
              return (
                <span className="tips_item" key={index}>
                  {item}
                </span>
              )
            })}
        </div>
        <div className="desc_wrap">
          <span className="desc">介绍：</span>
          <span className="content">
            {state.playListDetail.description &&
              state.playListDetail.description}
          </span>
        </div>
      </div>
    </PlayListInfoWrapper>
  )
})
