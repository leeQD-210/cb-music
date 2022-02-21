import React from 'react'
import { Redirect } from 'react-router-dom'
const CBDiscover = React.lazy((_) => import('@/pages/discover'))
const CBRecommend = React.lazy((_) =>
  import('@/pages/discover/c-pages/recommend')
)
const CBRanking = React.lazy((_) => import('@/pages/discover/c-pages/ranking'))
const CBCatlist = React.lazy((_) => import('@/pages/discover/c-pages/catlist'))
const CBDjRadio = React.lazy((_) => import('@/pages/discover/c-pages/djRadio'))
const CBArtists = React.lazy((_) => import('@/pages/discover/c-pages/artists'))
const CBAlbums = React.lazy((_) => import('@/pages/discover/c-pages/albums'))
const CBSearch = React.lazy((_) => import('@/pages/search'))
const SearchSongs = React.lazy((_) => import('@/pages/search/c-page/songs'))
const SearchArtists = React.lazy((_) => import('@/pages/search/c-page/artists'))
const SearchAlbums = React.lazy((_) => import('@/pages/search/c-page/albums'))
const SearchVideos = React.lazy((_) => import('@/pages/search/c-page/videos'))
const SearchLyrics = React.lazy((_) => import('@/pages/search/c-page/lyrics'))
const SearchSongsWrap = React.lazy((_) =>
  import('@/pages/search/c-page/songsWrap')
)
const SearchDj = React.lazy((_) => import('@/pages/search/c-page/dj'))
const SearchUser = React.lazy((_) => import('@/pages/search/c-page/users'))
const CBSongDetail = React.lazy((_) =>
  import('@/pages/discover/c-pages/songDetail')
)
const CBMvDetail = React.lazy((_) =>
  import('@/pages/discover/c-pages/mvDetail')
)
const CBPlayListDetail = React.lazy((_) =>
  import('@/pages/discover/c-pages/playListDetail')
)
const CBAlbumDetail = React.lazy((_) =>
  import('@/pages/discover/c-pages/albumDetail')
)
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: CBDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to={'/discover/recommend'} />
      },
      {
        path: '/discover/recommend',
        component: CBRecommend
      },
      {
        path: '/discover/ranking',
        component: CBRanking
      },
      {
        path: '/discover/catlist',
        component: CBCatlist
      },
      {
        path: '/discover/djradio',
        component: CBDjRadio
      },
      {
        path: '/discover/artist',
        component: CBArtists
      },
      {
        path: '/discover/albums',
        component: CBAlbums
      },
      {
        path: '/discover/songDetail',
        component: CBSongDetail
      },
      {
        path: '/discover/mvDetail',
        component: CBMvDetail
      },
      {
        path: '/discover/playlistDetail',
        component: CBPlayListDetail
      },
      {
        path: '/discover/albumDetail',
        component: CBAlbumDetail
      }
    ]
  },
  {
    path: '/search',
    component: CBSearch,
    routes: [
      {
        path: '/search/songs',
        exact: true,
        component: SearchSongs
      },
      {
        path: '/search/artists',
        exact: true,
        component: SearchArtists
      },
      {
        path: '/search/albums',
        exact: true,
        component: SearchAlbums
      },
      {
        path: '/search/videos',
        exact: true,
        component: SearchVideos
      },
      {
        path: '/search/lyrics',
        exact: true,
        component: SearchLyrics
      },
      {
        path: '/search/songswrap',
        exact: true,
        component: SearchSongsWrap
      },
      {
        path: '/search/dj',
        exact: true,
        component: SearchDj
      },
      {
        path: '/search/user',
        exact: true,
        component: SearchUser
      }
    ]
  }
]
export default routes
