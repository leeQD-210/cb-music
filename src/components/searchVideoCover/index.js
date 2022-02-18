import React, { memo } from 'react'
import { VideoCoverWrapper } from './style'
import { handleDurationTime, handleCount } from '@/utils'
import { useHistory } from 'react-router-dom'
export default memo(function SearchVideoCover(props) {
  const { info } = props
  const history = useHistory()
  const handleClick = (id, type) => {
    history.push(`/discover/mvDetail/?id=${id}&type=${type}`)
  }
  return (
    <VideoCoverWrapper>
      <div
        onClick={(e) => {
          handleClick(info.vid, info.type)
        }}
      >
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
          {info.durationms === 0
            ? '00:00'
            : handleDurationTime(info.durationms)}
        </span>
        <div className="play_count">
          <i className="sprite_icon3 video"></i>
          <span>{info.playTime && handleCount(info.playTime)}</span>
        </div>
      </div>
    </VideoCoverWrapper>
  )
})
