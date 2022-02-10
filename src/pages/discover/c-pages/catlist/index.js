import React, { memo } from 'react'
import { CatListWrapper } from './style'
import ListCategory from './c-pages/category'
export default memo(function Catlist() {
  return (
    <CatListWrapper>
      <ListCategory></ListCategory>
    </CatListWrapper>
  )
})
