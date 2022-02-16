import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { ArtistWrapper, ContentWrapper } from './style'
import { getArtist } from '../../store/actionCreator'
import RecommendArtist from '@/components/recommendArtist'
export default memo(function Artist() {
  const state = useSelector((state) => {
    return {
      topArtist: state.getIn(['recommend', 'topArtist'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtist(5, -1))
  }, [dispatch])
  return (
    <ArtistWrapper>
      <div className="header">
        <span>入驻歌手</span>
        <a href="/todo" className="showmore">
          查看全部 &gt;
        </a>
      </div>
      <ContentWrapper>
        {state.topArtist.map((item) => {
          return (
            <RecommendArtist
              key={item.id}
              image={item.picUrl}
              alias={item.alias[0]}
              name={item.name}
            ></RecommendArtist>
          )
        })}
      </ContentWrapper>
    </ArtistWrapper>
  )
})
