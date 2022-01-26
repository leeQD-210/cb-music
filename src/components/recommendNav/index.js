import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { NavWrapper } from './style';
export default memo(function RecommendNav(props) {
  const { title, keywords, moreLink, keywordsClick } = props;
  return (
    <NavWrapper className="sprite_02">
      <div className="left">
        <span className="title">{title}</span>
        {keywords &&
          keywords.map((item, index) => {
            return (
              <span
                onClick={(e) => keywordsClick(item)}
                key={index}
                className="category"
              >
                {item}
              </span>
            );
          })}
      </div>
      <div className="right">
        <NavLink to={moreLink} className="more">
          更多
        </NavLink>
        <i className="sprite_02 icon"></i>
      </div>
    </NavWrapper>
  );
});
