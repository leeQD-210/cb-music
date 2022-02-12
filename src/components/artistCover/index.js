import React, { memo } from 'react';
import { ArtistCoverWrapper } from './style';
export default memo(function ArtistCover(props) {
  const { info } = props;
  return (
    <ArtistCoverWrapper>
      <img src={info&&info.picUrl} alt="" className="img" />
      <div className="info">
        <span className="name">{info&&info.name}</span>
        <i className="iconfont icon-user"></i>
      </div>
    </ArtistCoverWrapper>
  );
});
