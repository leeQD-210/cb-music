import React, { memo, useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { TopArtistWrapper } from './style'
import { getTopArtistAction } from '../../store/actionCreator'
import SimiItem from '@/components/simiItem'
import { useHistory } from 'react-router-dom'
export default memo(function TopArtist() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopArtistAction(20))
  }, [dispatch])
  const state = useSelector(
    (state) => ({
      topArtist: state.getIn(['artistDetail', 'topArtist'])
    }),
    shallowEqual
  )
  const history = useHistory()
  const clickArtistItem = useCallback(
    (id) => {
      history.push(`/discover/artistDetail/?id=${id}`)
    },
    [history]
  )
  return (
    <TopArtistWrapper>
      <div className="top_title">热门歌手</div>
      <div className="content">
        {state.topArtist.length > 0 &&
          state.topArtist.map((item) => {
            return (
              <SimiItem
                imgUrl={item.picUrl}
                key={item.id}
                name={item.name}
                desc={item.alias && item.alias[0]}
                id={item.id}
                handleClick={clickArtistItem}
              ></SimiItem>
            )
          })}
      </div>
    </TopArtistWrapper>
  )
})
