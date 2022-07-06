import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { ReArtistWrapper } from './style'
export default memo(function RecommendArtist(props) {
  const { image, alias, name, id } = props
  const history = useHistory()
  const handleClick = (id) => {
    history.push(`/discover/artistDetail/?id=${id}`)
  }
  return (
    <ReArtistWrapper
      onClick={(e) => {
        handleClick(id)
      }}
    >
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
