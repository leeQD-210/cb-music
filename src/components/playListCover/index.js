import React, { memo } from 'react'
import { PlayListCoverWrapper } from './style'
import { handleDurationTime } from '@/utils'
import { useDispatch } from 'react-redux'
import { changeSong } from '@/pages/player/store/actionCreator'
import { useHistory } from 'react-router-dom'
export default memo(function PlayListCover(props) {
  const { info, index } = props
  const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch(changeSong(id))
  }
  const history = useHistory()
  const handleMvClick = (e, id, type) => {
    console.log(e)
    e.stopPropagation()
    history.push(`/discover/mvDetail/?id=${id}&type=${type}`)
  }
  return (
    <PlayListCoverWrapper
      onClick={(e) => {
        handleClick(info.id)
      }}
    >
      <div className="index">{index}</div>
      <div className="songs_info">
        <i className="iconfont icon-playfill"></i>
        <span className="song_name">{info.name}</span>
        <span className="alia">{info.alia[0] ? '-' + info.alia[0] : ''}</span>
        {info.mv !== 0 && (
          <span
            className="mv_icon"
            onClick={(e) => {
              handleMvClick(e, info.mv, 0)
            }}
          >
            mv
          </span>
        )}
      </div>
      <div className="duration">{handleDurationTime(info.dt)}</div>
      <div className="artist">{info.ar[0].name}</div>
      <div className="albums">{info.al.name}</div>
    </PlayListCoverWrapper>
  )
})
