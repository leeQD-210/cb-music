import styled from 'styled-components';
export const NewAlbumsWrapper = styled.div`
  width: 100%;
  .top {
    width: 100%;
    padding: 5px 0;
    border-bottom: 2px solid #e26b0a;
    .title {
      font-size: 20px;
      font-weight: 600;
      margin-right: 10px;
    }
    .current {
      color: #e26b0a;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
    .pagination_wrapper {
      width: 100%;
      text-align: right;
      margin-top: 10px;
    }
  }
`;
