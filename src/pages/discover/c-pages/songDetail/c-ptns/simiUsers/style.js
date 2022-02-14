import styled from 'styled-components';
export const SimiUserListWrapper = styled.div`
  .top {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    .title {
      font-size: 14px;
      font-weight: 600;
    }
  }
  .content {
    padding-top: 20px;
    .item {
      display: flex;
      margin-bottom: 20px;
      .img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
`;
