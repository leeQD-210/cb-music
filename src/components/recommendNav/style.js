import styled from 'styled-components'
export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  padding: 0 10px 4px 34px;
  justify-content: space-between;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;
  .left {
    display: flex;
    align-items: center;
    line-height: 30px;
    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .category {
      position: relative;
      font-size: 12px;
      color: #333;
      margin: 0 20px;
      &:not(:last-child)::after {
        position: absolute;
        display: inline-block;
        content: '';
        top: 10px;
        right: -20px;
        width: 2px;
        height: 12px;
        border: 1px solid #ccc;
      }
    }
  }
  .right{
    .more{
      line-height: 35px;
      font-size: 12px;
    }
    .icon{
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 5px;
      background-position: 0 -240px;
    }
  }
`
