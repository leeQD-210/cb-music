import React, { memo } from 'react'
import RankingNavWrapper from './style'
export default memo(function RankingNav() {
  return (
    <RankingNavWrapper>
      <h3>云音乐特色榜</h3>
      <div className="special_rank"></div>
      <h3>全球媒体榜</h3>
      <div className="global_rank"></div>
    </RankingNavWrapper>
  )
})
