import styled from 'styled-components'
export const RelatedVideosWrapper = styled.div`
  margin-top: 20px;
  .title {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    font-weight: 600;
    font-size: 18px;
  }
  .content {
    width: 100%;
    padding-top: 20px;
    .item {
      display: flex;
      margin-bottom: 15px;
      cursor: pointer;
      .img {
        width: 50px;
        height: 50px;
        margin-right: 15px;
      }
      .info {
        display: flex;
        flex-direction: column;
        .video_title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 160px;
        }
        .creator {
          color: #999;
          font-size: 12px;
          max-width: 160px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .name {
            &:not(:last-child) {
              margin-right: 5px;
              &::after {
                margin-left: 3px;
                content: '/';
              }
            }
          }
        }
      }
    }
  }
`
