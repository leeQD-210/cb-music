import React from 'react'
import { Redirect } from 'react-router-dom'
const CBDiscover = React.lazy((_) => import('@/pages/discover'))
const CBRecommend = React.lazy((_) =>
  import('@/pages/discover/c-pages/recommend')
)
const CBSearch = React.lazy((_) => import('@/pages/search'))
const SearchSongs = React.lazy((_) => import('@/pages/search/c-page/songs'))
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
        path: '/search',
        exact: true,
        render: () => <Redirect to={'/search/songs'}></Redirect>
      },
      {
        path: '/search/songs',
        exact: true,
        render: SearchSongs
      }
    ]
  }
]
export default routes
