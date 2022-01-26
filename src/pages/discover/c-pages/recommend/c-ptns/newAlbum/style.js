import styled from 'styled-components';
export const NewAlbumWrapper = styled.div`
  width: 100%;
`;
export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 184px;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin: 20px 0 37px;
  padding-top:20px;
  .arrow {
    width: 30px;
    height: 17px;
    cursor: pointer;
  }
  .arrow_left{
    background-position: -260px -75px;
  }
  .arrow_right{
    background-position: -300px -75px;
  }
  .carousel {
    width: 640px;
    height: 150px;
    .itemWrapper {
      display: flex !important;
      justify-content: space-between;
    }
  }
`;
