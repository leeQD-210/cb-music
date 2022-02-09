import styled from 'styled-components';
export const ListCoverWrapper = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  padding: 10px 5px;
  cursor: pointer;
  &:nth-child(2n + 1) {
    background: #fafafa;
  }
  .index {
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hot {
    color: #e26b0a;
  }
  .songs_info {
    width: 325px;
    display: flex;
    align-items: center;
    .img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    .iconfont {
      margin-right: 10px;
    }
    .song_name {
      max-width: 150px;
      white-space: nowrap;
      overflow: hidden;
      margin-right: 5px;
      min-width: 60px;
    }
    .alia {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #999;
    }
  }
  .duration {
    width: 90px;
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
`;
