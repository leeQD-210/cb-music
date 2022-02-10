import styled from 'styled-components';
export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: #fddc6e;
  z-index: 999;
  .content {
    width: 1100px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    width: 100%;
    background-color: #fff;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  width: auto;
  align-items: center;

  .title {
    font-size: 25px;
    color: #fff;
    margin-right: 30px;
    font-weight: 600;
    padding: 5px;
    border-radius: 10px;
  }
  .nav_list {
    display: flex;
    align-items: center;
    .nav_item {
      width: 96px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #000;
      }
      .active {
        position: relative;
        background-color: #e26b0a;
        border-radius: 35px;
        &::after {
          display: block;
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-top-width: 0;
          border: 10px solid transparent;
          border-bottom-color: #fff;
        }
      }
      &:hover {
        cursor: pointer;
        border-radius: 35px;
        background-color: #e26b0a;
      }
      :last-child {
        position: relative;
        &::after {
          position: absolute;
          display: block;
          content: '';
          width: 20px;
          height: 15px;
          right: -5px;
          top: 10px;
          background: url(${require('@/assets/img/sprite_01.png')});
          background-position: -195px 0;
        }
      }
    }
  }
`;
export const HeaderRight = styled.div`
  color: #000;
  font-size: 12px;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 20px;
    font-size: 14px;
    border-color: #000;
    .ant-input {
      font-size: 12px;
    }
  }
  .create_center {
    width: 90px;
    height: 32px;
    border-radius: 20px;
    background-color: unset;
    color: #000;
    border: 1px solid #666;
    text-align: center;
    font-size: 12px;
    margin: 0 15px;
  }
`;
