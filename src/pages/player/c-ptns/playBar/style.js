import styled from 'styled-components';
export const CBPlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  background-color: #fddc6e;
  z-index: 99;
  .content {
    display: flex;
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    .aliasName {
      position: fixed;
      left: 0;
      bottom: 0;
      height: 52px;
      line-height: 55px;
      width: calc(50vw - 500px);
      text-align: center;
      font-weight: 600;
    }
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
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .isPlay {
        position: relative;
        transform-origin: center;
        animation: rotate 5s linear infinite;
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
          .ant-slider-rail {
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
        top: 6px;
        margin-left: 50px;
        display: flex;
        .iconfont {
          font-size: 20px;
          margin-right: 25px;
          cursor: pointer;
        }
        .icon-share {
          position: relative;
          top: -3px;
          font-size: 25px;
        }
        .icon-volume {
          position: relative;
        }
        .icon-playlist {
          position: relative;
          top: -2px;
          font-size: 25px;
        }
        .icon-loop {
          position: relative;
          top: 1px;
        }
        .icon-random {
          font-size: 22px;
          margin-right: 23px;
        }
        .only {
          &::after {
            display: inline;
            content: '1';
            position: absolute;
            font-size: 12px;
            top: 7px;
            right: 6px;
            color: #e26b0a;
            font-weight: 600;
          }
        }
        .playlist_length {
          position: absolute;
          font-size: 12px;
          left: 208px;
          top: 10px;
          font-weight: 500;
        }
        .volume_slider {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 20px;
          top: -112px;
          left: 92px;
          height: 100px;
          margin: unset;
          background-color: rgba(1, 1, 1, 0.8);
          border-radius: 3px;
          z-index: 999;
          .ant-slider-rail {
            background-color: #000;
          }
          .ant-slider-track {
            background-color: #e26b0a;
          }
          .ant-slider-step {
          }
          .ant-slider-handle {
            margin: unset;
            background-color: #e26b0a;
            border: unset;
            width: 10px;
            height: 10px;
          }
        }
        .lyric {
          position: fixed;
          right: 0;
          bottom: 0;
          width: calc(50vw - 550px);
          text-align: center;
          height: 52px;
          color: #000;
          font-weight: 600;
          line-height: 52px;
          overflow-x: scroll;
          text-overflow: ellipsis;
          white-space: nowrap;
          &::-webkit-scrollbar {
            display: none;
          }
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
      }
    }
  }
`;
