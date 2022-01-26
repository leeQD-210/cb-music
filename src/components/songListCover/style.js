import styled from 'styled-components'
export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 140px;
  margin-bottom: 30px;
  .image {
    width: 140px;
    height: 140px;
  }
  .name {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
  }
  .writer {
    font-size: 12px;
    color: #666;
  }
`
