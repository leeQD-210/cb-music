import React, { memo, useCallback } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RelatedSongListWrapper } from './style'
import SimiItem from '@/components/simiItem'
export default memo(function RelatedSongList() {
  const state = useSelector(
    (state) => ({
      relatedSongList: state.getIn(['playList', 'relatedSongList'])
    }),
    shallowEqual
  )
  const history = useHistory()
  const clickItem = useCallback(
    (id) => {
      history.push(`/discover/playlistDetail/?id=${id}`)
    },
    [history]
  )
  return (
    <RelatedSongListWrapper>
      <div className="top_title">相似歌单</div>
      {state.relatedSongList.length > 0 &&
        state.relatedSongList.map((item) => {
          return (
            <SimiItem
              key={item.id}
              imgUrl={item.coverImgUrl}
              name={item.name}
              desc={item.creator && item.creator.nickname}
              id={item.id}
              handleClick={clickItem}
            ></SimiItem>
          )
        })}
    </RelatedSongListWrapper>
  )
})
