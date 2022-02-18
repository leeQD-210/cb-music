import styled from 'styled-components'
export const CBVideoWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  .mv_title {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    padding-left: 7px;
    .info_wrap {
      .mv_icon {
        display: inline-block;
        width: 30px;
        height: 20px;
        line-height: 20px;
        padding: 0 3px;
        color: #e26b0a;
        border: 1px solid #e26b0a;
        margin-right: 10px;
      }
      .mv_name {
        font-size: 20px;
        font-weight: 600;
        margin-right: 5px;
        /* max-width: 415px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; */
      }
      .mv_creator {
        font-size: 13px;
        color: #999;
        margin-bottom: 10px;
        padding-left: 5px;
        .artist {
          &:not(:last-child) {
            margin-right: 5px;
            &::after {
              margin-left: 3px;
              content: '/';
            }
          }
        }
      }
    }
  }
  .action_wrap {
    display: flex;
    justify-content: space-between;
    width: 250px;
    .iconfont {
      font-size: 16px;
      cursor: pointer;
    }
    .count {
      font-size: 12px;
    }
    .comment,
    .favor,
    .share {
      display: flex;
      align-items: center;
    }
  }
  .mv_video {
    width: 677px;
    height: 380px;
  }
`
