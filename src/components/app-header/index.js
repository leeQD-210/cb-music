import React, { memo, useRef, useState } from 'react'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { NavLink, useHistory } from 'react-router-dom'
import { headerLinks } from '@/api/localData'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
export default memo(function CBAppHeader() {
  const showItem = (item, index) => {
    if (index < 3) {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      )
    }
  }
  const [keywords, setKeywords] = useState('')
  const history = useHistory()
  const inputRef = useRef()
  const handleSearch = (e) => {
    history.push(`/search/songs?keywords=${keywords}`)
  }
  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <span className="title">CB.PETS Music</span>
          <div class="nav_list">
            {headerLinks.map((item, index) => {
              return (
                <div className="nav_item" key={item.id}>
                  {showItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined onClick={handleSearch} />}
            onPressEnter={handleSearch}
            onChange={(e) => {
              setKeywords(e.target.value)
            }}
            ref={inputRef}
            value={keywords}
          ></Input>
          <Button className="create_center">创作者中心</Button>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
