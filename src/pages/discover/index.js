import React, { memo, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { discoverMenu } from '@/api/localData'
import { DiscoverWrapper, TopWrapper, MainWrapper } from './style'
export default memo(function CBDiscover(props) {
  const route = props.route
  return (
    <DiscoverWrapper>
      <TopWrapper>
        {discoverMenu.map((item, index) => (
          <NavLink to={item.link} key={index} className="item">
            <span class="title"> {item.title}</span>
          </NavLink>
        ))}
      </TopWrapper>
      <MainWrapper>
        <Suspense fallback={<div>loading...</div>}>
          {renderRoutes(route.routes)}
        </Suspense>
      </MainWrapper>
    </DiscoverWrapper>
  )
})
