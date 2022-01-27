import React, { memo } from 'react'
import { RecommendWrapper, MainWrapper } from './style'
import TopBanner from './c-ptns/topBanner'
import HotRecommend from './c-ptns/hotRecommend'
import NewAlbum from './c-ptns/newAlbum'
import Ranking from './c-ptns/ranking'
import Artist from './c-ptns/artist'
import Dj from './c-ptns/dj'
export default memo(function CBRecommend() {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <MainWrapper>
        <div className="main_left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <Ranking></Ranking>
        </div>
        <div className="main_right">
          <div className="loginbox">
            <span className="info">
              登录CB.Pets音乐，可以享受无限收藏的乐趣，并且可以给宠物挑选零食哦！！！
            </span>
            <button className="btn">用户登录</button>
          </div>
          <Artist></Artist>
          <Dj></Dj>
        </div>
      </MainWrapper>
    </RecommendWrapper>
  )
})
