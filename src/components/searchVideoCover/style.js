import styled from 'styled-components'
export const VideoCoverWrapper = styled.div`
  position: relative;
  width: 159px;
  margin-bottom: 20px;
  margin-left: 17px;
  &:nth-child(5n + 1) {
    margin-left: 0;
  }
  .img {
    width: 159px;
    height: 90px;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    .title {
      display: flex;
      align-items: center;
      .icon_mv {
        display: inline-block;
        width: 26px;
        height: 16px;
        background-position: -270px -480px;
        margin-right: 3px;
      }
      .name {
        width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 600;
      }
    }
    .creator {
      .by {
        color: #e26b0a;
        margin-right: 3px;
      }
      .creator_name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .duration {
    position: absolute;
    top: 70px;
    left: 5px;
    color: #fff;
  }
  .play_count {
    position: absolute;
    top: 70px;
    right: 5px;
    color: #fff;
    .video {
      display: inline-block;
      width: 15px;
      height: 10px;
      background-position: -60px -310px;
      margin-right: 3px;
    }
  }
`
