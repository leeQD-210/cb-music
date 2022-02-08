import React, { memo, useEffect, useState } from 'react'
import { SearchUserWrapper } from './style'
import SearchUserCover from '@/components/searchUserCover'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { searchKeywords } from '../../store/actionCreator'
import { Pagination } from 'antd'
export default memo(function SearchUsers(props) {
  const dispatch = useDispatch()
  const keywords = new URLSearchParams(props.location.search).get('keywords')
  const [pageNo, setPageNo] = useState(1)
  const state = useSelector((state) => {
    return {
      searchUser: state.getIn(['search', 'searchUser']),
      userTotal: state.getIn(['search', 'userTotal'])
    }
  }, shallowEqual)
  useEffect(() => {
    dispatch(searchKeywords(keywords, pageNo, 10, 1002))
  }, [dispatch, keywords, pageNo])
  const handlePageChange = (pageNo) => {
    setPageNo(pageNo)
  }
  return (
    <SearchUserWrapper>
      {state.searchUser.length > 0 &&
        state.searchUser.map((item) => {
          return <SearchUserCover info={item} key={item.id}></SearchUserCover>
        })}
      {state.searchUser.length > 0 && (
        <Pagination
          defaultCurrent={pageNo}
          total={state.userTotal}
          defaultPageSize={14}
          showSizeChanger={false}
          onChange={handlePageChange}
          className="pagination_wrapper"
        ></Pagination>
      )}
      {state.searchUser.length === 0 && (
        <div className="not_found">
          <i className="iconfont icon-cry"></i>很抱歉，没有找到您搜索的内容！
          <span style={{ fontSize: 12 }}>(你看你搜的啥玩意？？？)</span>
        </div>
      )}
    </SearchUserWrapper>
  )
})
