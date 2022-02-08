import styled from 'styled-components'
export const SearchDjCoverWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  .img {
    width: 150px;
    height: 150px;
  }
  .info {
    .title {
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-top: 5px;
    }
    .creator {
      display: flex;
      align-items: center;
      font-size: 12px;
      .by {
        margin-right: 5px;
        color: #999;
      }
      .nickname {
        max-width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #e26b0a;
      }
      .iconfont {
        margin-left: 5px;
        font-size: 20px;
      }
      .icon-male {
        color: #26A6E4;
      }
      .icon-female {
        color: #ffc8de;
      }
    }
  }
  &:not(:nth-child(5n + 1)) {
    margin-left: 28px;
  }
`
