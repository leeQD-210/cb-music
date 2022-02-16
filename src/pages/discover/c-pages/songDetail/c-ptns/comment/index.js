import React, { memo, useEffect, useState } from 'react';
import { CommentWrapper } from './style';
import CommentItem from '@/components/commentItem';
import { shallowEqual, useSelector } from 'react-redux';
import { getComment } from '../../../store/actionCreator';
import { useDispatch } from 'react-redux';
import { Pagination } from 'antd';
export default memo(function Comment() {
  const [pageNo, setPageNo] = useState(1);
  const state = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong']),
      songHotComments: state.getIn(['comment', 'songHotComments']),
      songComments: state.getIn(['comment', 'songComments']),
      songCommentsTotal: state.getIn(['comment', 'songCommentsTotal']),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComment(state.currentSong.id, 20, pageNo, 'song'));
  }, [dispatch, state.currentSong, pageNo]);
  const handlePageChange = (pageNo) => {
    setPageNo(pageNo);
  };
  return (
    <CommentWrapper>
      <div className="comment_title">
        <span className="title">评论</span>
        <span className="comment_count">共{state.songCommentsTotal}条评论</span>
      </div>
      <div className="comment_commit">
        <img
          src={require('@/assets/img/download1.png')}
          alt=""
          className="user_avatar"
        />
        <textarea
          name=""
          id=""
          cols="100"
          rows="10"
          className="comment_textarea"
        ></textarea>
      </div>
      <div className="comment_hot">
        <div className="hot_title">
          <span className="title">精彩评论</span>
        </div>
        {state.songHotComments.length > 0 &&
          state.songHotComments.map((item) => {
            return <CommentItem key={item.commentId} info={item}></CommentItem>;
          })}
      </div>
      <div className="comment_new">
        <div className="hot_title">
          <span className="title">最新评论</span>
        </div>
        {state.songComments.length > 0 &&
          state.songComments.map((item) => {
            return <CommentItem key={item.commentId} info={item}></CommentItem>;
          })}
      </div>
      {state.songComments.length > 0 && (
        <div className="pagination_wrapper">
          <Pagination
            defaultCurrent={pageNo}
            total={state.songCommentsTotal}
            onChange={handlePageChange}
            showSizeChanger={false}
            defaultPageSize={20}
          ></Pagination>
        </div>
      )}
    </CommentWrapper>
  );
});
