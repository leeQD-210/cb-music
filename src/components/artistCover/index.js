import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { ArtistCoverWrapper } from './style'
export default memo(function ArtistCover(props) {
  const { info } = props
  const history = useHistory()
  const handleClick = (id) => {
    history.push(`/discover/artistDetail/?id=${info.id}`)
  }
  return (
    <ArtistCoverWrapper
      onClick={(e) => {
        handleClick(info.id)
      }}
    >
      <img src={info && info.picUrl} alt="" className="img" />
      <div className="info">
        <span className="name">{info && info.name}</span>
        <i className="iconfont icon-user"></i>
      </div>
    </ArtistCoverWrapper>
  )
})
