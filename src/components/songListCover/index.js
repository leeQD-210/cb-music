import React, { memo } from 'react';
import { CoverWrapper } from './style';
import { handleCount } from '@/utils';
export default memo(function SongListCover(props) {
  const { info } = props;
  return (
    <CoverWrapper>
      <img src={info.picUrl} alt="" className="image" />
      <div className="iconWrapper sprite_cover">
        <span className="icon_left">
          <i className="sprite_icon headset"></i>
          <span className="count">{handleCount(info.playCount)}</span>
        </span>
        <span className='icon_right'>
          <i className="sprite_icon play"></i>
        </span>
      </div>
      <span className="name">{info.name}</span>
      <span className="writer">by&nbsp;{info.copywriter}</span>
    </CoverWrapper>
  );
});
