import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { searchKeywords } from '../../store/actionCreator'
import { SongsWrapper } from './style'
import { handleDurationTime } from '@/utils'
import { message, Pagination } from 'antd'
import { changeSong } from '../../../player/store/actionCreator'
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
  const handlePlay = (id) => {
    dispatch(changeSong(id))
  }
  const clickFavor = () => {
    message.error('功能尚未开发，别瞎点')
  }
  const clickDownload = (e) => {
    message.error('功能尚未开发，别瞎点')
  }
  const clickShare = () => {
    message.error('功能尚未开发，别瞎点')
  }
  return (
    <SongsWrapper>
      <div className="content">
        {state.searchSongs.length > 0 &&
          state.searchSongs.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="left">
                  <i
                    className="iconfont icon-playfill"
                    onClick={(e) => {
                      handlePlay(item.id)
                    }}
                  ></i>
                  <span>{item.name}</span>
                </div>
                <div className="action_box">
                  <i className="iconfont icon-favor" onClick={clickFavor}></i>
                  <i className="iconfont icon-share" onClick={clickShare}></i>
                  <i
                    className="iconfont icon-download"
                    onClick={clickDownload}
                  ></i>
                </div>
                <div className="right">
                  <span className="artist_name">{item.artists[0].name}</span>
                  <span className="album_name">{item.album.name}</span>
                  <span className="duration">
                    {handleDurationTime(item.duration || '')}
                  </span>
                </div>
              </div>
            )
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
          <span className="not_found">
            <i className="iconfont icon-cry"></i>很抱歉，没有找到您搜索的内容！
            <span style={{ fontSize: 12 }}>(你看你搜的啥玩意？？？)</span>
          </span>
        )}
      </div>
    </SongsWrapper>
  )
})
