import styled from 'styled-components'
export const SearchWrapper = styled.div`
  width: 1000px;
  height: auto;
  min-height: 800px;
  margin: 0 auto;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  background-color: #fff;
  margin-top: 75px;
  .search_input {
    width: 400px;
    margin: 0 auto;
    height: 120px;
    padding-top: 50px;
    .input_box {
      .ant-input {
        border: 2px solid #e26b0a;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        &:focus {
          border-color: #e26b0a;
          box-shadow: unset;
        }
      }
      .ant-input-group-addon {
        background-color: #e26b0a;
        .ant-btn {
          background-color: #e26b0a;
          border-color: #e26b0a;
        }
      }
    }
  }
  .search_nav {
    width: 900x;
    height: 37px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .item {
      width: 108px;
      height: 100%;
      line-height: 37px;
      background-color: #fddc6e;
      text-align: center;
      color: #000;
    }
    .active {
      background-color: #e26b0a;
    }
  }
  .search_content {
    width: 865px;
    margin: 0 auto;
  }
`
