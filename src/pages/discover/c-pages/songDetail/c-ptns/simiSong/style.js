import styled from 'styled-components';
export const SimiSongListWrapper = styled.div`
  .top {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    .title {
      font-size: 14px;
      font-weight: 600;
    }
  }
  .content {
    padding-top: 20px;
    .item {
      display: flex;
      margin-bottom: 20px;
      .img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .song_info {
        display: flex;
        align-items: center;
        .info {
          display: flex;
          flex-direction: column;
          width: 130px;
          .name,
          .artist {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .action_wrap {
          .iconfont {
            cursor: pointer;
          }
          .icon-playfill {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
