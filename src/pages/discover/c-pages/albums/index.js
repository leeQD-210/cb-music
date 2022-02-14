import React, { memo } from 'react';
import { CBAlbumsWrapper } from './style';
import TopAlbums from './c-ptns/topAlbums';
import NewAlbums from './c-ptns/newAlbums';
export default memo(function CBAlbums () {
  return (
    <CBAlbumsWrapper>
      <TopAlbums></TopAlbums>
      <NewAlbums></NewAlbums>
    </CBAlbumsWrapper>
  );
});
