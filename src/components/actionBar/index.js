import React, { memo } from 'react'
import { ActionBarWrapper } from './style'
export default memo(function ActionBar(props) {
  const { subCount, shareCount, commentCount, handleAdd } = props
  return (
    <ActionBarWrapper>
      <i className="iconfont icon-playfill"></i>
      <i
        className="iconfont icon-add"
        onClick={(e) => {
          handleAdd()
        }}
      ></i>
      <span className="favor">
        <i className="iconfont icon-favor"></i>
        <span className="count">({subCount})</span>
      </span>
      <span className="share">
        <i className="iconfont icon-share"></i>
        <span className="count">({shareCount})</span>
      </span>
      <i className="iconfont icon-download"></i>
      <span className="comment">
        <i className="iconfont icon-comment"></i>
        <span className="count"> ({commentCount})</span>
      </span>
    </ActionBarWrapper>
  )
})
