import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { RankingNavWrapper } from './style'
import { initTopList, getDetail } from '../../store/actionCreator'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RankingNavCover from '@/components/rankingNavCover'
export default memo(function RankingNav() {
  const dispatch = useDispatch()
  const state = useSelector((state) => {
    return {
      topList: state.getIn(['ranking', 'topList'])
    }
  }, shallowEqual)
  const [currentId, setCurrentId] = useState(0)
  useEffect(() => {
    if (!state.topList.length > 0) {
      dispatch(initTopList())
    } else {
      setCurrentId(state.topList[0].id)
      dispatch(getDetail(state.topList[0].id))
    }
  }, [dispatch, state.topList])
  const handleClick = useCallback(
    (id) => {
      setCurrentId(id)
      dispatch(getDetail(id))
    },
    [setCurrentId, dispatch]
  )
  return (
    <RankingNavWrapper>
      <h3 className="title">云音乐特色榜</h3>
      <div className="special_rank">
        {state.topList.length > 0 &&
          state.topList.slice(0, 4).map((item) => {
            return (
              <RankingNavCover
                info={item}
                key={item.id}
                currentId={currentId}
                click={handleClick}
              ></RankingNavCover>
            )
          })}
      </div>
      <h3 className="title">全球媒体榜</h3>
      <div className="global_rank">
        {state.topList.length > 0 &&
          state.topList.slice(4, state.topList.length).map((item) => {
            return (
              <RankingNavCover
                info={item}
                key={item.id}
                currentId={currentId}
                click={handleClick}
              ></RankingNavCover>
            )
          })}
      </div>
    </RankingNavWrapper>
  )
})
