import React, { memo, useEffect, useState } from 'react';
import { SimiUserListWrapper } from './style';
import { getSongListenUser } from '@/api/songDetail';
import { shallowEqual, useSelector } from 'react-redux';
import { addSong, changeSong } from '@/pages/player/store/actionCreator';
import { useDispatch } from 'react-redux';
export default memo(function SimiUserList() {
  const state = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong']),
    };
  }, shallowEqual);
  const [simiUsers, setUserSongs] = useState([]);
  // useEffect(() => {
  //   getSongListenUser(state.currentSong.id).then((res) => {
  //     console.log(res);
  //   });
  // }, [state.currentSong]);
  return (
    <SimiUserListWrapper>
      <div className="top">
        <span className="title">听过这首歌的用户</span>
      </div>
      <div className="content">
        {simiUsers.length > 0 &&
          simiUsers.map((item) => {
            return (
              <div key={item.id} className="item">
                <img src={item.artists[0].picUrl} alt="" className="img" />
              </div>
            );
          })}
        {simiUsers.length === 0 && <span>请先登录！！！</span>}
      </div>
    </SimiUserListWrapper>
  );
});
