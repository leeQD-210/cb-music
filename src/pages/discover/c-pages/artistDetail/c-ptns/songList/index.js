import React, { memo } from 'react'
import { SongListWrapper } from './style'
import RankingListCover from '@/components/rankingListCover'
import { shallowEqual, useSelector } from 'react-redux'
export default memo(function SongList() {
  const state = useSelector(
    (state) => ({
      artistHotSongs: state.getIn(['artistDetail', 'artistHotSongs'])
    }),
    shallowEqual
  )
  return (
    <SongListWrapper>
      {state.artistHotSongs.length > 0 &&
        state.artistHotSongs.map((item, index) => {
          return (
            <RankingListCover
              info={item}
              index={index}
              key={item.id}
            ></RankingListCover>
          )
        })}
    </SongListWrapper>
  )
})
