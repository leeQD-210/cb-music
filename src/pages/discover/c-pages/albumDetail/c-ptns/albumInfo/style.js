import styled from 'styled-components'
export const AlbumInfoWrapper = styled.div`
  padding: 30px 25px;
  .top_wrap {
    display: flex;
    .img_wrap {
      width: 208px;
      height: 208px;
      margin-right: 20px;
      .img {
        width: 200px;
        height: 200px;
      }
    }
    .info_wrap {
      width: 100%;
      .title_wrap {
        margin-bottom: 10px;
        .icon {
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: 0 -186px;
        }
        .title {
          margin-left: 10px;
          font-size: 24px;
          font-weight: 600;
        }
      }
      .creator_wrap {
        color: #999;
        font-size: 13px;
        .name,
        .create_time {
          margin-bottom: 5px;
        }
      }
    }
  }
  .desc_wrap {
    color: #666;
    .desc {
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }
    .content {
      font-size: 12px;
      .item_wrap {
        text-indent: 1em;
        padding: 5px 0;
      }
      .show_all {
        padding-right: 20px;
        text-align: right;
        text-decoration: underline;
        color: #e25b0a;
        cursor: pointer;
      }
    }
  }
`
