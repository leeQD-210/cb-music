import styled from 'styled-components';
export const ListCategoryWrapper = styled.div`
  position: relative;
  .all {
    font-size: 24px;
    font-weight: 600;
    margin-right: 15px;
  }
  .all_category {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    font-size: 13px;
    &:hover {
      cursor: pointer;
    }
    .arrow {
      transform: rotate(180deg);
    }
  }
  .divider {
    margin-top: 5px;
    width: 100%;
    height: 3px;
    background-color: #e26b0a;
  }
  .dropdown_menu {
    position: absolute;
    top: 55px;
    width: 700px;
    height: 400px;
    background-color: #fafafa;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    z-index: 999;
    &::after {
      position: absolute;
      top: -24px;
      left: 100px;
      content: '';
      display: block;
      border: 12px solid transparent;
      border-bottom-color: #fafafa;
    }
    .top {
      display: flex;
      align-items: center;
      width: 100;
      height: 80px;
      border-bottom: 1px solid #ccc;
      padding-left: 20px;
      .all_style {
        display: inline-block;
        width: 100px;
        height: 30px;
        background: transparent;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        box-shadow: 0 0 5px #ccc;
        color: #000;
        cursor: pointer;
      }
      .current {
        color: #e26b0a;
      }
    }
    .content {
      position: relative;
      .dl {
        width: 100%;
        display: flex;
        padding: 15px 10px 15px 0;
        .dl_title {
          width: 80px;
          text-align: center;
          .iconfont {
            margin-right: 5px;
            font-size: 16px;
          }
        }
        .dl_data {
          width: 620px;
          display: flex;
          padding-left: 20px;
          flex-wrap: wrap;
          .dd_name {
            position: relative;
            max-width: 60px;
            margin-right: 20px;
            white-space: nowrap;
            cursor: pointer;
            &:not(:last-child)::after {
              content: '';
              position: absolute;
              display: block;
              width: 1px;
              height: 15px;
              background: #ccc;
              top: 5px;
              right: -10px;
            }
          }
          .current {
            color: #e26b0a;
          }
        }
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 80px;
        width: 2px;
        height: 320px;
        background: #eee;
      }
    }
  }
`;
