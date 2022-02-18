import React, { memo, useCallback, useEffect, useState } from 'react'
import { MvDetailWrapper } from './style'
import CBVideo from './c-ptns/video'
import Comment from '@/components/commentsWrap'
import { useSelector } from 'react-redux'
import { shallowEqual } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCommentAction } from '../store/actionCreator'
import VideoInfo from './c-ptns/videoInfo'
import RelatedVideos from './c-ptns/relatedVideos'
export default memo(function MvDetail(props) {
  const currentVideoId = new URLSearchParams(props.location.search).get('id')
  const type = Number(new URLSearchParams(props.location.search).get('type'))
  const [pageNo, setPageNo] = useState(1)
  const state = useSelector((state) => {
    return {
      mvHotComments: state.getIn(['comment', 'mvHotComments']),
      mvComments: state.getIn(['comment', 'mvComments']),
      mvCommentsTotal: state.getIn(['comment', 'mvCommentsTotal'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    if (currentVideoId) {
      dispatch(
        getCommentAction(
          currentVideoId,
          20,
          pageNo,
          type === 0 ? 'mv' : 'video'
        )
      )
    }
  }, [dispatch, currentVideoId, pageNo, type])
  const handlePageChange = useCallback(
    (pageNo) => {
      setPageNo(pageNo)
    },
    [setPageNo]
  )
  return (
    <MvDetailWrapper>
      <div className="left">
        <CBVideo vid={currentVideoId} type={type}></CBVideo>
        <Comment
          hotComments={state.mvHotComments}
          comments={state.mvComments}
          commentsTotal={state.mvCommentsTotal}
          pageChange={handlePageChange}
          pageNo={pageNo}
        ></Comment>
      </div>
      <div className="right">
        <VideoInfo></VideoInfo>
        <RelatedVideos></RelatedVideos>
      </div>
    </MvDetailWrapper>
  )
})
