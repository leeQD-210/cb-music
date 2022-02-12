import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ArtistNavLeftWrapper } from './style';
import { useDispatch } from 'react-redux';
import { artistCategories } from '@/api/localData';
import classnames from 'classnames';
import {
  changeCurrentArea,
  changeCurrentType,
  changeCurrentPath,
  changeCurrentTitle,
} from '../../store/actionCreator';
export default memo(function ArtistNavLeft() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      currentType: state.getIn(['artist', 'currentType']),
      currentArea: state.getIn(['artist', 'currentArea']),
    };
  }, shallowEqual);
  const handleSelect = (area, type, dataPath, title) => {
    if (area === -1) {
      dispatch(changeCurrentPath(dataPath));
    }
    dispatch(changeCurrentTitle(title));
    dispatch(changeCurrentArea(area));
    dispatch(changeCurrentType(type));
  };
  return (
    <ArtistNavLeftWrapper>
      {artistCategories.map((item, index) => {
        return (
          <div className="item" key={item.title + index}>
            <span className="title">{item.title}</span>
            {item.artists.map((sItem) => {
              const isSelect =
                state.currentArea === item.area &&
                state.currentType === sItem.type;
              return (
                <span
                  key={sItem.id + sItem.name}
                  className={classnames('list', { current: isSelect })}
                  onClick={(e) => {
                    handleSelect(
                      item.area,
                      sItem.type,
                      sItem.dataPath || '',
                      sItem.name
                    );
                  }}
                >
                  <span className="dot">·</span>
                  {sItem.name}
                </span>
              );
            })}
          </div>
        );
      })}
    </ArtistNavLeftWrapper>
  );
});
