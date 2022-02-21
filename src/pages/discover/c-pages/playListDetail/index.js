import React, { memo, useCallback, useEffect, useState } from 'react'
import { PlayListDetailWrapper } from './style'
import PlayListInfo from './c-ptns/playListInfo'
import SongList from './c-ptns/songList'
import Subscriber from './c-ptns/subscriber'
import RelatedSongList from './c-ptns/relatedSongList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPlayListDetailAction } from './store/actionCreator'
import { getCommentAction } from '../store/actionCreator'
import CommentsWrap from '@/components/commentsWrap'
export default memo(function PlayListDetail(props) {
  const currentId = new URLSearchParams(props.location.search).get('id')
  const [pageNo, setPageNo] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlayListDetailAction(currentId))
    dispatch(getCommentAction(currentId, 20, pageNo, 'playlist'))
  }, [currentId, pageNo, dispatch])
  const state = useSelector((state) => {
    return {
      playListHotComments: state.getIn(['comment', 'playListHotComments']),
      playListComments: state.getIn(['comment', 'playListComments']),
      playListCommentsTotal: state.getIn(['comment', 'playListCommentsTotal'])
    }
  }, shallowEqual)
  const handlePageChange = useCallback(
    (pageNo) => {
      setPageNo(pageNo)
    },
    [setPageNo]
  )
  return (
    <PlayListDetailWrapper>
      <div className="left">
        <PlayListInfo></PlayListInfo>
        <SongList></SongList>
        <CommentsWrap
          hotComments={state.playListHotComments}
          comments={state.playListComments}
          commentsTotal={state.playListCommentsTotal}
          pageNo={pageNo}
          pageChange={handlePageChange}
        ></CommentsWrap>
      </div>
      <div className="right">
        <Subscriber></Subscriber>
        <RelatedSongList></RelatedSongList>
      </div>
    </PlayListDetailWrapper>
  )
})
