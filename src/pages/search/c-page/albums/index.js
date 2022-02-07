import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { SearchAlbumsWrapper } from './style.js'
import { searchKeywords } from '../../store/actionCreator.js'
import { Pagination } from 'antd'
import AlbumCover from '@/components/albumCover'
export default memo(function SearchAlbums(props) {
  const keywords = new URLSearchParams(props.location.search).get('keywords')
  const [pageNo, setPageNo] = useState(1)
  const state = useSelector((state) => {
    return {
      searchAlbums: state.getIn(['search', 'searchAlbums']),
      albumsTotal: state.getIn(['search', 'albumsTotal'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(searchKeywords(keywords, 1, 20, 10))
  }, [dispatch, keywords])
  const handlePageChange = (pageNo) => {
    setPageNo(pageNo)
    dispatch(searchKeywords(keywords, pageNo, 20, 10))
  }
  return (
    <SearchAlbumsWrapper>
      {state.searchAlbums.length > 0 &&
        state.searchAlbums.map((item) => {
          return (
            <AlbumCover
              info={item}
              key={item.id}
              coverWidth={'153px'}
              imgWidth={'130px'}
              imgHeight={'130px'}
              positionHeight={'-845px'}
            ></AlbumCover>
          )
        })}
      {state.searchAlbums.length > 0 && (
        <div className="pagination_wrapper">
          <Pagination
            defaultCurrent={pageNo}
            total={state.albumsTotal}
            onChange={handlePageChange}
            showSizeChanger={false}
            defaultPageSize={20}
          ></Pagination>
        </div>
      )}
      {state.searchAlbums.length === 0 && (
        <span className="not_found">
          <i className="iconfont icon-cry"></i>很抱歉，没有找到您搜索的内容！
          <span style={{ fontSize: 12 }}>(你看你搜的啥玩意？？？)</span>
        </span>
      )}
    </SearchAlbumsWrapper>
  )
})
