import styled from 'styled-components'
export const VideoInfoWrapper = styled.div`
  .title {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    font-weight: 600;
    font-size: 18px;
  }
  .info {
    padding: 10px 0;
    .publish_time,
    .play_count {
      color: #999;
      font-size: 13px;
      .tips {
        margin-right: 5px;
      }
    }
    .publish_time {
      margin-bottom: 5px;
    }
  }
  .desc {
    font-size: 13px;
  }
`
