import React, { memo, useEffect, useState } from 'react';
import { NewAlbumsWrapper } from './style';
import { shallowEqual, useSelector } from 'react-redux';
import AlbumCover from '@/components/albumCover';
import { getNewAlbums } from '../../../recommend/store/actionCreator';
import { useDispatch } from 'react-redux';
import { Pagination } from 'antd';
export default memo(function NewAlbums() {
  const [pageNo, setPageNo] = useState(1);
  const state = useSelector((state) => {
    return {
      newAlbums: state.getIn(['recommend', 'newAlbums']),
      newAlbumsTotal: state.getIn(['recommend', 'newAlbumsTotal']),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbums(30, pageNo, 'new'));
  }, [dispatch, pageNo]);
  const handlePageChange = (pageNo) => {
    setPageNo(pageNo);
  };
  return (
    <NewAlbumsWrapper>
      <div className="top">
        <span className="title">全部新碟</span>
      </div>
      <div className="content">
        {state.newAlbums.length > 0 &&
          state.newAlbums.map((item) => {
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
        {state.newAlbums.length > 0 && (
          <div className="pagination_wrapper">
            <Pagination
              defaultCurrent={pageNo}
              total={state.newAlbumsTotal}
              onChange={handlePageChange}
              showSizeChanger={false}
              defaultPageSize={20}
            ></Pagination>
          </div>
        )}
      </div>
    </NewAlbumsWrapper>
  );
});
