import React, { memo, useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HotAlbumsWrapper } from './style'
import { getNewAlbums } from '@/pages/discover/c-pages/recommend/store/actionCreator'
import SimiItem from '@/components/simiItem'
import { useHistory } from 'react-router-dom'
export default memo(function HotAlbums() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbums(10, 1, 'hot'))
  }, [dispatch])
  const state = useSelector((state) => {
    return {
      hotAlbums: state.getIn(['recommend', 'hotAlbums'])
    }
  }, shallowEqual)
  const history = useHistory()
  const clickItem = useCallback(
    (id) => {
      history.push(`/discover/albumDetail?id=${id}`)
    },
    [history]
  )
  return (
    <HotAlbumsWrapper>
      <div className="top_title">
        <span>其他热门专辑</span>
        <a href="#/discover/albums">查看更多</a>
      </div>
      {state.hotAlbums.length > 0 &&
        state.hotAlbums.map((item) => {
          return (
            <SimiItem
              key={item.id}
              imgUrl={item.picUrl}
              id={item.id}
              name={item.name}
              desc={item.description}
              handleClick={clickItem}
            ></SimiItem>
          )
        })}
    </HotAlbumsWrapper>
  )
})
