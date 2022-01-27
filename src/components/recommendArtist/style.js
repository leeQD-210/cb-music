import styled from 'styled-components'
export const ReArtistWrapper = styled.div`
  .item {
    display: flex;
    width: 100%;
    background-color: #fafafa;
    margin-top: 20px;
    .image {
      width: 62px;
      height: 62px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 5px;
      .alias {
        font-size: 14px;
        font-weight: 700;
        color: #333;
        margin-bottom: 5px;
      }
      .name {
        font-size: 13px;
      }
    }
  }
`
