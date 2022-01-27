import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { DjWrapper } from './style'
import { getDj } from '../../store/actionCreator'
import RecommendArtist from '@/components/recommendArtist'
export default memo(function Dj() {
  const state = useSelector((state) => {
    return {
      hotDj: state.getIn(['recommend', 'hotDj'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDj(7))
  }, [dispatch])
  return (
    <DjWrapper>
      <div className="header">
        <span>热门主播</span>
      </div>
      {state.hotDj.map((item) => {
        return (
          <RecommendArtist
            key={item.id}
            image={item.avatarUrl}
            alias={item.nickName}
            name={'dj'}
          ></RecommendArtist>
        )
      })}
    </DjWrapper>
  )
})
