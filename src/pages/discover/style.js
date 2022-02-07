import styled from 'styled-components'
export const DiscoverWrapper = styled.div`
  width: 100%;
`
export const TopWrapper = styled.div`
  position: fixed;
  top: 75px;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  height: 30px;
  background-color: #fff;
  color: #000;
  .item {
    margin-right: 50px;
    .title {
      display: inline-block;
      font-size: 12px;
      color: #000;
      width: auto;
      padding: 2px 15px;
      height: 22px;
      line-height: 18px;
      vertical-align: middle;
      border-radius: 5px;
      &:hover {
        background-color: #e26b0a;
      }
    }
  }
  .active {
    .title {
      background-color: #e26b0a;
      border: 1px dashed #fddc6e;
    }
  }
`
export const MainWrapper = styled.div`
  margin-top: 105px;
`
