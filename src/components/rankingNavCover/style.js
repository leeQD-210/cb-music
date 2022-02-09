import styled from 'styled-components';
export const NavCoverWrapper = styled.div`
  .item {
    position: relative;
    width: 240px;
    height: 60px;
    padding: 10px 0 10px 20px;
    display: flex;
    &:hover {
      cursor: pointer;
      background-color: #eee;
    }

    .img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .cover {
      position: absolute;
      top: 10px;
      left: 20px;
      width: 40px;
      height: 40px;
      background-position: -160px 0;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
      .update {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .current {
    background-color: #eee;
  }
`;
