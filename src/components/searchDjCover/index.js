import React, { memo } from 'react'
import { SearchDjCoverWrapper } from './style'
import classnames from 'classnames'
export default memo(function SearchDjCover(props) {
  const { info } = props
  return (
    <SearchDjCoverWrapper>
      <img src={info && info.picUrl} alt="" className='img'/>
      <div className="info">
        <p className="title">{info && info.name}</p>
        <p className="creator">
          <span className="by">by</span>
          <span className='nickname'>{info && info.dj.nickname}</span>
          <i
            className={classnames('iconfont', {
              'icon-male': info && info.dj.gender === 1,
              'icon-female': info && info.dj.gender !== 1
            })}
          ></i>
        </p>
      </div>
    </SearchDjCoverWrapper>
  )
})
