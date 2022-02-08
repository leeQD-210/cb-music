import styled from 'styled-components'
export const SongsWrapCoverWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  height: 60px;
  background: #fff;
  .left {
    position: relative;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 16px;
      margin-right: 10px;
    }
    .img {
      width: 50px;
      height: 50px;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 26px;
      width: 50px;
      height: 50px;
      background-position: -160px 0;
    }
    .title {
      margin-left: 10px;
      font-size: 12px;
      width: 240px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
  .right {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 400px;
    .total,
    .collect,
    .play_count {
      color: #999;
      margin-right: 20px;
      font-size: 12px;
    }
    .play_count {
      width: 90px;
      margin-right: unset;
    }
    .total {
      width: 35px;
    }
    .creator {
      width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 15px;
    }
    .collect {
      width: 70px;
    }
  }
  &:nth-child(2n + 1) {
    background: #eee;
  }
`
