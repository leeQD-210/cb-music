import React, { memo, useEffect, useState } from 'react'
import { SearchLyricsWrapper} from './style'
import { searchKeywords } from '../../store/actionCreator'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import SearchSongsList from '@/components/searchSongList'
import { Pagination } from 'antd'
export default memo(function SearchLyrics(props) {
  const keywords = new URLSearchParams(props.location.search).get('keywords')
  const [pageNo, setPageNo] = useState(1)
  const state = useSelector((state) => {
    return {
      searchLyricSongs: state.getIn(['search', 'searchLyricSongs']),
      lyricSongsTotal: state.getIn(['search', 'lyricSongsTotal'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(searchKeywords(keywords, pageNo, 6, 1006))
  },[dispatch,keywords,pageNo])
  const handlePageChange = (pageNo) => {
    setPageNo(pageNo)
  }
  return (
    <SearchLyricsWrapper>
      {state.searchLyricSongs.length > 0 &&
        state.searchLyricSongs.map((item) => {
          return (
          <SearchSongsList info={item} key={item.id}></SearchSongsList>
          )
        })}
      {state.searchLyricSongs.length > 0 && (
        <Pagination
          defaultCurrent={pageNo}
          total={state.lyricSongsTotal}
          defaultPageSize={14}
          showSizeChanger={false}
          onChange={handlePageChange}
          className="pagination_wrapper"
        ></Pagination>
      )}
      {state.searchLyricSongs.length === 0 && (
        <div className="not_found">
          <i className="iconfont icon-cry"></i>很抱歉，没有找到您搜索的内容！
          <span style={{ fontSize: 12 }}>(你看你搜的啥玩意？？？)</span>
        </div>
      )}
    </SearchLyricsWrapper>
  )
})
