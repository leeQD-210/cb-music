import styled from 'styled-components'
export const AlbumSongListWrapper = styled.div`
  padding: 30px;
  padding-top: 0;
  .list_top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    .top_left {
      .top_title {
        font-size: 20px;
        font-weight: 600;
        margin-right: 30px;
      }
      .song_total {
        color: #999;
      }
    }
  }
  .list_title {
    display: flex;
    width: 100%;
    padding: 5px;
    background-color: #fddc6e;
    font-weight: 600;
    .index {
      width: 45px;
    }
    .song_title {
      width: 280px;
    }
    .duration {
      width: 80px;
    }
    .artist {
      width: 110px;
    }
  }
  .list_content {
    max-height: 450px;
    overflow-y: scroll;
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
  }
`
