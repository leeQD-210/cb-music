import React, { memo } from 'react'
import { CoverWrapper } from './style'
import { handleCount } from '@/utils'
import { useHistory } from 'react-router-dom'
export default memo(function SongListCover(props) {
  const { info, rowNum, marginLeft } = props
  const history = useHistory()
  const handleClick = (id) => {
    history.push(`/discover/playlistDetail/?id=${id}`)
  }
  return (
    <CoverWrapper rowNum={rowNum} marginLeft={marginLeft}>
      <div
        onClick={(e) => {
          handleClick(info.id)
        }}
      >
        <img src={info.picUrl || info.coverImgUrl} alt="" className="image" />
        <div className="iconWrapper sprite_cover">
          <span className="icon_left">
            <i className="sprite_icon headset"></i>
            <span className="count">{handleCount(info.playCount)}</span>
          </span>
          <span className="icon_right">
            <i className="sprite_icon play"></i>
          </span>
        </div>
        <span className="name">{info.name}</span>
        <span className="writer">
          by&nbsp;
          {info.copywriter ||
            (info.creator && info.creator.nickname) ||
            '芝士条'}
        </span>
      </div>
    </CoverWrapper>
  )
})
