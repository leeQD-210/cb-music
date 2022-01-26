import React from 'react'
import { Redirect } from 'react-router-dom'
const CBDiscover = React.lazy((_) => import('@/pages/discover'))
const CBRecommend = React.lazy((_) => import('@/pages/discover/c-pages/recommend'))
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
        render: () => <Redirect to={"/discover/recommend"} />
      },
      {
        path: '/discover/recommend',
        component: CBRecommend
      }
    ]
  }
]
export default routes
