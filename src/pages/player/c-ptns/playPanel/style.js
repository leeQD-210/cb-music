import styled from 'styled-components'
export const PlayPanelWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 52px;
  left: 50%;
  transform: translateX(-50%);
  height: 310px;
  width: 1000px;
  background-color: #e26b0a;
  /* border-radius: 10px; */
  overflow: hidden;
  z-index: 99;
  .playlist {
    width: 600px;
    height: 100%;
    .titleBox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 40px;
      padding: 0 20px;
      background-color: #fddc6e;
      .title {
        font-size: 14px;
        font-weight: 600;
      }
      .action {
        height: 40px;
        display: flex;
        align-items: center;
        margin-right: 20px;
        .favor_all,
        .delete_all {
          cursor: pointer;
        }
        .iconfont {
          position: relative;
          top: 1px;
          margin: 0 10px;
        }
      }
    }
    .play_content {
      width: 100%;
      height: 270px;
      overflow-y: scroll;
      overflow-x: hidden;
      scrollbar-width: 3px;
      scrollbar-color: #000 transparent;
      // 滚动条样式
      &::-webkit-scrollbar {
        position: relative;
        width: 4px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: #000;
        // scrollbar-arrow-color: red;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      .song_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 600px !important;
        height: 30px !important;
        padding: 0 20px;
        cursor: pointer;
        .song_name {
          display: inline-block;
          position: relative;
          padding-left: 12px;
          width: 220px;
          white-space: nowrap;
          text-overflow: ellipsis;
          .icon-playfill {
            position: absolute;
            top: 0;
            left: -5px;
          }
        }
        .action_box {
          display: none;
          .iconfont {
            font-size: 20px;
            margin-right: 10px;
          }
        }
        .item_info {
          padding: 0 20px;
          .artist_name {
            display: inline-block;
            width: 130px;
            margin-right: 10px;
            text-align: center;
          }
        }
        &:hover {
          .action_box {
            display: block;
          }
        }
      }
    }
  }
  .playinfo {
    width: 400px;
    height: 100%;
    .titleBox {
      width: 100%;
      height: 40px;
      background-color: #fddc6e;
      text-align: center;
      line-height: 40px;
      font-size: 12px;
      color: #e26b0a;
      .title {
        font-size: 14px;
        font-weight: 600;
        margin-right: 10px;
        color: #000;
      }
    }
  }
  .empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
`
