import React, { memo, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import CBAppHeader from '@/components/app-header'
import CBAppFooter from '@/components/app-footer'
import CBPlayer from '../player'
import routes from '@/router'
export default memo(function CBMain() {
  return (
    <HashRouter>
      <CBAppHeader></CBAppHeader>
      {/* 路由加载不出时加载fallback内容 */}
      <Suspense fallback={<div>loading...</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <CBPlayer></CBPlayer>
      <CBAppFooter></CBAppFooter>
    </HashRouter>
  )
})
