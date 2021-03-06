import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RankingListWrapper } from './style'
import RankingListCover from '@/components/rankingListCover'
export default memo(function RankingList() {
  const state = useSelector((state) => {
    return {
      playListDetail: state.getIn(['ranking', 'playListDetail']),
      songList: state.getIn(['ranking', 'songList'])
    }
  }, shallowEqual)
  return (
    <RankingListWrapper>
      <div className="titleWrap">
        <span className="listCount">
          <span className="title">歌曲列表：</span>
          {state.playListDetail.tracks && state.playListDetail.tracks.length}首
        </span>
        <span className="playCount">
          <span className="title">播放次数：</span>
          {state.playListDetail.playCount}
        </span>
      </div>
      <div className="divider"></div>
      <div className="ranking_list">
        {state.songList.length > 0 &&
          state.songList.map((item, index) => {
            return (
              <RankingListCover
                info={item}
                key={item.id}
                index={index}
              ></RankingListCover>
            )
          })}
      </div>
    </RankingListWrapper>
  )
})
