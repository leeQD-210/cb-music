import styled from 'styled-components'
export const SimiItemWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  cursor: pointer;
  .avatar {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      max-width: 180px;
      margin-bottom: 5px;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .signature {
      max-width: 180px;
      color: #666;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`
