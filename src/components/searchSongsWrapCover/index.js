import React, { memo } from 'react'
import { SongsWrapCoverWrapper } from './style'
import { handleCount } from '@/utils'
import { message } from 'antd'
import { changeSong } from '@/pages/player/store/actionCreator'
import { useDispatch } from 'react-redux'
export default memo(function SongsWrapCover(props) {
  const { info } = props
  const dispatch = useDispatch()
  const handlePlay = (id) => {
    dispatch(changeSong(id))
  }
  const clickFavor = () => {
    message.error('功能尚未开发，别瞎点')
  }
  const clickDownload = (e) => {
    message.error('功能尚未开发，别瞎点')
  }
  const clickShare = () => {
    message.error('功能尚未开发，别瞎点')
  }
  return (
    <SongsWrapCoverWrapper>
      <div className="left">
        <i
          className="iconfont icon-playfill"
          onClick={(e) => {
            handlePlay(info.id)
          }}
        ></i>
        <img src={info && info.coverImgUrl} alt="" className="img" />
        <a href="/abc" className="sprite_cover cover">
        {}
      </a>
        <span className="title">{info && info.name}</span>
      </div>
      <div className="action_box">
        <i className="iconfont icon-favor" onClick={clickFavor}></i>
        <i className="iconfont icon-share" onClick={clickShare}></i>
        <i className="iconfont icon-download" onClick={clickDownload}></i>
      </div>
      <div className="right">
        <span className="total">{info && info.trackCount}首</span>
        <span className="creator">by&nbsp;{info && info.creator.nickname}</span>
        <span className="collect">
          收藏：{info && handleCount(info.bookCount)}
        </span>
        <span className="play_count">
          收听：{info && handleCount(info.playCount)}
        </span>
      </div>
    </SongsWrapCoverWrapper>
  )
})
