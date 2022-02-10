import React, { memo } from 'react';
import { CoverWrapper } from './style';
import { handleCount } from '@/utils';
export default memo(function SongListCover(props) {
  const { info, rowNum, marginLeft } = props;
  return (
    <CoverWrapper rowNum={rowNum} marginLeft={marginLeft}>
      <img src={info.picUrl || info.coverImgUrl} alt="" className="image" />
      <div className="iconWrapper sprite_cover">
        <span className="icon_left">
          <i className="sprite_icon headset"></i>
          <span className="count">{handleCount(info.playCount)}</span>
        </span>
        <span className="icon_right">
          <i className="sprite_icon play"></i>
        </span>
      </div>
      <span className="name">{info.name}</span>
      <span className="writer">
        by&nbsp;{info.copywriter || info.creator.nickname}
      </span>
    </CoverWrapper>
  );
});
