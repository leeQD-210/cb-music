import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { CBVideoWrapper } from './style'
import { getMvAction } from '../../store/actionCreator'
import { useSelector } from 'react-redux'
export default memo(function CBVideo(props) {
  const { vid, type } = props
  console.log(vid)
  const dispatch = useDispatch()
  const state = useSelector(
    (state) => ({
      mvDetail: state.getIn(['mv', 'mvDetail']),
      mvUrl: state.getIn(['mv', 'mvUrl'])
    }),
    shallowEqual
  )
  useEffect(() => {
    if (vid) {
      dispatch(getMvAction(vid, type))
    }
  }, [dispatch, vid, type])

  return (
    <CBVideoWrapper>
      <div className="mv_title">
        <span className="info_wrap">
          {!type && <span className="mv_icon">MV</span>}
          <span className="mv_name">
            {state.mvDetail.name || state.mvDetail.title}
          </span>
          <span className="mv_creator">
            {(state.mvDetail.artists &&
              state.mvDetail.artists.map((item) => {
                return <span className="artist">{item.name}</span>
              })) ||
              (state.mvDetail.creator && state.mvDetail.creator.nickname)}
          </span>
        </span>
      </div>
      <video
        src={state.mvUrl}
        className="mv_video"
        controls
        poster={state.mvDetail.cover || state.mvDetail.coverUrl}
      ></video>
      <p className="action_wrap">
        <span className="comment">
          <i className="iconfont icon-comment"></i>
          <span className="count">({state.mvDetail.commentCount})</span>
        </span>
        <span className="favor">
          <i className="iconfont icon-favor"></i>
          <span className="count">
            ({state.mvDetail.subCount || state.mvDetail.subscribeCount})
          </span>
        </span>
        <span className="share">
          <i className="iconfont icon-share"></i>
          <span className="count">({state.mvDetail.shareCount})</span>
        </span>
      </p>
    </CBVideoWrapper>
  )
})
