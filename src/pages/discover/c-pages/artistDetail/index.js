import React, { memo } from 'react'
import { CBArtistDetailWrapper } from './style'
import ArtistBanner from './c-ptns/artistBanner'
import { Tabs } from 'antd'
import { getArtistDetailAction } from './store/actionCreator'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import SongList from './c-ptns/songList'
import HotAlbums from './c-ptns/hotAlbums'
import ArtistMv from './c-ptns/artistMv'
import ArtistDesc from './c-ptns/artistDesc'
import BriefDesc from './c-ptns/briefDesc'
import TopArtist from './c-ptns/topArtist'
export default memo(function CBArtistDetail(props) {
  const artistId = new URLSearchParams(props.location.search).get('id')
  const { TabPane } = Tabs
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtistDetailAction(artistId))
  }, [dispatch, artistId])
  const handleTabChange = (key) => {
    console.log(key)
  }
  return (
    <CBArtistDetailWrapper>
      <div className="left_wrap">
        <ArtistBanner></ArtistBanner>
        <Tabs defaultActiveKey="song" onChange={handleTabChange}>
          <TabPane tab="热门歌曲" key="song">
            <SongList></SongList>
          </TabPane>
          <TabPane tab="所有专辑" key="albums">
            <HotAlbums artistId={artistId}></HotAlbums>
          </TabPane>
          <TabPane tab="相关MV" key="mv">
            <ArtistMv artistId={artistId}></ArtistMv>
          </TabPane>
          <TabPane tab="艺人介绍" key="description">
            <ArtistDesc artistId={artistId}></ArtistDesc>
          </TabPane>
        </Tabs>
      </div>
      <div className="right_wrap">
        <BriefDesc></BriefDesc>
        <TopArtist></TopArtist>
      </div>
    </CBArtistDetailWrapper>
  )
})
