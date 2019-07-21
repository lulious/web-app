import React from 'react';
import { Button } from 'antd';
import LogoIcon from 'img-tob/logo.png';
import './Header.less';

const prefixCls = 'university-header';

function Header(props) {
  const { goToLocation, handleSmartRoom } = props;
  return (
    <div className={prefixCls}>
      <div className="container">
        <img className="logo" src={LogoIcon} alt="" />
        <div className="nav">
          <span className="nav-item" onClick={() => goToLocation('home')}>首页</span>
          <span className="nav-item" onClick={() => goToLocation('platform')}>平台</span>
          <span className="nav-item" onClick={() => goToLocation('exam')}>考级</span>
          <span className="nav-item" onClick={() => goToLocation('race')}>赛事</span>
          <span className="nav-item" onClick={() => goToLocation('organization')}>机构</span>
          <span className="nav-item" onClick={() => goToLocation('school')}>中小学</span>
          <span className="nav-item" onClick={() => goToLocation('university')}>高校</span>
          <span className="nav-item" onClick={() => goToLocation('news')}>新闻</span>
        </div>
        <div className="buttons">
          <div className="user-icon"></div>
          <Button type="primary" onClick={handleSmartRoom}>进入智能教室</Button>
          <div className="link">官网</div>
        </div>
      </div>
    </div>
  )
}

export default Header
