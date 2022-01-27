import React, { useState, memo } from 'react'
import { CBPlayerWrapper } from './style'
import { Slider } from 'antd'
import {
  StepBackwardOutlined,
  CaretRightOutlined,
  PauseOutlined,
  StepForwardOutlined
} from '@ant-design/icons'
export default memo(function CBPlayer() {
  const [isPlay, setIsPlay] = useState(false)
  return (
    <CBPlayerWrapper className="playbar_sprite">
      <div className="content">
        <div className="control">
          <StepBackwardOutlined className="btn" />
          {isPlay ? (
            <PauseOutlined
              className="btn paused"
              onClick={(e) => setIsPlay(!isPlay)}
            />
          ) : (
            <CaretRightOutlined
              className="btn play"
              onClick={(e) => setIsPlay(!isPlay)}
            />
          )}
          <StepForwardOutlined className="btn" />
        </div>
        <div className="playBox">
          <img
            src={require('@/assets/img/download0.png')}
            alt=""
            className="image"
          />
          <div className="playInfo">
            <div className="info">
              <span className="songName">有何不可</span>
              <span className="name">许嵩</span>
            </div>
            <Slider defaultValue={30} disabled={false} className='progressBar' tooltipVisible={false}/>
          </div>
          <div className="timeBox">
            <span className="currentTime">0:0</span>
            <span>/</span>
            <span className="duration">4:01</span>
          </div>
          <div className="actionBox">
              <i className='iconfont icon-favor'></i>
              <i className='iconfont icon-share'></i>
              <i className='iconfont icon-volume'></i>
              <i className='iconfont icon-Loop'></i>
              <i className='iconfont icon-playlist'></i>
          </div>
        </div>
      </div>
    </CBPlayerWrapper>
  )
})
