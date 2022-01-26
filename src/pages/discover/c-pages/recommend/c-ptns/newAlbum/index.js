import React, { memo,useEffect } from 'react';
import { NewAlbumWrapper, MainWrapper } from './style';
import RecommendNav from '@/components/recommendNav';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getAlbums } from '../../store/actionCreator';
import { Carousel } from 'antd';
import AlbumCover from '@/components/albumCover';
import { useRef } from 'react';
export default memo(function NewAlbum(props) {
  const state = useSelector((state) => {
    return {
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    };
	}, shallowEqual);
	const carouselRef=useRef()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);
  return (
    <NewAlbumWrapper>
      <RecommendNav
        title="新碟上架"
        moreLink={'/discover/album'}
      ></RecommendNav>
      <MainWrapper>
        <div className="arrow_left arrow sprite_02" onClick={(e)=>{carouselRef.current.prev()}}></div>
        <Carousel className="carousel" ref={carouselRef} dots={false}>
          <div className="itemWrapper">
            {state.newAlbums.slice(0, 5).map((item) => {
              return <AlbumCover info={item} key={item.id}></AlbumCover>;
            })}
          </div>
          <div className="itemWrapper">
            {state.newAlbums.slice(5, 10).map((item) => {
              return <AlbumCover info={item} key={item.id}></AlbumCover>;
            })}
          </div>
        </Carousel>
        <div className="arrow_right arrow sprite_02" onClick={(e)=>{carouselRef.current.next()}}></div>
      </MainWrapper>
    </NewAlbumWrapper>
  );
});
