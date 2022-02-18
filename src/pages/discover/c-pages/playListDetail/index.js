import React, { memo, useEffect } from 'react'
import { PlayListDetailWrapper } from './style'
import PlayListInfo from './c-ptns/playListInfo'
import { useDispatch } from 'react-redux'
import { getPlayListDetailAction } from './store/actionCreator'
export default memo(function PlayListDetail(props) {
  const currentId = new URLSearchParams(props.location.search).get('id')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlayListDetailAction(currentId))
  }, [currentId, dispatch])
  return (
    <PlayListDetailWrapper>
      <div className="left">
        <PlayListInfo></PlayListInfo>
      </div>
      <div className="right"></div>
    </PlayListDetailWrapper>
  )
})
