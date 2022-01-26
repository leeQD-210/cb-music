import React, { memo } from 'react'
import { CoverWrapper } from './style'
export default memo(function SongListCover(props) {
  const { info } = props
  return (
    <CoverWrapper>
      <img src={info.picUrl} alt="" className='image'/>
      <span className='name'>{info.name}</span>
      <span className='writer'>by&nbsp;{info.copywriter}</span>
    </CoverWrapper>
  )
})
