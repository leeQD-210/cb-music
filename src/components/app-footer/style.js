import styled from 'styled-components'
export const FooterWrapper = styled.div`
  width: 100%;
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;
  .content {
    display: flex;
    width: 980px;
    height: 100%;
    margin: 0 auto;
  }
`
export const FooterLeft = styled.div`
  width: 600px;
  padding-top: 20px;
  .text {
    width: 100%;
    margin-bottom: 10px;
  }
  .first {
    .service_text {
      position: relative;
      margin-right: 20px;
      &:not(:last-child)::after {
        display: block;
        content: '';
        position: absolute;
        right: -10px;
        top: 2px;
        width: 1px;
        height: 16px;
        border-right: 1px solid #000;
      }
    }
  }
`
export const FooterRight = styled.div`
  display: flex;
  margin-left: 80px;
  height: 85%;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    a {
      width: 50px;
      height: 45px;
      background-image: url(${require('@/assets/img/sprite_footer_02.png')});
      background-size: 110px 450px;
    }
    &:nth-child(1) {
      a {
        background-position: 50px -101px;
      }
    }
    &:nth-child(2) {
      a {
        background-position: 0 -101px;
      }
    }
    &:nth-child(3) {
      a {
        background-position: 0 0;
      }
    }
    &:nth-child(4) {
      a {
        background-position: 0 0;
      }
    }
    .title {
      width: 60px;
      font-size: 12px;
      text-align: center;
      margin-top: 10px;
      color: #ccc;
    }
  }
`
