import styled from 'styled-components'
export const TopBannerWrapper = styled.div`
  width: 100%;
  height: 270px;
  background: url(${(props) => props.bgImage}) center;
  background-size: 6000px 6000px;
  .content {
    position: relative;
    display: flex;
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    .carousel {
      width: 730px;
      height: 100%;
      .image {
        width: 730px;
        height: 270px;
      }
    }
    .btn {
      position: absolute;
      width: 37px;
      height: 63px;
      top: 50%;
      transform: translateY(-50%);
      background-image: url(${require('@/assets/img/banner_sprite.png')});
      background-color: transparent;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    .btn_left {
      left: -60px;
      background-position: 0 -360px;
    }
    .btn_right {
      right: -60px;
      background-position: 0 -508px;
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank',
  rel: 'noopen noreferrer'
})`
  width: 270px;
  height: 100%;
  background: url(${require('@/assets/img/download.png')});
  background-size: cover;
`
