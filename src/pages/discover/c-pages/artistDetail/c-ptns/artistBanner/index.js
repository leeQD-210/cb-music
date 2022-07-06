import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ArtistBannerWrapper } from './style'
export default memo(function ArtistBanner() {
  const state = useSelector(
    (state) => ({
      artistDetail: state.getIn(['artistDetail', 'artistDetail'])
    }),
    shallowEqual
  )
  return (
    <ArtistBannerWrapper bgUrl={state.artistDetail.picUrl}>
      <div className="artist_name">
        <span className="name">{state.artistDetail.name}</span>
        <span className="username">
          {state.artistDetail.alias && state.artistDetail.alias[0]}
        </span>
      </div>
      <div className="img_background">
      </div>
      {/* <img src={state.artistDetail.picUrl} alt="" className="img" /> */}
    </ArtistBannerWrapper>
  )
})
