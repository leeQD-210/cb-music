import styled from 'styled-components';
export const CommentItemWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
  .img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  .info {
    width: 622px;
    .content_wrap {
      .user_name {
        color: #e26b0a;
        font-size: 12px;
      }
      .content {
        font-size: 12px;
        white-space: wrap;
      }
      .reply_wrap {
        position: relative;
        background-color: #f4f4f4;
        border: 1px solid #dedede;
        padding: 8px;
        margin-top: 20px;
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: -15px;
          left: 25px;
          width: 0;
          height: 0;
          border: 8px solid transparent;
          border-bottom-color: #f4f4f4;
        }
        .reply_name {
          color: #e26b0a;
          font-size: 12px;
        }
        .reply_content {
          font-size: 12px;
          color: #666;
        }
      }
    }
    .action_wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      .comment_time {
        font-size: 12px;
        color: #999;
      }
      .action {
        .like {
          position: relative;
          margin-right: 20px;
          &::after {
            content: '';
            display: block;
            position: absolute;
            top: 4px;
            right: -10px;
            width: 1px;
            height: 13px;
            background-color: #ccc;
          }
          .liked {
            color: #e26b0a;
          }
          .like_count {
            margin-left: 5px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;
