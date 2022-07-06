import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { CoverWrapper } from './style'
export default memo(function AlbumCover(props) {
  const {
    info,
    coverWidth,
    imgWidth,
    imgHeight,
    positionHeight,
    marginLeft,
    lineNums
  } = props
  const history = useHistory()
  const handleClick = (id) => {
    history.push(`/discover/albumDetail/?id=${id}`)
  }
  return (
    <CoverWrapper
      coverWidth={coverWidth}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      positionHeight={positionHeight}
      marginLeft={marginLeft}
      lineNums={lineNums}
      onClick={(e) => {
        handleClick(info.id)
      }}
    >
      <img src={info.picUrl} alt="" className="image" />
      <span className="sprite_cover cover">{}</span>
      <span className="name">{info.name}</span>
      <span className="artist_name">{info.artist.name}</span>
    </CoverWrapper>
  )
})
