import React, { memo } from 'react'
import { VideoCoverWrapper } from './style'
import { handleDurationTime,handleCount} from '@/utils'
export default memo(function SearchVideoCover(props) {
  const { info } = props
  return (
    <VideoCoverWrapper>
      <img src={info && info.coverUrl} alt="" className="img" />
      <div className="info">
        <div className="title">
          {info.type === 0 && <i className="sprite_icon3 icon_mv"></i>}
          <span className="name">{info.title}</span>
        </div>
        <div className="creator">
          {info.type === 0 && <span className="by">by</span>}
          <span className="creator_name">{info.creator[0].userName}</span>
        </div>
      </div>
      <span className="duration">
        {info.durationms === 0 ? '00:00' : handleDurationTime(info.durationms)}
      </span>
      <div className="play_count">
        <i className="sprite_icon3 video"></i>
        <span>{info.playTime&&handleCount(info.playTime)}</span>
      </div>
    </VideoCoverWrapper>
  )
})
