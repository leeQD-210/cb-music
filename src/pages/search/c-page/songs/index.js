import React, { memo, useEffect,useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { searchSongs } from '../../store/actionCreator';
import { SongsWrapper } from './style';
import { handleDurationTime } from '@/utils';
import { message, Pagination } from 'antd';
import { changeSong } from '../../../player/store/actionCreator';
export default memo(function SearchSongs(props) {
  const keywords = new URLSearchParams(props.location.search).get('keywords');
  const [pageNo, setPageNo] = useState(1);
  const state = useSelector(
    (state) => ({
      searchSongs: state.getIn(['search', 'searchSongs']),
      total: state.getIn(['search', 'total']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (keywords) {
      dispatch(searchSongs(keywords));
    }
  }, [dispatch, keywords]);
  const handlePageChange = (page) => {
    setPageNo(page)
    dispatch(searchSongs(keywords, page));
  };
  const handlePlay = (id) => {
    dispatch(changeSong(id));
  };
  const clickFavor = () => {
    message.error('功能尚未开发，别瞎点');
  };
  const clickDownload = (e) => {
    message.error('功能尚未开发，别瞎点');
  };
  const clickShare = () => {
    message.error('功能尚未开发，别瞎点');
  };
  return (
    <SongsWrapper>
      <div className="content">
        {state.searchSongs &&
          state.searchSongs.map((item) => {
            return (
              <div className="item" key="item.id">
                <div className="left">
                  <i
                    className="iconfont icon-playfill"
                    onClick={(e) => {
                      handlePlay(item.id);
                    }}
                  ></i>
                  <span>{item.name}</span>
                </div>
                <div className="action_box">
                  <i className="iconfont icon-favor" onClick={clickFavor}></i>
                  <i className="iconfont icon-share" onClick={clickShare}></i>
                  <i
                    className="iconfont icon-download"
                    onClick={clickDownload}
                  ></i>
                </div>
                <div className="right">
                  <span className="artist_name">{item.artists[0].name}</span>
                  <span className="album_name">{item.album.name}</span>
                  <span className="duration">
                    {handleDurationTime(item.duration || '')}
                  </span>
                </div>
              </div>
            );
          })}
        <Pagination
          defaultCurrent={pageNo}
          total={state.total}
          defaultPageSize={12}
          showSizeChanger={false}
          onChange={handlePageChange}
          className="pagination_wrapper"
        ></Pagination>
      </div>
    </SongsWrapper>
  );
});
