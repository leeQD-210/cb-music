import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RelatedVideosWrapper } from './style'
export default memo(function RelatedVideos() {
  const state = useSelector(
    (state) => ({
      relatedMvs: state.getIn(['mv', 'relatedMvs'])
    }),
    shallowEqual
  )
  const history = useHistory()
  const handleVideoClick = (id, type) => {
    history.push(`/discover/mvDetail/?id=${id}&type=${type}`)
  }
  return (
    <RelatedVideosWrapper>
      <div className="title">
        <span>相关视频</span>
      </div>
      <div className="content">
        {state.relatedMvs.length > 0 &&
          state.relatedMvs.map((item) => {
            return (
              <div
                className="item"
                key={item.vid}
                onClick={(e) => {
                  handleVideoClick(item.vid, item.type)
                }}
              >
                <img src={item.coverUrl} alt="" className="img" />
                <div className="info">
                  <span className="video_title">{item.title}</span>
                  <span className="creator">
                    {item.creator.map((sItem) => {
                      return (
                        <span key={sItem.userId} className="name">
                          {sItem.userName}
                        </span>
                      )
                    })}
                  </span>
                </div>
              </div>
            )
          })}
      </div>
    </RelatedVideosWrapper>
  )
})
