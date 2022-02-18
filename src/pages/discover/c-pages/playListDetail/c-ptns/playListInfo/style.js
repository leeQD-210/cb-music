import styled from 'styled-components'
export const PlayListInfoWrapper = styled.div`
  display: flex;
  padding: 30px 25px;
  .img_wrap {
    width: 208px;
    height: 208px;
    border: 1px solid #e26b0a;
    padding: 3px;
    margin-right: 20px;
    .img {
      width: 200px;
      height: 200px;
    }
  }
  .info_wrap {
    width: 100%;
    .title_wrap {
      margin-bottom: 10px;
      .icon {
        display: inline-block;
        width: 54px;
        height: 24px;
        background-position: 0 -243px;
      }
      .title {
        margin-left: 10px;
        font-size: 24px;
        font-weight: 600;
      }
    }
    .creator_wrap {
      display: flex;
      align-items: center;
      .avatar {
        width: 30px;
        height: 30px;
        margin-right: 20px;
      }
      .name {
        color: #e26b0a;
        font-size: 13px;
        margin-right: 20px;
        cursor: pointer;
      }
      .create_time {
        color: #999;
        font-size: 13px;
      }
    }
    .action_wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px 0;
      background-color: #fafafa;
      padding: 0 10px;
      .iconfont {
        font-size: 18px;
        cursor: pointer;
      }
      .favor,
      .share,
      .comment {
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .count {
          font-size: 12px;
          color: #999;
        }
      }
    }
    .tips_wrap {
      color: #666;
      margin-bottom: 10px;
      .tips {
        font-size: 13px;
        margin-right: 5px;
      }
      .tips_item {
        display: inline-block;
        border: 1px solid #ccc;
        padding: 0 10px;
        height: 23px;
        background-color: #eee;
        border-radius: 10px;
        margin-right: 10px;
        text-align: center;
        line-height: 22px;
        cursor: pointer;
      }
    }
    .desc_wrap {
      color: #666;
      .desc {
        margin-right: 5px;
      }
      .content {
        color: #666;
      }
    }
  }
`
