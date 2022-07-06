import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { ArtistMvWrapper } from './style'
import { getArtistMvAction } from '../../store/actionCreator'
import SearchVideoCover from '@/components/searchVideoCover'
export default memo(function ArtistMv(props) {
  const { artistId } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtistMvAction(artistId))
  }, [dispatch, artistId])
  const state = useSelector(
    (state) => ({
      artistMv: state.getIn(['artistDetail', 'artistMv'])
    }),
    shallowEqual
  )
  return (
    <ArtistMvWrapper>
      {state.artistMv.length > 0 &&
        state.artistMv.map((item) => {
          return (
            <SearchVideoCover
              info={item}
              marginLeft={'16px'}
              lineNums={4}
              key={item.id}
            ></SearchVideoCover>
          )
        })}
      {state.artistMv.length === 0 && <div className="empty">啥也没有哦</div>}
    </ArtistMvWrapper>
  )
})
