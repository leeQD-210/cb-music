import React, { memo } from 'react'
import { ListCoverWrapper } from './style'
import { handleDurationTime } from '@/utils'
import { changeSong } from '@/pages/player/store/actionCreator'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import { useHistory } from 'react-router-dom'
export default memo(function RankingListCover(props) {
  const { info, index } = props
  const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch(changeSong(id))
  }
  const history = useHistory()
  const handleMvClick = (e, id, type) => {
    e.stopPropagation()
    history.push(`/discover/mvDetail/?id=${id}&type=${type}`)
  }
  const handleArtistClick=(e,id)=>{
    e.stopPropagation()
    history.push(`/discover/artistDetail/?id=${id}`)
  }
  return (
    <ListCoverWrapper
      onClick={(e) => {
        handleClick(info.id)
      }}
    >
      <div className={classnames('index', { hot: index < 3 })}>{index + 1}</div>
      <div className="songs_info">
        {index < 3 && <img src={info.al.picUrl} alt="" className="img" />}
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
      <div
        className="artist"
        onClick={(e) => {
          handleArtistClick(e, info.ar[0].id)
        }}
      >
        {info.ar[0].name}
      </div>
    </ListCoverWrapper>
  )
})
