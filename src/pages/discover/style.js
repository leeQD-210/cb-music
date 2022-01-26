import styled from 'styled-components'
export const DiscoverWrapper = styled.div`
  width: 100%;
`
export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  background-color: #c20c0c;
  color: #fff;
  .item {
    margin-right: 50px;
    .title {
      display: inline-block;
      font-size: 12px;
      color: #fff;
      width: auto;
      padding: 2px 15px;
      height: 22px;
      line-height: 18px;
      vertical-align: middle;
      border-radius: 10px;
      &:hover {
        background-color: #9b0909;
      }
    }
  }
  .active {
    .title {
      background-color: #9b0909;
    }
  }
`
export const MainWrapper = styled.div`
`
