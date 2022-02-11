import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DjCategoryWrapper, IconWrapper } from './style'
import { getDjCatelist,getRecommend } from '../../store/actionCreator'
export default memo(function DjCategory() {
  const dispatch = useDispatch()
  const state = useSelector(
    (state) => ({
      djCategory: state.getIn(['djRadio', 'djCategory']),
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getDjCatelist())
    dispatch(getRecommend())
  }, [dispatch])
  return (
    <DjCategoryWrapper>
      {state.djCategory.length > 0 &&
        state.djCategory.map((item) => {
          return (
            <div className="item" key={item.id}>
              <IconWrapper bgImage={item.picWebUrl}></IconWrapper>
              <p className="cate_name">{item.name}</p>
            </div>
          )
        })}
    </DjCategoryWrapper>
  )
})
