import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { searchKeywords } from '../../store/actionCreator'
import { SongsWrapper } from './style'
import { Pagination } from 'antd'
import SearchSongList from '@/components/searchSongList'
export default memo(function SearchSongs(props) {
  const keywords = new URLSearchParams(props.location.search).get('keywords')
  const [pageNo, setPageNo] = useState(1)
  const state = useSelector(
    (state) => ({
      searchSongs: state.getIn(['search', 'searchSongs']),
      songsTotal: state.getIn(['search', 'songsTotal'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (keywords) {
      dispatch(searchKeywords(keywords, 1, 14, 1))
    }
  }, [dispatch, keywords])
  const handlePageChange = (page) => {
    setPageNo(page)
    dispatch(searchKeywords(keywords, page, 14, 1))
  }

  return (
    <SongsWrapper>
      <div className="content">
        {state.searchSongs.length > 0 &&
          state.searchSongs.map((item) => {
            return <SearchSongList info={item} key={item.id}></SearchSongList>
          })}
        {state.searchSongs.length > 0 && (
          <Pagination
            defaultCurrent={pageNo}
            total={state.songsTotal}
            defaultPageSize={14}
            showSizeChanger={false}
            onChange={handlePageChange}
            className="pagination_wrapper"
          ></Pagination>
        )}
        {state.searchSongs.length === 0 && (
          <div className="not_found">
            <i className="iconfont icon-cry"></i>很抱歉，没有找到您搜索的内容！
            <span style={{ fontSize: 12 }}>(你看你搜的啥玩意？？？)</span>
          </div>
        )}
      </div>
    </SongsWrapper>
  )
})
