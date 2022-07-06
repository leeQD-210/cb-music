import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { ArtistDescWrapper } from './style'
import { getArtistDescAction } from '../../store/actionCreator'
export default memo(function ArtistDesc(props) {
  const { artistId } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtistDescAction(artistId))
  }, [dispatch, artistId])
  const state = useSelector(
    (state) => ({
      artistDesc: state.getIn(['artistDetail', 'artistDesc'])
    }),
    shallowEqual
  )
  return (
    <ArtistDescWrapper>
      {state.artistDesc.length > 0 &&
        state.artistDesc.map((item) => {
          return (
            <div className="item" key={item.ti}>
              <h2 className="title">{item.ti}</h2>
              {item.txt.split('\n').map((sItem, index) => {
                return (
                  <p key={index} className="paragraph">
                    {sItem}
                  </p>
                )
              })}
            </div>
          )
        })}
      {state.artistDesc.length === 0 && <div className="empty">啥也没有哦</div>}
    </ArtistDescWrapper>
  )
})
