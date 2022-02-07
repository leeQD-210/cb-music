import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { SearchVideosWrapper } from './style'
import { searchKeywords } from '../../store/actionCreator'
import SearchVideoCover from '@/components/searchVideoCover'
import { Pagination } from 'antd'
export default memo(function SearchVideos(props) {
  const keywords = new URLSearchParams(props.location.search).get('keywords')
  const [pageNo, setPageNo] = useState(1)
  const state = useSelector((state) => {
    return {
      searchVideos: state.getIn(['search', 'searchVideos']),
      videosTotal: state.getIn(['search', 'videosTotal'])
    }
  }, shallowEqual)
  const handlePageChange = (pageNo) => {
    setPageNo(pageNo)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(searchKeywords(keywords, pageNo, 20, 1014))
  }, [dispatch, keywords, pageNo])
  return (
    <SearchVideosWrapper>
      {state.searchVideos.length > 0 &&
        state.searchVideos.map((item) => {
          return <SearchVideoCover info={item} key={item.id}></SearchVideoCover>
        })}
      {state.searchVideos.length > 0 && (
        <div className="pagination_wrapper">
          <Pagination
            defaultCurrent={pageNo}
            total={state.videosTotal}
            defaultPageSize={20}
            showSizeChanger={false}
            onChange={handlePageChange}
          ></Pagination>
        </div>
      )}
      {state.searchVideos.length === 0 && (
        <span className="not_found">
          <i className="iconfont icon-cry"></i>很抱歉，没有找到您搜索的内容！
          <span style={{ fontSize: 12 }}>(你看你搜的啥玩意？？？)</span>
        </span>
      )}
    </SearchVideosWrapper>
  )
})
