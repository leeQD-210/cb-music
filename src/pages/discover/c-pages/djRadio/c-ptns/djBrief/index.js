import React, { memo } from 'react';
import { DjBriefWrapper } from './style';
import classnames from 'classnames';
import { Progress } from 'antd';
export default memo(function DjBrief(props) {
  const { title, info } = props;
  return (
    <DjBriefWrapper>
      <div className="top">
        <span className="top_title">{title}·电台</span>
        <span className="more">更多&nbsp;&gt;</span>
      </div>
      <div className="content">
        {info.length > 0 &&
          info.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.picUrl} alt="" className="img" />
                <div className="info">
                  <span className="name">{item.name}</span>
                  <span className="discription">{item.rcmdtext}</span>
                </div>
              </div>
            );
          })}
      </div>
    </DjBriefWrapper>
  );
});
