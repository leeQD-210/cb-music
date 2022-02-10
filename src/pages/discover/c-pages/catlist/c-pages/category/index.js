import React, { memo, useEffect, useState } from 'react';
import { ListCategoryWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { DownOutlined } from '@ant-design/icons';
import { getList, changeCurrentCat } from '../../store/actionCreator';
export default memo(function ListCategory() {
  const [showAll, setShowAll] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      catList: state.getIn(['catlist', 'catList']),
      currentCat: state.getIn(['catlist', 'currentCat']),
    };
  }, shallowEqual);
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  const handleClickCate = (cat) => {
    dispatch(changeCurrentCat(cat));
  };
  return (
    <ListCategoryWrapper>
      <span className="all">{state.currentCat}</span>
      <button
        className="all_category"
        onClick={(e) => {
          setShowAll(!showAll);
        }}
      >
        全部分类 <DownOutlined className={{ arrow: showAll }} />
      </button>
      <div className="divider"></div>
      {showAll && (
        <div className="dropdown_menu">
          <div className="top">
            <span
              className={classnames('all_style', {
                current: state.currentCat === '全部',
              })}
              onClick={(e) => {
                handleClickCate('全部');
              }}
            >
              全部风格
            </span>
          </div>
          <div className="content">
            {state.catList.map((item, index) => {
              return (
                <dl className="dl">
                  <dt key={item + index} className="dl_title">
                    <i
                      className={classnames('iconfont', {
                        'icon-global': index === 0,
                        'icon-Piano': index === 1,
                        'icon-cup': index === 2,
                        'icon-cry': index === 3,
                        'icon-musicfill': index === 4,
                      })}
                    ></i>
                    {item.name}
                  </dt>
                  <dd className="dl_data">
                    {item.subs.map((sItem, index) => {
                      return (
                        <span
                          key={sItem + index}
                          className={classnames('dd_name', {
                            current: sItem.name === state.currentCat,
                          })}
                          onClick={(e) => {
                            handleClickCate(sItem.name);
                          }}
                        >
                          {sItem.name}
                        </span>
                      );
                    })}
                  </dd>
                </dl>
              );
            })}
          </div>
        </div>
      )}
    </ListCategoryWrapper>
  );
});
