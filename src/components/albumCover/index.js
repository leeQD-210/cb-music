import React, { memo } from 'react';
import { CoverWrapper } from './style';
export default memo(function AlbumCover(props) {
	const { info } = props;
	return (
		<CoverWrapper>
			<img src={info.picUrl} alt="" className='image' />
			<a href="/abc" className='sprite_cover cover'>{}</a>
			<span className='name'>{ info.name}</span>
			<span className='artist_name'>{ info.artist.name}</span>
		</CoverWrapper>
	)
});
