import React, { memo, useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { SongDetailWrapper } from './style'
import SongInfo from './c-ptns/songInfo'
import Comment from '@/components/commentsWrap'
import SimiSongList from './c-ptns/simiSong'
import SimiUserList from './c-ptns/simiUsers'
import { getCommentAction } from '../store/actionCreator'
export default memo(function SongDetail() {
  const [pageNo, setPageNo] = useState(1)
  const state = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong']),
      songHotComments: state.getIn(['comment', 'songHotComments']),
      songComments: state.getIn(['comment', 'songComments']),
      songCommentsTotal: state.getIn(['comment', 'songCommentsTotal'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCommentAction(state.currentSong.id, 20, pageNo, 'music'))
  }, [dispatch, state.currentSong, pageNo])
  const handlePageChange = useCallback(
    (pageNo) => {
      setPageNo(pageNo)
    },
    [setPageNo]
  )
  return (
    <SongDetailWrapper>
      <div className="left">
        <SongInfo></SongInfo>
        <Comment
          hotComments={state.songHotComments}
          comments={state.songComments}
          commentsTotal={state.songCommentsTotal}
          pageChange={handlePageChange}
          pageNo={pageNo}
        ></Comment>
      </div>
      <div className="right">
        <SimiSongList></SimiSongList>
        <SimiUserList></SimiUserList>
      </div>
    </SongDetailWrapper>
  )
})
