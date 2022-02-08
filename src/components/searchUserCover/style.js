import styled from 'styled-components'
export const SearchUserCoverWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 5px 20px;
  &:nth-child(2n ) {
    background: #F2F2F2;
  }
  .left {
    display: flex;
    position: relative;
    .img {
      width: 50px;
      height: 50px;
    }
   .cover {
      position: absolute;
      width: 50px;
      height: 50px;
      top: 0;
      left: 0;
      background-position: -160px 0;
    }
    .user_info {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .name_info {
        font-size: 18px;
        .iconfont {
          margin-left: 5px;
          font-size: 20px;
        }
        .icon-male {
          color: #26a6e4;
        }
      }
      .discription {
        width: 400px;
        font-size: 12px;
        color: #999;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .follow {
      width: 64px;
      height: 27px;
      background-position: 0 -990px;
      line-height: 25px;
      padding-left: 25px;
      margin-right: 40px;
    }
    .playlist {
      width: 45px;
      font-size: 12px;
      color: #999;
      margin-right: 40px;
    }
    .follower {
      width: 100px;
      font-size: 12px;
      color: #999;
      text-align: center;
    }
  }
`
