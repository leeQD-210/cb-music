import styled from 'styled-components';
export const ArtistListWrapper = styled.div`
  width: 100%;
  padding: 25px;
  padding-top: 30px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    border-bottom: 2px solid #e26b0a;
    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .more {
      font-size: 12px;
    }
  }
  .category {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top:10px;
    align-items: center;
    .alpha {
      font-weight: 500;
      cursor: pointer;
    }
    .current {
      padding: 5px 10px;
      background-color: #e26b0a;
      border-radius: 5px;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    .name_wrap {
      width: 130px;
      margin-left: 36px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      &:nth-child(5n + 1) {
        margin-left: 0;
      }
      .name {
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .iconfont {
        color: #e26b0a;
      }
    }
  }
`;
