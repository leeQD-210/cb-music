import React, { memo, useEffect, useState } from 'react';
import { CateListWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getPlayList } from '../../store/actionCreator';
import SongListCover from '@/components/songListCover';
import { Pagination } from 'antd';
export default memo(function CateList() {
  const [pageNo, setPageNo] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      playList: state.getIn(['catlist', 'playList']),
      currentCat: state.getIn(['catlist', 'currentCat']),
      playListTotal: state.getIn(['catlist', 'playListTotal']),
    };
  }, shallowEqual);
  useEffect(() => {
    dispatch(getPlayList('hot', state.currentCat, 30, pageNo));
  }, [dispatch, pageNo, state.currentCat]);
  const handlePageChange = (pageNo) => {
    setPageNo(pageNo);
  };
  return (
    <CateListWrapper>
      {state.playList.length > 0 &&
        state.playList.map((item) => {
          return (
            <SongListCover
              info={item}
              key={item.id}
              rowNum={5}
              marginLeft="60px"
              className="cover_item"
            ></SongListCover>
          );
        })}
      {state.playList.length > 0 && (
        <Pagination
          defaultCurrent={pageNo}
          total={state.playListTotal}
          defaultPageSize={30}
          showSizeChanger={false}
          onChange={handlePageChange}
          className="pagination_wrapper"
        ></Pagination>
      )}
    </CateListWrapper>
  );
});
