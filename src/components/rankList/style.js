import styled from 'styled-components'
export const RankListWrapper = styled.div`
  width: 230px;
  border: 1px solid #d3d3d3;
  background-color: #f5f5f5;
  .header {
    position: relative;
    display: flex;
    width: 100%;
    height: 120px;
    padding-top: 20px;
    padding-left: 20px;
    .image {
      width: 80px;
      height: 80px;
    }
    .image_cover {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 80px;
      height: 80px;
      background-position: -145px -57px;
    }
    .info {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .title {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }
      .control {
        .btn {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin: 8px 10px 0 0;
          cursor: pointer;
        }
        .play {
          background-position: -267px -205px;
        }
        .favor {
          background-position: -300px -205px;
        }
      }
    }
  }
`
export const ListWrapper = styled.div`
  .item {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 32px;
    line-height: 32px;
    padding-left: 20px;
    flex-wrap: nowrap;
    &:nth-child(odd) {
      background-color: #e8e8e8;
    }
    .index {
      width: 10px;
      margin-right: 10px;
      font-size: 14px;
    }
    &:nth-child(-n + 3) {
      .index {
        color: #c10d0c;
        font-size: 18px;
      }
    }
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 13px;
    }
    .action {
      display: none;
      width: 82px;
      .btn {
        position: relative;
        top: 3px;
        width: 17px;
        height: 17px;
        margin-left: 8px;
        cursor: pointer;
      }
      .play {
        background-position: -267px -268px;
      }
      .favor {
        background-position: -297px -268px;
      }
      .addto {
        top: 5px;
        background-position: 0 -700px;
      }
    }
    &:hover {
      .name {
        width: 106px;
      }
      .action {
        display: block;
      }
    }
  }
  .bottom {
    padding-right: 10px;
    justify-content: right;
    color: #000;
  }
`
