import styled from 'styled-components'
export const CoverWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.coverWidth};
  .image {
    width: ${(props) => props.imgWidth};
    height: ${(props) => props.imgHeight};
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.coverWidth};
    height: ${(props) => props.imgHeight};
    background-position: 0 ${props=>props.positionHeight};
  }
  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
  .artist_name {
    color: #666;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
