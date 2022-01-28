import React, { useState, memo, useEffect, useRef, useCallback } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { CBPlayerWrapper } from './style'
import { message } from 'antd'
import { Slider } from 'antd'
import { handleDurationTime } from '@/utils'
import { getPlayUrl } from '@/api/player'
import { getLyric, changeSongIndex } from '../../store/actionCreator'
import {
  StepBackwardOutlined,
  CaretRightOutlined,
  PauseOutlined,
  StepForwardOutlined
} from '@ant-design/icons'
export default memo(function CBPlayer() {
  // 控制播放状态
  const [isPlay, setIsPlay] = useState(false)
  //   当前播放时间
  const [currentTime, setCurrenTime] = useState('00:00')
  //   进度条
  const [progress, setProgress] = useState(0)
  //   进度条拖动
  const [isSliderChanging, setSliderChanging] = useState(false)
  //   获取当前歌曲
  const state = useSelector((state) => {
    return {
      playList: state.getIn(['player', 'playList']),
      currentSong: state.getIn(['player', 'currentSong']),
      currentLyric: state.getIn(['player', 'currentLyric']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex'])
    }
  }, shallowEqual)
  const radioRef = useRef()
  const initPlay = useRef(false)
  const dispatch = useDispatch()
  useEffect(() => {
    radioRef.current.src = getPlayUrl(state.currentSong.id)
    dispatch(getLyric(state.currentSong.id))
    if (initPlay.current) {
      radioRef.current
        .play()
        .then(() => {
          setIsPlay(true)
        })
        .catch((err) => {
          setIsPlay(false)
          message.error('播放失败，请尝试其他歌曲！')
        })
    } else {
      initPlay.current = true
    }
  }, [state.currentSong, dispatch])
  //  播放歌曲
  const changePlay = () => {
    setIsPlay(!isPlay)
    // 播放状态，执行暂停
    if (isPlay) {
      radioRef.current.pause()
    } else {
      radioRef.current.play().catch((err) => {
        setIsPlay(false)
        message.error('播放失败，请尝试其他歌曲！')
      })
    }
  }
  //   切换歌曲
  const changeSong = (type) => {
    const currentIndex = state.currentSongIndex
    switch (type) {
      case 'prev':
        if (currentIndex > 0) {
          dispatch(changeSongIndex(currentIndex - 1))
        } else {
          message.error('当前歌曲已是第一首！')
        }
        break
      case 'next':
        if (currentIndex < state.playList.length - 1) {
          dispatch(changeSongIndex(currentIndex + 1))
        } else {
          message.error('当前歌曲已是最后一首！')
        }
        break
      default:
        return '其他操作'
    }
  }
  //   播放歌曲时间变化
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime * 1000
    if (!isSliderChanging) {
      setCurrenTime(handleDurationTime(currentTime))
      const percent = parseInt((currentTime / state.currentSong.dt) * 100)
      setProgress(percent)
    }
    let i = 0
    while (i < state.currentLyric.length) {
      if (currentTime < state.currentLyric[i].time) {
        break
      }
      i++
    }
    const currentLyricIndex = i > 0 ? i - 1 : 0
    message.open({
      content: state.currentLyric[currentLyricIndex].content || '哦豁呐',
      duration: 0,
      key: 'lyric',
      className: 'lyric_message'
    })
  }
  //  进度条变化
  const handleSliderChange = useCallback(
    (val) => {
      const percent = val / 100
      const currentTime = (state.currentSong.dt * percent) / 1000
      radioRef.current.currentTime = currentTime
      setCurrenTime(handleDurationTime(currentTime * 1000))
      setProgress(val)
      setSliderChanging(true)
    },
    [state.currentSong.dt]
  )
  const afterSliderChange = useCallback(
    (val) => {
      const percent = val / 100
      const currentTime = (state.currentSong.dt * percent) / 1000
      radioRef.current.currentTime = currentTime
      setCurrenTime(handleDurationTime(currentTime * 1000))
      setProgress(val)
      setSliderChanging(false)
      if (!isPlay) {
        setIsPlay(true)
        radioRef.current.play()
      }
    },
    [state.currentSong.dt, isPlay]
  )
  return (
    <CBPlayerWrapper className="playbar_sprite">
      <div className="content">
        <span className="aliasName">{state.currentSong.al.name}</span>
        <div className="control">
          <StepBackwardOutlined
            className="btn"
            onClick={(e) => changeSong('prev')}
          />
          {isPlay ? (
            <PauseOutlined
              className="btn paused"
              onClick={(e) => changePlay()}
            />
          ) : (
            <CaretRightOutlined
              className="btn play"
              onClick={(e) => changePlay()}
            />
          )}
          <StepForwardOutlined
            className="btn"
            onClick={(e) => changeSong('next')}
          />
        </div>
        <div className="playBox">
          <img
            src={state.currentSong.al && state.currentSong.al.picUrl}
            alt=""
            className="image"
          />
          <div className="playInfo">
            <div className="info">
              <span className="songName">
                {state.currentSong && state.currentSong.name}
              </span>
              <span className="name">
                {state.currentSong.ar && state.currentSong.ar[0].name}
              </span>
            </div>
            <Slider
              value={progress}
              disabled={false}
              className="progressBar"
              tooltipVisible={false}
              onChange={handleSliderChange}
              onAfterChange={afterSliderChange}
            />
          </div>
          <div className="timeBox">
            <span className="currentTime">{currentTime}</span>
            <span>/</span>
            <span className="duration">
              {handleDurationTime(state.currentSong.dt)}
            </span>
          </div>
          <div className="actionBox">
            <i className="iconfont icon-favor"></i>
            <i className="iconfont icon-share"></i>
            <i className="iconfont icon-volume"></i>
            <i className="iconfont icon-Loop"></i>
            <i className="iconfont icon-playlist"></i>
          </div>
          <audio
            ref={radioRef}
            onTimeUpdate={(e) => {
              timeUpdate(e)
            }}
          ></audio>
        </div>
      </div>
    </CBPlayerWrapper>
  )
})
