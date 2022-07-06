import styled from 'styled-components'
export const ArtistBannerWrapper = styled.div`
  width: 100%;
  padding: 20px;
  padding-bottom: 10px;
  .artist_name {
    width: 100%;
    padding-bottom: 5px;
    .name {
      font-size: 20px;
      font-weight: 600;
      margin-right: 15px;
    }
    .username {
      font-size: 15px;
      color: #999;
      margin-right: 15px;
    }
  }
  .img_background {
    width: 100%;
    height: 350px;
    background: url(${(props) => props.bgUrl}) center;
    background-size: cover;
  }
`
