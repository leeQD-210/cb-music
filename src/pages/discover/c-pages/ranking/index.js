import React, { memo } from 'react';
import { CBRankingWrapper } from './style';
import RankingNav from './c-pages/rankingNav';
import RankingTop from './c-pages/rankingTop';
import RankingList from './c-pages/rankingList';
export default memo(function CBRanking() {
  return (
    <CBRankingWrapper>
      <RankingNav></RankingNav>
      <div className="content_right">
        <RankingTop></RankingTop>
        <RankingList></RankingList>
      </div>
    </CBRankingWrapper>
  );
});
