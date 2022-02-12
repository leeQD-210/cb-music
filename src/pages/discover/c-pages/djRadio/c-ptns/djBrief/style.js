import styled from 'styled-components';
export const DjBriefWrapper = styled.div`
  width: 100%;
  padding: 20px 35px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e26b0a;
    padding-bottom: 5px;
    margin-bottom: 6px;
    .top_title {
      font-size: 20px;
      font-weight: 600;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      display: flex;
      width: 455px;
      padding: 15px 0;
      &:nth-child(-n + 2) {
        border-bottom: 1px solid #eee;
      }
      .img {
        width: 120px;
        height: 120px;
        margin-right: 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .name {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 25px;
        }
        .discription {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
`;
