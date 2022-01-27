import styled from 'styled-components'
export const RecommendWrapper = styled.div`
  width: 100%;
`
export const MainWrapper = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  .main_left {
    width: 730px;
    padding: 20px;
    border-right: 1px solid #d3d3d3;
  }
  .main_right {
    width: 270px;
    border-right: 1px solid #d3d3d3;
    .loginbox {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 10px;
      padding: 20px;
      width: 90%;
      margin-left: 10px;
      height: 126px;
      background-color: #fddc6e;
      border-radius: 15px;
      border:3px dashed #e26b0a;
      .info {
        font-size: 14px;
        color: #000;
      }
      .btn {
        width: 100px;
        height: 31px;
        margin-top: 5px;
        color: #000;
        text-align: center;
        line-height: 31px;
        border-radius: 10px;
        background-color: #e26b0a;
        text-shadow: 0 1px 0 #e26b0a;
        font-size: 13px;
      }
    }
  }
`
