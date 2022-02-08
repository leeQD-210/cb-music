import React, { memo, useEffect, useState } from 'react'
import { message } from 'antd'
import { changeSong } from '@/pages/player/store/actionCreator'
import { handleDurationTime } from '@/utils'
import { useDispatch } from 'react-redux'
import { SearchSongListWrapper } from './style'
export default memo(function SearchSongList(props) {
  const { info } = props
  const [lyrics, setLyrics] = useState([])
  const [showAll, setShowAll] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!info.lyrics || info.lyrics.txt.length === 0) return
    if (showAll) {
      setLyrics(info.lyrics.txt)
    } else {
      setLyrics(info.lyrics.txt.slice(0, 4))
    }
  }, [showAll, info])
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
    <SearchSongListWrapper>
      <div className="info" key={info.id}>
        <div className="left">
          <i
            className="iconfont icon-playfill"
            onClick={(e) => {
              handlePlay(info.id)
            }}
          ></i>
          <span className="song_name">{info.name}</span>
        </div>
        <div className="action_box">
          <i className="iconfont icon-favor" onClick={clickFavor}></i>
          <i className="iconfont icon-share" onClick={clickShare}></i>
          <i className="iconfont icon-download" onClick={clickDownload}></i>
        </div>
        <div className="right">
          <span className="artist_name">{info.artists[0].name}</span>

          <span className="album">
            <span>《</span>
            <span className="album_name">{info.album.name}</span>
            <span>》</span>
          </span>
          <span className="duration">
            {handleDurationTime(info.duration || '')}
          </span>
        </div>
      </div>
      {lyrics.length > 0 && (
        <div className="lyric_content">
          {lyrics.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </div>
      )}
      {lyrics.length > 0 && (
        <p onClick={(e) => setShowAll(!showAll)} className="show_all">
          {showAll ? '收起' : '展开全部'}
        </p>
      )}
    </SearchSongListWrapper>
  )
})
