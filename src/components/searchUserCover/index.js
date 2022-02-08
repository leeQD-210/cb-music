import React, { memo } from 'react'
import { SearchUserCoverWrapper } from './style'
import classNames from 'classnames'
export default memo(function SearchUserCover(props) {
  const { info } = props
  return (
    <SearchUserCoverWrapper>
      <div className="left">
        <img src={info && info.avatarUrl} alt="" className="img" />
        <a href="/abc" className="sprite_cover cover">
          {}
        </a>
        <div className="user_info">
          <div className="name_info">
            <span className="name">{info && info.nickname}</span>
            <i
              className={classNames('iconfont', {
                'icon-male': info && info.gender === 1,
                'icon-female': info && info.gender !== 1
              })}
            ></i>
          </div>
          <div className="discription">{info && info.signature}</div>
        </div>
      </div>
      <div className="right">
        <a href="/adc" className="sprite_button2 follow">
          关注
        </a>
        <span className="playlist">歌单：{2}</span>
        <span className="follower">粉丝：{110000}</span>
      </div>
    </SearchUserCoverWrapper>
  )
})
