import styled from 'styled-components'
export const SearchSongListWrapper = styled.div`
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 43px;
    padding: 0 50px;
    background-color: #ccc;
    .left {
      display: flex;
      align-items: center;
      .iconfont {
        margin-right: 10px;
        cursor: pointer;
      }
      .song_name {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 200px;
      }
    }
    .right {
      width: 400px;
      display: flex;
      justify-content: space-between;
      .artist_name {
        width: 120px;
        margin-right: 20px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .album {
        display: flex;
        align-items: center;
        width: auto;
        text-align: center;
        .album_name {
          max-width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .duration {
        width: 80px;
        text-align: right;
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
  }
  &:nth-child(2n + 1) {
    .info {
      background-color: #eee;
    }
  }
  .lyric_content {
    padding: 10px 0 10px 50px;
  }
  .show_all {
    padding-left: 50px;
    color: #e26b0a;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
  }
`
