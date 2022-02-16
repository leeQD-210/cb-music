import styled from 'styled-components'
export const SongInfoWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  .cover_wrap {
    position: relative;
    height: 470px;
    padding-top: 48px;
    /* padding-top:100px; */
    padding-right: 30px;
    padding-left: 73px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
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
    .ohuo {
      width: 200px;
      height: 220px;
      margin-top: 50px;
    }
    .mask {
      position: absolute;
      top: 10px;
      left: 70px;
      width: 205px;
      height: 205px;
      background-position: -140px -580px;
    }
  }
  .song_wrap {
    margin-left: 25px;
    width: 480px;
    padding-right: 70px;
    margin-bottom: 50px;
    .song_info {
      display: flex;
      flex-direction: column;
      .song_title {
        display: flex;
        align-items: center;
        .icon {
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: 0 -463px;
          margin-right: 15px;
        }
        .title {
          max-width: 300px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 20px;
          font-weight: 600;
        }
      }
      .song_artist,
      .song_album {
        margin-bottom: 10px;
        .discription {
          font-size: 12px;
          color: #999;
          margin-right: 5px;
        }
        .artist,
        .album {
          color: #e26b0a;
          font-size: 14px;
        }
      }
      .action_box {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #fafafa;
        .iconfont {
          font-size: 18px;
          cursor: pointer;
        }
        .anticon {
          font-size: 20px;
        }
        .comment {
          display: flex;
          align-items: center;
          .comment_total {
            font-size: 12px;
          }
        }
      }
    }
    .lyric_wrap {
      width: 380px;
      margin-top: 20px;
      padding: 20px 0;
      background-color: #ccc;
      border-radius: 5px;
      box-shadow: 0 0 5px #999;
    }
  }
`
