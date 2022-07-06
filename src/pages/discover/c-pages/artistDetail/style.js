import styled from 'styled-components'
export const CBArtistDetailWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #ccc;
  .left_wrap {
    width: 730px;
    border-left: 2px solid #ccc;
    border-right: 2px solid #ccc;
    .ant-tabs {
      padding: 0 20px;
      .ant-tabs-nav-list {
        width: 100%;
        display: flex;
        background-color: #fddc6e;
      }
      .ant-tabs-tab {
        flex: 1;
        display: flex;
        justify-content: center;
        &:hover {
          .ant-tabs-tab-btn {
            color: #e26b0a;
          }
        }
      }
      .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          color: #e26b0a;
        }
      }
      .ant-tabs-ink-bar {
        background-color: #e26b0a;
      }
    }
  }
  .right_wrap {
    width: 270px;
    border-right: 2px solid #ccc;
    padding: 20px;
  }
`
