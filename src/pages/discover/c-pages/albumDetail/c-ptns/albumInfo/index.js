import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AlbumInfoWrapper } from './style'
import ActionBar from '@/components/actionBar'
import { addSongByTracks } from '@/pages/player/store/actionCreator'
import { handleTimeStamp } from '@/utils'
export default memo(function AlbumInfo() {
  const state = useSelector(
    (state) => ({
      albumDetail: state.getIn(['album', 'albumDetail']),
      albumInfo: state.getIn(['album', 'albumInfo']),
      albumSongs: state.getIn(['album', 'albumSongs'])
    }),
    shallowEqual
  )
  const [description, setDescription] = useState([])
  const [showAllDesc, setShowAllDesc] = useState(false)
  useEffect(() => {
    if (state.albumDetail.description) {
      setDescription(
        showAllDesc
          ? state.albumDetail.description.split('\n-')
          : state.albumDetail.description.split('\n-').slice(0, 1)
      )
    }
  }, [showAllDesc, state.albumDetail, setDescription])
  const dispatch = useDispatch()
  const addPlayList = useCallback(() => {
    dispatch(addSongByTracks(state.albumSongs))
  }, [dispatch, state.albumSongs])
  return (
    <AlbumInfoWrapper>
      <div className="top_wrap">
        <div className="img_wrap">
          <img src={state.albumDetail.picUrl} alt="" className="img" />
        </div>
        <div className="info_wrap">
          <div className="title_wrap">
            <i className="sprite_icon2 icon"></i>
            <span className="title">
              {state.albumDetail.name && state.albumDetail.name}
            </span>
          </div>
          <div className="creator_wrap">
            <p className="name">
              歌手：&nbsp;
              {state.albumDetail.artist && state.albumDetail.artist.name}
            </p>
            <p className="create_time">
              发行时间：&nbsp;
              {state.albumDetail.publishTime &&
                handleTimeStamp(state.albumDetail.publishTime, 'year')}
            </p>
            <p className="create_company">
              发行公司：&nbsp;
              {state.albumDetail.company || '天青色等烟雨'}
            </p>
          </div>
          <ActionBar
            subCount={state.albumInfo.subCount}
            shareCount={state.albumInfo.shareCount}
            commentCount={state.albumInfo.commentCount}
            handleAdd={addPlayList}
          ></ActionBar>
        </div>
      </div>
      <div className="desc_wrap">
        <p className="desc">专辑介绍：</p>
        <div className="content">
          {description.length > 0 &&
            description.map((item, index) => {
              return (
                <p className="item_wrap" key={index}>
                  {item}
                </p>
              )
            })}
          <p
            className="show_all"
            onClick={(e) => {
              setShowAllDesc(!showAllDesc)
            }}
          >
            {showAllDesc ? '收起' : '展开全部'}
          </p>
        </div>
      </div>
    </AlbumInfoWrapper>
  )
})
