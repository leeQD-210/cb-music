import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { CBArtistsWrapper } from './style';
import ArtistNavLeft from './c-ptns/navLeft';
import ArtistList from './c-ptns/artistList';
import { useDispatch } from 'react-redux';
export default memo(function CBArtists() {
  return (
    <CBArtistsWrapper>
			<ArtistNavLeft></ArtistNavLeft>
			<ArtistList></ArtistList>
    </CBArtistsWrapper>
  );
});
