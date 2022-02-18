import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PlayListInfoWrapper } from './style'
import { handleTimeStamp } from '@/utils'
export default memo(function PlayListInfo() {
  const state = useSelector(
    (state) => ({
      playListDetail: state.getIn(['playList', 'playListDetail'])
    }),
    shallowEqual
  )
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
            {state.playListDetail.creator&&
              state.playListDetail.creator.nickname}
          </span>
          <span className="create_time">
            {state.playListDetail.createTime &&
              handleTimeStamp(state.playListDetail.createTime, 'year')}
            &nbsp;创建
          </span>
        </div>
        <div className="action_wrap">
          <i className="iconfont icon-playfill"></i>
          <i className="iconfont icon-add"></i>
          <span className="favor">
            <i className="iconfont icon-favor"></i>
            <span className="count">
              (
              {state.playListDetail.subscribedCount &&
                state.playListDetail.subscribedCount}
              )
            </span>
          </span>
          <span className="share">
            <i className="iconfont icon-share"></i>
            <span className="count">
              (
              {state.playListDetail.shareCount &&
                state.playListDetail.shareCount}
              )
            </span>
          </span>
          <i className="iconfont icon-download"></i>
          <span className="comment">
            <i className="iconfont icon-comment"></i>
            <span className="count">
              {' '}
              (
              {state.playListDetail.commentCount &&
                state.playListDetail.commentCount}
              )
            </span>
          </span>
        </div>
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
