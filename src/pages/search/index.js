import React, { memo, Suspense, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { SearchWrapper } from './style';
import { Input } from 'antd';
import { searchLink } from '@/api/localData';
import { useHistory } from 'react-router-dom';
export default memo(function CBSearch(props) {
  const onSearch = (val) => {
    setkeyWords(val);
  };
  const [keywords, setkeyWords] = useState('');
  const history = useHistory();
  useEffect(() => {
    if (props.location.pathname === '/search') {
      history.push(`/search/songs?keywords=${keywords}`);
    } else {
      history.push(props.location.pathname + `?keywords=${keywords}`);
    }
  }, [keywords, props.location.pathname, history]);
  const { Search } = Input;
  return (
    <SearchWrapper>
      <div className="search_input">
        <Search
          placeholder="音乐/视频/电台/用户"
          onSearch={onSearch}
          enterButton
          className="input_box"
        />
      </div>
      <div className="search_nav">
        {searchLink.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={`${item.link}?keywords=${keywords}`}
              className="item"
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <div className="search_content">
        <Suspense fallback={<div>loading...</div>}>
          {renderRoutes(props.route.routes)}
        </Suspense>
      </div>
    </SearchWrapper>
  );
});
