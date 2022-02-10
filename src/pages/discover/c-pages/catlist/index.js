import React, { memo } from 'react';
import { CatListWrapper } from './style';
import ListCategory from './c-pages/category';
import CateList from './c-pages/cateList';
export default memo(function Catlist() {
  return (
    <CatListWrapper>
      <ListCategory></ListCategory>
      <CateList></CateList>
    </CatListWrapper>
  );
});
