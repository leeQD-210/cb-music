import React, { memo } from 'react';
import { CommentItemWrapper } from './style';
import { handleTimeStamp } from '@/utils';
import classNames from 'classnames';
export default memo(function CommentItem(props) {
  const { info } = props;
  return (
    <CommentItemWrapper>
      <img src={info.user.avatarUrl} alt="" className="img" />
      <div className="info">
        <div className="content_wrap">
          <span className="user_name">
            {info.user.nickname}&nbsp;&nbsp;:&nbsp;&nbsp;
          </span>
          <span className="content">{info.content}</span>
          {info.beReplied.length > 0 && (
            <div className="reply_wrap">
              <span className="reply_name">
                {info.beReplied[0].user.nickname}&nbsp;&nbsp;:&nbsp;&nbsp;
              </span>
              <span className="reply_content">{info.beReplied[0].content}</span>
            </div>
          )}
        </div>
        <div className="action_wrap">
          <span className="comment_time">
            {info.time && handleTimeStamp(info.time, 'time')}
          </span>
          <span className="action">
            <span className="like">
              <i
                className={classNames('iconfont', 'icon-liked', {
                  liked: info.liked,
                })}
              ></i>
              <span className="like_count">({info.likedCount || 0})</span>
            </span>
            <span className="replay">回复</span>
          </span>
        </div>
      </div>
    </CommentItemWrapper>
  );
});
