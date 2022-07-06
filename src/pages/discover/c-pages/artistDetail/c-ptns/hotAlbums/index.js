import React, { memo, useEffect } from 'react'
import { HotAlbumsWrapper } from './style'
import AlbumCover from '@/components/albumCover'
import { getArtistAlbumsAction } from '../../store/actionCreator'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
export default memo(function HotAlbums(props) {
  const { artistId } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtistAlbumsAction(artistId, 1, 30))
  }, [dispatch, artistId])
  const state = useSelector(
    (state) => ({
      hotAlbums: state.getIn(['artistDetail', 'hotAlbums'])
    }),
    shallowEqual
  )
  return (
    <HotAlbumsWrapper>
      {state.hotAlbums.length > 0 &&
        state.hotAlbums.map((item) => {
          return (
            <AlbumCover
              info={item}
              key={item.id}
              coverWidth={'153px'}
              imgWidth={'130px'}
              imgHeight={'130px'}
              positionHeight={'-845px'}
              marginLeft={'24px'}
              lineNums={4}
            ></AlbumCover>
          )
        })}
    </HotAlbumsWrapper>
  )
})
