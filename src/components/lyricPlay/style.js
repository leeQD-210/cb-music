import styled from 'styled-components';
export const LyricPlayWrapper = styled.div`
  .empty_lyric {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    margin-top: 100px;
  }
  .lyric_box {
    width: 100%;
    height: 270px;
    overflow-y: scroll;
    overflow-x: hidden;
    // 滚动条样式
    // 滚动条样式
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    .line {
      width: 100%;
      height: 30px;
      text-align: center;
      line-height: 30px;
      padding: 0 10px;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
    }
    .current {
      color: #fff;
    }
  }
`;
