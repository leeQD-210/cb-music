import React, { memo, useEffect } from 'react'
import { CBDjRadioWrapper } from './style'
import DjCategory from './c-ptns/category'
import RecommendShow from './c-ptns/recommendShow'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProgram, getDjRecommendProgram } from './store/actionCreator'
export default memo(function CBDjRadio() {
  const state = useSelector(
    (state) => ({
      recommendProgram: state.getIn(['djRadio', 'recommendProgram']),
      djProgram: state.getIn(['djRadio', 'djProgram'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDjRecommendProgram())
    dispatch(getProgram(10))
  }, [dispatch])
  return (
    <CBDjRadioWrapper>
      <DjCategory></DjCategory>
      <div className='recommend_wrap'>
        <RecommendShow info={state.recommendProgram} title={'推荐节目'}></RecommendShow>
        <RecommendShow info={state.djProgram} title={'节目排行'}></RecommendShow>
      </div>
    </CBDjRadioWrapper>
  )
})
