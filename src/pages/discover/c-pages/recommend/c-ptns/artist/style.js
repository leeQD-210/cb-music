import styled from 'styled-components'
export const ArtistWrapper = styled.div`
  width: 100%;
  padding: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 25px;
    border-bottom: 2px dashed #e26b0a;
    font-size: 12px;
    .showmore {
      color: #666;
    }
  }
`
export const ContentWrapper = styled.div`
  .btn {
    width: 100%;
    height: 31px;
    margin-top: 10px;
    background-color: #fafafa;
    border-radius: 4px;
    border: 1px solid #c3c3c3;
    line-height: 28px;
    color: #333;
    font-weight: 700;
    text-align: center;
  }
`
