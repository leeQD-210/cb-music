import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import CBAppHeader from '@/components/app-header'
import CBAppFooter from '@/components/app-footer'
export default memo(function CBMain() {
  return (
    <HashRouter>
      <CBAppHeader></CBAppHeader>
      <CBAppFooter></CBAppFooter>
    </HashRouter>
  )
})
