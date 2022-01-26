import React, { memo } from 'react';
import { FooterWrapper, FooterLeft, FooterRight } from './style';
import { footerLinks, footerImages } from '@/api/localData';
export default memo(function CBAppHeader() {
  return (
    <FooterWrapper>
      <div className="content">
        <FooterLeft>
          <div className="first text">
            {footerLinks.map((item, index) => {
              return (
                <span key={index} className="service_text">
                  <a href={item.link} target="_blank" rel="noopen noreferrer">
                    {item.title}
                  </a>
                </span>
              );
            })}
          </div>
          <div className="second text">
            网易公司版权所有©1997-2020杭州乐读科技有限公司运营：浙网文[2018]3506-263号
          </div>
          <div className="third text">
            违法和不良信息举报电话：0571-89853516举报邮箱：ncm5990@163.com
          </div>
          <div className="forth text">
            粤B2-20090191-18工业和信息化部备案管理系统网站
          </div>
        </FooterLeft>
        <FooterRight>
          {footerImages.map((item, index) => {
            return (
              <div className="item" key={index}>
                <a href={item.link} target="_blank" rel="noopen noreferrer">
                  {}
                </a>
                <span className='title'>{item.title}</span>
              </div>
            );
          })}
        </FooterRight>
      </div>
    </FooterWrapper>
  );
});