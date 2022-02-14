import styled from 'styled-components';
export const CommentWrapper = styled.div`
  padding: 0 20px;
  .comment_title {
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 2px solid #e26b0a;
    .title {
      font-size: 18px;
      font-weight: 600;
      margin-right: 15px;
    }
    .comment_count {
      font-size: 12px;
      color: #999;
    }
  }
  .comment_commit {
    display: flex;
    align-items: top;
    margin-top: 10px;
    .user_avatar {
      width: 50px;
      height: 50px;
      margin-right: 16px;
    }
    .comment_textarea {
      width: 650px;
      height: 60px;
      border: 1px solid #ccc;
    }
  }
  .comment_hot,
  .comment_new {
    width: 100%;
    margin-top: 20px;
    .hot_title {
      padding-bottom: 5px;
      border-bottom: 1px solid #ccc;
      .title {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;
