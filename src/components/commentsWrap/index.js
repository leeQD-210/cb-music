import React, { memo } from 'react'
import { CommentWrapper } from './style'
import CommentItem from '@/components/commentItem'
import { Pagination } from 'antd'
export default memo(function Comment(props) {
  // const handlePageChange = (pageNo) => {
  //   setPageNo(pageNo);
  // };
  const { hotComments, comments, commentsTotal, pageChange, pageNo } = props
  return (
    <CommentWrapper>
      <div className="comment_title">
        <span className="title">评论</span>
        <span className="comment_count">共{commentsTotal}条评论</span>
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
        {hotComments.length > 0 &&
          hotComments.map((item) => {
            return <CommentItem key={item.commentId} info={item}></CommentItem>
          })}
      </div>
      <div className="comment_new">
        <div className="hot_title">
          <span className="title">最新评论</span>
        </div>
        {comments.length > 0 &&
          comments.map((item) => {
            return <CommentItem key={item.commentId} info={item}></CommentItem>
          })}
      </div>
      {comments.length > 0 && (
        <div className="pagination_wrapper">
          <Pagination
            defaultCurrent={pageNo}
            total={commentsTotal}
            onChange={pageChange}
            showSizeChanger={false}
            defaultPageSize={20}
          ></Pagination>
        </div>
      )}
    </CommentWrapper>
  )
})
