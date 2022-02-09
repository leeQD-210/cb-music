import React, { memo } from 'react';
import { ListCoverWrapper } from './style';
import { handleDurationTime } from '@/utils';
import { changeSong } from '@/pages/player/store/actionCreator';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
export default memo(function RankingListCover(props) {
  const { info, index } = props;
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(changeSong(id));
  };
  return (
    <ListCoverWrapper
      onClick={(e) => {
        handleClick(info.id);
      }}
    >
      <div className={classnames('index', { hot: index < 3 })}>{index + 1}</div>
      <div className="songs_info">
        {index < 3 && <img src={info.al.picUrl} alt="" className="img" />}
        <i className="iconfont icon-playfill"></i>
        <span className="song_name">{info.name}</span>
        <span className="alia">{info.alia[0] ? '-' + info.alia[0] : ''}</span>
      </div>
      <div className="duration">{handleDurationTime(info.dt)}</div>
      <div className="artist">{info.ar[0].name}</div>
    </ListCoverWrapper>
  );
});
