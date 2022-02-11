import React, { memo } from 'react'
import { RecommendShowWrapper } from './style'
import classnames from 'classnames'
export default memo(function RecommendShow(props) {
  const { info, title } = props
  const fullScore = info[0].score
  return (
    <RecommendShowWrapper>
      <div className="top">
        <span className="top_title">{title}</span>
        <a href="/" className="more">
          更多&nbsp;&gt;
        </a>
      </div>
      <div className="content">
        {info.length > 0 &&
          info.map((item) => {
            const rank = item.rank || ''
            const lastRank = item.lastRank || ''
            if (item.program) {
              item = item.program
            }
            return (
              <div className="item" key={item.id}>
                {rank && (
                  <div className="index">
                    <span className={classnames('rank', { ranktop: rank < 4 })}>
                      {rank}
                    </span>
                    {lastRank > 0 && (
                      <span
                        className={classnames('rankChange', {
                          rankup: lastRank - rank > 0,
                          rankdown: lastRank - rank < 0,
                          rankline: lastRank === rank
                        })}
                      >
                        <i
                          className={classnames('iconfont', {
                            'icon-up-arrow': lastRank - rank > 0,
                            'icon-down-arrow': lastRank - rank < 0
                          })}
                        ></i>
                        {lastRank === rank && <span className="line">-</span>}
                        {Math.abs(rank - lastRank)}
                      </span>
                    )}
                    {lastRank < 0 && <span className="new">new</span>}
                  </div>
                )}
                <div className="info">
                  <img src={item.coverUrl} alt="" className="img" />
                  <div className="info_right">
                    <span className="title">{item.mainSong.name}</span>
                    <span className="creator">{item.radio.name}</span>
                  </div>
                </div>
                <div className="feature">
                  {!item.program && (
                    <div className="category">{item.radio.category}</div>
                  )}
                </div>
              </div>
            )
          })}
      </div>
    </RecommendShowWrapper>
  )
})
