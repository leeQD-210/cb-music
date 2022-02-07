import styled from 'styled-components'
export const CoverWrapper = styled.div`
  width: 130px;
  margin-bottom: 20px;
  margin-left: 17px;
  &:nth-child(6n + 1) {
    margin-left: 0;
  }
  .content {
    width: 130px;
    height: 155px;
    .img {
      width: 130px;
      height: 130px;
      margin-bottom: 5px;
      border: 1px solid #e26b0a;
    }
    .info {
      display: flex;
      justify-content: space-between;
      .iconfont {
        color: #e26b0a;
      }
    }
  }
`
