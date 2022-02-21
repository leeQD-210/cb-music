import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { CBAlbumDetailWrapper } from './style'
import { getCommentAction } from '../store/actionCreator'
import CommentsWrap from '@/components/commentsWrap'
import { getAlbumDetailAction } from './store/actionCreator'
import AlbumInfo from './c-ptns/albumInfo'
import AlbumSongList from './c-ptns/songList'
import HotAlbums from './c-ptns/hotAlbums'
export default memo(function CBAlbumDetail(props) {
  const currentId = new URLSearchParams(props.location.search).get('id')
  const [pageNo, setPageNo] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAlbumDetailAction(currentId))
    dispatch(getCommentAction(currentId, 20, pageNo, 'album'))
  }, [currentId, pageNo, dispatch])
  const state = useSelector((state) => {
    return {
      albumHotComments: state.getIn(['comment', 'albumHotComments']),
      albumComments: state.getIn(['comment', 'albumComments']),
      albumCommentsTotal: state.getIn(['comment', 'albumCommentsTotal'])
    }
  }, shallowEqual)
  const handlePageChange = useCallback(
    (pageNo) => {
      setPageNo(pageNo)
    },
    [setPageNo]
  )
  return (
    <CBAlbumDetailWrapper>
      <div className="left">
        <AlbumInfo></AlbumInfo>
        <AlbumSongList></AlbumSongList>
        <CommentsWrap
          hotComments={state.albumHotComments}
          comments={state.albumComments}
          commentsTotal={state.albumCommentsTotal}
          pageNo={pageNo}
          pageChange={handlePageChange}
        ></CommentsWrap>
      </div>
      <div className="right">
        <HotAlbums></HotAlbums>
      </div>
    </CBAlbumDetailWrapper>
  )
})
