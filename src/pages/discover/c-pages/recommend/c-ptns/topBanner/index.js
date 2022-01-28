import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { Carousel } from 'antd'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getBanner } from '../../store/actionCreator'
import { TopBannerWrapper, BannerRight, BannerControl } from './style'

export default memo(function () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dispatch = useDispatch()
  // 保存定时器实例
  let timer = useRef()
  useEffect(() => {
    dispatch(getBanner())
    return () => {
      clearTimeout(timer.current)
    }
  }, [dispatch, timer])
  const carouselRef = useRef()
  const state = useSelector(
    (state) => ({ banners: state.getIn(['recommend', 'banners']) }),
    shallowEqual
  )
  const changeBg = useCallback(
    (from, to) => {
      timer.current = setTimeout(() => {
        setCurrentIndex(to)
      }, 0)
    },
    [setCurrentIndex]
  )
  const bgImage =
    state.banners.length > 0 &&
    state.banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  const rightImage = require(`@/assets/img/download${currentIndex % 10}.png`)
  return (
    <TopBannerWrapper bgImage={bgImage}>
      <div className="content">
        <Carousel
          autoplay
          effect="fade"
          className="carousel"
          ref={carouselRef}
          beforeChange={changeBg}
        >
          {state.banners.map((item, index) => {
            return (
              <div key={item.url}>
                <img src={item.imageUrl} alt="" className="image" />
              </div>
            )
          })}
        </Carousel>
        <BannerRight rightImage={rightImage}></BannerRight>
        <button
          className="btn_left btn"
          onClick={(e) => carouselRef.current.prev()}
        ></button>
        <button
          className="btn_right btn"
          onClick={(e) => carouselRef.current.next()}
        ></button>
      </div>
    </TopBannerWrapper>
  )
})
