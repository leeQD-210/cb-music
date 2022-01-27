import React, { memo } from 'react'
import { RankListWrapper, ListWrapper } from './style'
import PropTypes from 'prop-types'
const RankList = memo((props) => {
  const { title, info, stripe } = props
  return (
    <RankListWrapper>
      <div className="header">
        <img src={info.imgUrl} alt="" className="image" />
        <a href="/todo" className='sprite_cover image_cover'>{}</a>
        <div className="info">
          <span className="title">{title}</span>
          <span className="control">
            <button className="btn sprite_02 play"></button>
            <button className="btn sprite_02 favor"></button>
          </span>
        </div>
      </div>
      <ListWrapper stripe={stripe}>
        {info.tracks&&info.tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="item" key={item.id}>
              {
                <>
                  <span className='index'>{index + 1}</span>
                  <span className='name'>{item.name}</span>
                  <span className='action'>
                      <button className='btn sprite_02 play'></button>
                      <button className='btn sprite_icon2 addto'></button>
                      <button className='btn sprite_02 favor'></button>
                  </span>
                </>
              }
            </div>
          )
        })}
        <div className="item bottom">
          <a href="/todo">查看全部 &gt;</a>
        </div>
      </ListWrapper>
    </RankListWrapper>
  )
})
RankList.defaultProps = {
  title: '',
  info: {},
  stripe: true
}
RankList.PropTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.object,
  stripe: PropTypes.bool
}
export default RankList
