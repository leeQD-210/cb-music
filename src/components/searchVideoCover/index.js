import React, { memo } from 'react'
import { VideoCoverWrapper } from './style'
import { handleDurationTime, handleCount } from '@/utils'
import { useHistory } from 'react-router-dom'
export default memo(function SearchVideoCover(props) {
  const { info, marginLeft, lineNums } = props
  const history = useHistory()
  const handleClick = (id, type) => {
    history.push(`/discover/mvDetail/?id=${id}&type=${type}`)
  }
  console.log(marginLeft)
  return (
    <VideoCoverWrapper
      marginLeft={marginLeft || '17px'}
      lineNums={lineNums || 5}
    >
      <div
        onClick={(e) => {
          handleClick(info.vid || info.id, info.type || info.status)
        }}
      >
        <img src={info.coverUrl || info.imgurl} alt="" className="img" />
        <div className="info">
          <div className="title">
            {info.type === 0 ||
              (info.status === 0 && <i className="sprite_icon3 icon_mv"></i>)}
            <span className="name">{info.title || info.name}</span>
          </div>
          <div className="creator">
            {info.type === 0 && <span className="by">by</span>}
            <span className="creator_name">
              {(info.creator && info.creator[0].userName) || info.artistName}
            </span>
          </div>
        </div>
        <span className="duration">
          {(info.durationms || info.duration) === 0
            ? '00:00'
            : handleDurationTime(info.durationms || info.duration)}
        </span>
        <div className="play_count">
          <i className="sprite_icon3 video"></i>
          <span>
            {info.playTime
              ? handleCount(info.playTime)
              : handleCount(info.playCount)}
          </span>
        </div>
      </div>
    </VideoCoverWrapper>
  )
})
