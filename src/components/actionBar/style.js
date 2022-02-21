import styled from 'styled-components'
export const ActionBarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  background-color: #fafafa;
  padding: 0 10px;
  .iconfont {
    font-size: 18px;
    cursor: pointer;
  }
  .favor,
  .share,
  .comment {
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .count {
      font-size: 12px;
      color: #999;
    }
  }
`
