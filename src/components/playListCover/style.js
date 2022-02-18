import styled from 'styled-components'
export const PlayListCoverWrapper = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  padding: 10px 5px;
  cursor: pointer;
  cursor: pointer;
  &:nth-child(2n + 1) {
    background: #fafafa;
  }
  .index {
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .songs_info {
    width: 366px;
    display: flex;
    align-items: center;
    .iconfont {
      width: 16px;
      margin-right: 10px;
      flex-shrink: 0;
      flex-basis: auto;
    }
    .song_name {
      max-width: 320px;
      white-space: nowrap;
      overflow: hidden;
      margin-right: 5px;
      min-width: 60px;
      flex-shrink: 0;
      flex-basis: auto;
    }
    .alia {
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #999;
      flex-shrink: 5;
      flex-basis: auto;
    }
    .mv_icon {
      width: 28px;
      height: 18px;
      padding-right: 1px;
      cursor: pointer;
      flex-shrink: 0;
      margin-left: 5px;
      text-align: center;
      line-height: 13px;
      color: #e26b0a;
      border: 1px solid #e26b0a;
      flex-basis: auto;
    }
  }
  .duration {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .artist {
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
