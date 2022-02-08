import React, { memo, useEffect, useState } from 'react'
import { SongsWrapContent } from './style'
import { searchKeywords } from '../../store/actionCreator'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd'
import SearchSongsWrapCover from '@/components/searchSongsWrapCover'
export default memo(function SongWraps(props) {
  const dispatch = useDispatch()
  const keywords = new URLSearchParams(props.location.search).get('keywords')
  const [pageNo, setPageNo] = useState(1)
  const state = useSelector((state) => {
    return {
      searchSongsWrap: state.getIn(['search', 'searchSongsWrap']),
      songsWrapTotal: state.getIn(['search', 'songsWrapTotal'])
    }
  }, shallowEqual)
  useEffect(() => {
    dispatch(searchKeywords(keywords, pageNo, 10, 1000))
  }, [dispatch, keywords, pageNo])
  const handlePageChange = (pageNo) => {
    setPageNo(pageNo)
  }
  return (
    <SongsWrapContent>
      {state.searchSongsWrap.length > 0 &&
        state.searchSongsWrap.map((item) => {
          return (
            <SearchSongsWrapCover
              info={item}
              key={item.id}
            ></SearchSongsWrapCover>
          )
        })}
      {state.searchSongsWrap.length > 0 && (
        <Pagination
          defaultCurrent={pageNo}
          total={state.songsWrapTotal}
          defaultPageSize={14}
          showSizeChanger={false}
          onChange={handlePageChange}
          className="pagination_wrapper"
        ></Pagination>
      )}
      {state.searchSongsWrap.length === 0 && (
        <div className="not_found">
          <i className="iconfont icon-cry"></i>很抱歉，没有找到您搜索的内容！
          <span style={{ fontSize: 12 }}>(你看你搜的啥玩意？？？)</span>
        </div>
      )}
    </SongsWrapContent>
  )
})
