import React, { memo } from 'react';
import { CoverWrapper } from './style';
export default memo(function AlbumCover(props) {
  const { info, coverWidth, imgWidth, imgHeight, positionHeight, marginLeft } =
    props;
  return (
    <CoverWrapper
      coverWidth={coverWidth}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      positionHeight={positionHeight}
      marginLeft={marginLeft}
    >
      <img src={info.picUrl} alt="" className="image" />
      <a href="/abc" className="sprite_cover cover">
        {}
      </a>
      <span className="name">{info.name}</span>
      <span className="artist_name">{info.artist.name}</span>
    </CoverWrapper>
  );
});
