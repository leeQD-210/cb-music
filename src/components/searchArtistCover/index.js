import React, { memo } from 'react'
import { CoverWrapper } from './style'
export default memo(function SearchArtistsCover(props) {
  const { info } = props
  return (
    <CoverWrapper>
      <div className="content">
        <img src={info && info.picUrl} alt="" className="img" />
        <div className="info">
          <span className="name">{info && info.name}</span>
          <i className="iconfont icon-user"></i>
        </div>
      </div>
    </CoverWrapper>
  )
})
