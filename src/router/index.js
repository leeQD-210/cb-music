import React from 'react'
import { Redirect } from 'react-router-dom'
const CBDiscover = React.lazy((_) => import('@/pages/discover'))
const CBRecommend = React.lazy((_) =>
  import('@/pages/discover/c-pages/recommend')
)
const CBRanking = React.lazy((_) => import('@/pages/discover/c-pages/ranking'))
const CBCatlist = React.lazy((_) => import('@/pages/discover/c-pages/catlist'))
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
