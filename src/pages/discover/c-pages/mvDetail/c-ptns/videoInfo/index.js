import React, { memo } from 'react'
import { shallowEqual } from 'react-redux'
import { useSelector } from 'react-redux'
import { VideoInfoWrapper } from './style'
import { handleTimeStamp } from '@/utils'
export default memo(function VideoInfo() {
  const state = useSelector(
    (state) => ({
      mvDetail: state.getIn(['mv', 'mvDetail'])
    }),
    shallowEqual
  )
  return (
    <VideoInfoWrapper>
      <div className="title">
        <span>mv 简介</span>
      </div>
      <div className="info">
        <p className="publish_time">
          <span className="tips">发布时间:</span>
          <span className="time">
            {/-/.test(state.mvDetail.publishTime)
              ? state.mvDetail.publishTime
              : handleTimeStamp(state.mvDetail.publishTime, 'year')}
          </span>
        </p>
        <p className="play_count">
          <span className="tips">播放次数:</span>
          <span className="count">
            {state.mvDetail.playCount || state.mvDetail.playTime}
          </span>
        </p>
      </div>
      <div className="desc">
        {state.mvDetail.desc || state.mvDetail.description || '哦豁呐'}
      </div>
    </VideoInfoWrapper>
  )
})
