import React from 'react'
import { Redirect } from 'react-router-dom'
const CBDiscover = React.lazy((_) => import('@/pages/discover'))
const CBRecommend = React.lazy((_) =>
  import('@/pages/discover/c-pages/recommend')
)
const CBSearch = React.lazy((_) => import('@/pages/search'))
const SearchSongs = React.lazy((_) => import('@/pages/search/c-page/songs'))
const SearchArtists = React.lazy((_) => import('@/pages/search/c-page/artists'))
const SearchAlbums = React.lazy((_) => import('@/pages/search/c-page/albums'))
const SearchVideos = React.lazy((_) => import('@/pages/search/c-page/videos'))
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
      }
    ]
  }
]
export default routes
