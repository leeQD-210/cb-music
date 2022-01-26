import React, { memo } from 'react'
import { RecommendWrapper, MainWrapper } from './style'
import TopBanner from './c-ptns/topBanner'
import HotRecommend from './c-ptns/hotRecommend'
export default memo(function CBRecommend() {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <MainWrapper>
        <div className="main_left">
          <HotRecommend></HotRecommend>
        </div>
        <div className="main_right"></div>
      </MainWrapper>
    </RecommendWrapper>
  )
})
