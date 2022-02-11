import styled from 'styled-components'
export const DjCategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-left: 15px;
  .item {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
    margin-bottom: 20px;
    padding: 5px;
    cursor: pointer;
    &:hover {
      border-radius: 5px;
      background-color: #f6f7f7;
    }
    &:nth-child(9n) {
      margin-right: 0;
    }
    .cate_name {
      text-align: center;
    }
  }
`
export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: url(${(props) => props.bgImage});
  /* background-position: 48px 0; */
`
