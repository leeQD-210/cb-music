import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RankingTopWrapper } from './style'
export default memo(function RankingTop() {
  const state = useSelector((state) => {
    return { playListDetail: state.getIn(['ranking', 'playListDetail']) }
  }, shallowEqual)
  return (
    <RankingTopWrapper>
      <img src={state.playListDetail.coverImgUrl} alt="" className="img" />
      <div className='detail'>
          <span className='detail_name'>{state.playListDetail.name}</span>
          <span className='detail_update'>{}</span>
      </div>
    </RankingTopWrapper>
  )
})
