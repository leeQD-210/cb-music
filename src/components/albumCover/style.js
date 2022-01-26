import styled from 'styled-components';
export const CoverWrapper = styled.div`
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
  width: 118px;
	.image{
		width: 100px;
		height: 100px;
	}
	.cover{
		position: absolute;
		top:0;
		left:0;
		width: 118px;
		height: 100px;
		background-position: 0 -570px;

	}
	.name{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 12px;
	}
	.artist_name{
		color:#666;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;