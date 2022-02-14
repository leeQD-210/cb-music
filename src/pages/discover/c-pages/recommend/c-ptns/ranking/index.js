import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { RankingWrapper } from './style'
import RecommendNav from '@/components/recommendNav'
import { getList } from '../../store/actionCreator'
import RankList from '@/components/rankList'
export default memo(function Ranking() {
  const state = useSelector((state) => {
    return {
      newInfo: state.getIn(['recommend', 'newInfo']),
      originInfo: state.getIn(['recommend', 'originInfo']),
      upInfo: state.getIn(['recommend', 'upInfo'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getList('up'))
    dispatch(getList('new'))
    dispatch(getList('origin'))
  }, [dispatch])
  return (
    <RankingWrapper>
      <RecommendNav title="榜单" moreLink="ranking"></RecommendNav>
      <div className="rankWrapper">
        <RankList title="飙升榜" info={state.upInfo}></RankList>
        <RankList title="新歌榜" info={state.newInfo}></RankList>
        <RankList title="原创榜" info={state.originInfo}></RankList>
      </div>
    </RankingWrapper>
  )
})
