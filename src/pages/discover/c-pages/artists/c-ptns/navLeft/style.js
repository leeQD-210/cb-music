import styled from 'styled-components';
export const ArtistNavLeftWrapper = styled.div`
  width: 180px;
  background-color: #fafafa;
  padding: 0 10px;
  .item {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 10px 0;
    .title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .list {
      height: 30px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      cursor: pointer;
      &:hover {
        border: 1px solid #ccc;
        color: #e26b0a;
      }
      .dot {
        font-size: 30px;
        margin-right: 10px;
      }
    }
    .current {
      border: 1px solid #ccc;
      color: #e26b0a;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
  }
`;
