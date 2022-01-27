import styled from 'styled-components'
export const CBPlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  background-color: #fddc6e;
  z-index: 999;
  .content {
    display: flex;
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    .control {
      display: flex;
      align-items: center;
      position: relative;
      top: 3px;
      .btn {
        font-size: 24px;
      }
      .play,
      .paused {
        margin: 0 10px;
      }
    }
    .playBox {
      display: flex;
      align-items: center;
      margin-left: 30px;
      .image {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .playInfo {
        display: flex;
        flex-direction: column;
        .info {
          .songName {
            font-weight: 600;
            margin-right: 10px;
          }
          .name {
            color: #666;
            font-size: 12px;
          }
        }
        .progressBar {
          width: 520px;
          height: 10px;
          line-height: 10px;
          margin: unset;
          .ant-slider-rail{
              background-color: #000;
          }
          .ant-slider-track {
            background-color: #e26b0a;
          }
          .ant-slider-handle {
            background-color: #e26b0a;
            border: unset;
          }
        }
      }
      .timeBox {
        position: relative;
        top: 12px;
        margin-left: 10px;
        .currentTime {
          font-weight: 500;
          margin-right: 3px;
        }
        .duration {
          color: #666;
          margin-left: 3px;
        }
      }
      .actionBox {
        position: relative;
        top: 3px;
        margin-left: 50px;
        .iconfont {
          font-size: 20px;
          margin-right: 25px;
        }
      }
    }
  }
`
