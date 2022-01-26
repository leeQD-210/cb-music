import styled from 'styled-components';
export const CoverWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 140px;
  margin-bottom: 30px;
  .image {
    width: 140px;
    height: 140px;
  }
  .iconWrapper {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 113px;
    width: 140px;
    height: 27px;
    padding: 0 10px;
    background-position: 0 -537px;
    color: #fff;
    font-size: 12px;
    line-height: 27px;
    .icon_left {
      display: flex;
      align-items: center;
      .headset {
        display: inline-block;
        width: 14px;
        height: 11px;
        margin-right: 5px;
        background-position: 0 -24px;
      }
    }
    .icon_right {
     display: flex;
     align-items: center;
      .play {
        display: inline-block;
        width: 17px;
        height: 17px;
        background-position: 0 0;
      }
    }
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
`;
