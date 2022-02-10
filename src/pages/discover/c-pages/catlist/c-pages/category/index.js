import React, { memo, useEffect, useState } from 'react'
import { ListCategoryWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DownOutlined } from '@ant-design/icons'
import { getList } from '../../store/actionCreator'
export default memo(function ListCategory() {
  const [showAll, setShowAll] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector((state) => {
    return {
      catList: state.getIn(['catlist', 'catList'])
    }
  }, shallowEqual)
  useEffect(() => {
    dispatch(getList())
  }, [dispatch])
  return (
    <ListCategoryWrapper>
      <span className="all">全部</span>
      <button
        className="all_category"
        onClick={(e) => {
          setShowAll(!showAll)
        }}
      >
        全部分类 <DownOutlined className={{ arrow: showAll }} />
      </button>
      <div className="divider"></div>
      {showAll && (
        <div className="dropdown_menu">
          <div className="top">
            <a href="/">全部风格</a>
          </div>
          <div className="content">
            {state.catList.map((item, index) => {
              return (
                <dl>
                  <dt key={item + index}>{item.name}</dt>
                  <dd>
                    {item.subs.map((sItem, index) => {
                      return <span key={sItem + index}>{sItem.name}</span>
                    })}
                  </dd>
                </dl>
              )
            })}
          </div>
        </div>
      )}
    </ListCategoryWrapper>
  )
})
