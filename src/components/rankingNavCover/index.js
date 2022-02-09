import React, { memo } from 'react'
import { NavCoverWrapper } from './style'
import classnames from 'classnames'
export default memo(function RankingNavCover(props) {
  const { info, currentId, click } = props
  return (
    <NavCoverWrapper>
      <div
        className={classnames('item', { current: info.id === currentId })}
        key={info.id}
        onClick={(e) => {
          click(info.id)
        }}
      >
        <img src={info.coverImgUrl} alt="" className="img" />
        <a href="/abc" className="sprite_cover cover">
          {}
        </a>
        <div className="info">
          <span className="name">{info.name}</span>
          <span className="update">{info.updateFrequency}</span>
        </div>
      </div>
    </NavCoverWrapper>
  )
})
