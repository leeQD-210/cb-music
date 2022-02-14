import React, { memo, Suspense, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { discoverMenu } from '@/api/localData';
import { DiscoverWrapper, TopWrapper, MainWrapper } from './style';
export default memo(function CBDiscover(props) {
  const route = props.route;
  const mainRef = useRef();
  useEffect(() => {
    props.history.listen((location) => {
      // console.log(location,props.location)
      if (location.pathname !== props.location.pathname) {
        document.documentElement.scrollTop = 0;
      }
    });
  }, []);
  return (
    <DiscoverWrapper>
      <TopWrapper>
        {discoverMenu.map((item, index) => (
          <NavLink to={item.link} key={index} className="item">
            <span class="title"> {item.title}</span>
          </NavLink>
        ))}
      </TopWrapper>
      <MainWrapper ref={mainRef}>
        <Suspense fallback={<div>loading...</div>}>
          {renderRoutes(route.routes)}
        </Suspense>
      </MainWrapper>
    </DiscoverWrapper>
  );
});
