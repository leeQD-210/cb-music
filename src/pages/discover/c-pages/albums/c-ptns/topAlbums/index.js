import React, { memo, useEffect } from 'react';
import { TopAlbumsWrapper } from './style';
import AlbumCover from '@/components/albumCover';
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getNewAlbums } from '../../../recommend/store/actionCreator';
export default memo(function TopAlbums() {
  const state = useSelector((state) => {
    return {
      hotAlbums: state.getIn(['recommend', 'hotAlbums']),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbums(10, 1, 'hot'));
  }, [dispatch]);
  return (
    <TopAlbumsWrapper>
      <div className="top">
        <span className="title">热门新碟</span>
      </div>
      <div className="content">
        {state.hotAlbums.length > 0 &&
          state.hotAlbums.map((item) => {
            return (
              <AlbumCover
                info={item}
                imgWidth={'130px'}
                imgHeight={'130px'}
                positionHeight={'-845px'}
                marginLeft={'46px'}
								coverWidth={'153px'}
								key={item.id}
              ></AlbumCover>
            );
          })}
      </div>
    </TopAlbumsWrapper>
  );
});
