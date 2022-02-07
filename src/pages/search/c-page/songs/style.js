import styled from 'styled-components'
export const SongsWrapper = styled.div`
  padding: 10px 0;
  .content {
    width: 100%;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 43px;
      padding: 0 50px;
      .left {
        .iconfont {
          margin-right: 10px;
          cursor: pointer;
        }
      }
      .right {
        width: 300px;
        display: flex;
        .artist_name {
          width: 100px;
          margin-right: 10px;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .album_name {
          width: 150px;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .duration {
          width: 50px;
          margin-left: 20px;
          text-align: center;
        }
      }
      .action_box {
        display: none;
        .iconfont {
          font-size: 18px;
          margin-right: 10px;
        }
      }
      &:hover {
        cursor: pointer;
        .action_box {
          display: block;
        }
      }
      &:nth-child(2n + 1) {
        background-color: #eee;
      }
    }
    .pagination_wrapper {
      margin-top: 5px;
      text-align: right;
    }
    .not_found {
      width: 100%;
      text-align: center;
      font-size: 25px;
      font-weight: 600;
      margin-top: 200px;
      .iconfont {
        font-size: 25px;
        margin-right: 10px;
      }
    }
  }
`
