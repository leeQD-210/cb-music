import React, { memo, useEffect, useState } from 'react'
import { ArtistWrapper } from './style'
import SearchArtistCover from '@/components/searchArtistCover'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { searchKeywords } from '../../store/actionCreator'
import { Pagination } from 'antd'
export default memo(function SearchArtists(props) {
  const dispatch = useDispatch()
  const keywords = new URLSearchParams(props.location.search).get('keywords')
  const [pageNo, setPageNo] = useState(1)
  const state = useSelector((state) => {
    return {
      searchArtists: state.getIn(['search', 'searchArtists']),
      artistsTotal: state.getIn(['search', 'artistsTotal'])
    }
  }, shallowEqual)
  useEffect(() => {
    dispatch(searchKeywords(keywords, 1, 24, 100))
  }, [dispatch, keywords])
  const handlePageChange = (pageNo) => {
    setPageNo(pageNo)
    dispatch(searchKeywords(keywords, pageNo, 14, 100))
  }
  return (
    <ArtistWrapper>
      {state.searchArtists.length > 0 &&
        state.searchArtists.map((item) => {
          return (
            <SearchArtistCover info={item} key={item.id}></SearchArtistCover>
          )
        })}
      {state.searchArtists.length > 0 && (
        <div className="pagination_wrapper">
          <Pagination
            defaultCurrent={pageNo}
            total={state.artistsTotal}
            defaultPageSize={24}
            showSizeChanger={false}
            onChange={handlePageChange}
          ></Pagination>
        </div>
      )}
      {state.searchArtists.length === 0 && (
        <span className="not_found"><i className='iconfont icon-cry'></i>很抱歉，没有找到您搜索的内容！<span style={{fontSize:12}}>(你看你搜的啥玩意？？？)</span></span>
      )}
    </ArtistWrapper>
  )
})
