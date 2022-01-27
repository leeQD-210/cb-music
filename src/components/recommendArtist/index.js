import React, { memo } from 'react'
import { ReArtistWrapper } from './style'
export default memo(function recommendArtist(props) {
  const { image, alias, name } = props
  return (
    <ReArtistWrapper>
      <div className="item">
        <img src={image + '?param=62x62'} alt="" className="image" />
        <div className="info">
          <span className="alias">{alias}</span>
          <span className="name">{name}</span>
        </div>
      </div>
    </ReArtistWrapper>
  )
})
