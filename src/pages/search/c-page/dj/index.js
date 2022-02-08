import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { SearchDjWrapper } from './style'
import { searchKeywords } from '../../store/actionCreator'
import SearchDjCover from '@/components/searchDjCover'
export default memo(function SearchDj(props) {
  const dispatch = useDispatch()
  const keywords = new URLSearchParams(props.location.search).get('keywords')
  const state = useSelector((state) => {
    return {
      searchDj: state.getIn(['search', 'searchDj']),
      djTotal: state.getIn(['search', 'djTotal'])
    }
  }, shallowEqual)
  useEffect(() => {
    dispatch(searchKeywords(keywords, 1, 10, 1009))
  }, [dispatch, keywords])
  return (
    <SearchDjWrapper>
      {state.searchDj.length > 0 &&
        state.searchDj.map((item) => {
          return <SearchDjCover info={item} key={item.id}></SearchDjCover>
        })}
      {state.searchDj.length === 0 && (
        <span className="not_found">
          <i className="iconfont icon-cry"></i>很抱歉，没有找到您搜索的内容！
          <span style={{ fontSize: 12 }}>(你看你搜的啥玩意？？？)</span>
        </span>
      )}
    </SearchDjWrapper>
  )
})
