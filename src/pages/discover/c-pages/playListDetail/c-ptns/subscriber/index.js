import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { SubscriberWrapper } from './style'
import SimiItem from '@/components/simiItem'
export default memo(function Subscriber() {
  const state = useSelector(
    (state) => ({
      playListDetail: state.getIn(['playList', 'playListDetail'])
    }),
    shallowEqual
  )
  return (
    <SubscriberWrapper>
      <div className="top_title">喜欢此歌单的用户</div>
      {state.playListDetail.subscribers &&
        state.playListDetail.subscribers.map((item) => {
          return (
            <SimiItem
              key={item.userId}
              imgUrl={item.avatarUrl}
              name={item.nickname}
              desc={item.signature}
            ></SimiItem>
          )
        })}
    </SubscriberWrapper>
  )
})
