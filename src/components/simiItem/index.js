import React, { memo } from 'react'
import { SimiItemWrapper } from './style'
export default memo(function SimiItem(props) {
  const { imgUrl, name, desc, handleClick, id } = props
  return (
    <SimiItemWrapper
      onClick={(e) => {
        handleClick(id)
      }}
    >
      <img src={imgUrl} alt="" className="avatar" />
      <div className="info">
        <p className="name">{name}</p>
        <p className="signature">{desc || '你一句春色不晚，我便到了江南'}</p>
      </div>
    </SimiItemWrapper>
  )
})
