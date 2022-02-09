import styled from 'styled-components';
export const RankingTopWrapper = styled.div`
  width: 100%;
  display: flex;
  .img_box {
    position: relative;
    width: 158px;
    height: 158px;
    padding: 3px;
    margin-right: 20px;
    border: 1px solid #ccc;
    .img {
      width: 150px;
      height: 150px;
      margin: unset;
    }
    .cover {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 150px;
      height: 150px;
      background-position: -160px 0;
      background-size: contain;
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    .detail_name {
      font-size: 20px;
      font-weight: 600;
    }
    .detail_description {
      margin: 5px 0;
      color: #999;
      font-size: 12px;
    }
    .detail_update {
      color: #666;
      .iconfont {
        margin-right: 3px;
      }
      .date {
        color: #e26b0a;
      }
    }
    .action_box {
      display: flex;
      justify-content: space-evenly;
			align-items: center;
      width: 500px;
			height: 35px;
      margin-top: 8px;
      background-color: #fafafa;
      .count {
        font-size: 12px;
      }
			.favor,.share,.comment{
				display: flex;
				align-items: center;
			}
    }
  }
`;
