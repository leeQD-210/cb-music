import styled from 'styled-components';
export const RecommendShowWrapper = styled.div`
  width: 430px;
  margin: 20px 35px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    .top_title {
      font-size: 20px;
      font-weight: 600;
    }
  }
  .content {
    border: 1px solid #ccc;
    border-top: 2px solid #e26b0a;
    .item {
      display: flex;
      padding: 10px 15px;
      height: 65px;
      &:nth-child(2n + 1) {
        background-color: #fafafa;
      }
      .index {
        display: flex;
        flex-direction: column;
        .rank,
        .rankChange {
          width: 30px;
          text-align: center;
        }
        .rank {
          padding-right: 5px;
        }
        .new {
          font-size: 12px;
          color: #4abbeb;
        }
        .ranktop {
          font-size: 16px;
          color: #e26b0a;
          font-weight: 500;
        }
        .rankChange {
          padding-right: 8px;
          .iconfont {
            font-size: 12px;
          }
          .line {
            margin-left: 2px;
            margin-right: 3px;
          }
        }
        .rankup {
          color: #ba2226;
        }
        .rankdown {
          color: green;
        }
        .rankline {
          color: #999;
        }
      }
      .info {
        display: flex;
        .img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        .info_right {
          display: flex;
          flex-direction: column;
          .title {
            width: ${(props) => props.titleWidth};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .creator {
            width: ${(props) => props.titleWidth};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #999;
            font-size: 12px;
          }
        }
      }
      .feature {
        display: flex;
        align-items: center;
        margin-left: 5px;
        .category {
          width: 65px;
          height: 20px;
          border: 1px solid #999;
          text-align: center;
          line-height: 20px;
          font-size: 13px;
          border-radius: 3px;
          cursor: pointer;
        }
        .ant-progress {
          width: 100px;
          .ant-progress-bg {
            background: #ccc;
          }
        }
      }
    }
  }
`;
