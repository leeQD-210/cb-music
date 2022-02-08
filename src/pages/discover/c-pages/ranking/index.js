import React, { memo } from 'react'
import { CBRankingWrapper } from './style'
import RankingNav from './c-pages/rankingNav'
export default memo(function CBRanking() {
  return (
    <CBRankingWrapper>
      <RankingNav></RankingNav>
    </CBRankingWrapper>
  )
})
