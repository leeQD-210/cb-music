import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BriefDescWrapper } from './style'
export default memo(function BriefDesc() {
  const state = useSelector(
    (state) => ({
      artistDetail: state.getIn(['artistDetail', 'artistDetail'])
    }),
    shallowEqual
  )
  return (
    <BriefDescWrapper>
      <div className="top_title">相关介绍</div>
      <div className="content">{state.artistDetail.briefDesc}</div>
    </BriefDescWrapper>
  )
})
