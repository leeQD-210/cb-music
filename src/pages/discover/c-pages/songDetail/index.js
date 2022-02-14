import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { SongDetailWrapper } from './style';
import SongInfo from './c-ptns/songInfo';
import Comment from './c-ptns/comment';
import SimiSongList from './c-ptns/simiSong';
import SimiUserList from './c-ptns/simiUsers';
export default memo(function SongDetail() {
  return (
    <SongDetailWrapper>
      <div className="left">
        <SongInfo></SongInfo>
        <Comment></Comment>
      </div>
      <div className="right">
				<SimiSongList></SimiSongList>
				<SimiUserList></SimiUserList>
      </div>
    </SongDetailWrapper>
  );
});
