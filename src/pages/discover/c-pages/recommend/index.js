import React, { memo } from 'react'
import { RecommendWrapper, MainWrapper } from './style'
import TopBanner from './c-ptns/topBanner'
import HotRecommend from './c-ptns/hotRecommend'
import NewAlbum from './c-ptns/newAlbum'
export default memo(function CBRecommend() {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <MainWrapper>
        <div className="main_left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
        </div>
        <div className="main_right"></div>
      </MainWrapper>
    </RecommendWrapper>
  )
})
