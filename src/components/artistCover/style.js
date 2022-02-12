import styled from 'styled-components';
export const ArtistCoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  margin-left: 36px;
  margin-bottom: 15px;
  &:nth-child(5n + 1) {
    margin-left: 0;
  }
  .img {
    width: 130px;
    height: 130px;
    margin-bottom: 5px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    .name {
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .iconfont {
      color: #e26b0a;
    }
  }
`;
