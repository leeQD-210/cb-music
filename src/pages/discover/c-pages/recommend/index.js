import React, { memo } from 'react';
import { RecommendWrapper, MainWrapper } from './style';
import TopBanner from './c-ptns/topBanner';
import HotRecommend from './c-ptns/hotRecommend';
import NewAlbum from './c-ptns/newAlbum';
import Ranking from './c-ptns/ranking';
import Artist from './c-ptns/artist';
import Dj from './c-ptns/dj';
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
            <img
              src={require('@/assets/img/logo.png')}
              alt=""
              className="logo"
            />
            {/* <button className="btn">用户登录</button> */}
          </div>
          <Artist></Artist>
          <Dj></Dj>
        </div>
      </MainWrapper>
    </RecommendWrapper>
  );
});
