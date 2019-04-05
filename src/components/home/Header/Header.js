import React from 'react';
import Logo from 'img/logo.png';
import './Header.less';

const prefixCls = 'components-home-header';

const Header = (props) => {
  const { setShowLogin, setShowRegister} = props;
  return (
    <div className={prefixCls}>
      <img className="logo" src={Logo} alt="" />
      <div className="nav">
        <div className="item">公开课</div>
        <div className="item">师资力量</div>
        <div className="item">线下课程</div>
        <div className="item">课程体验</div>
        <div className="item">线下课程</div>
        <div className="item">课程体验</div>
      </div>
      <div className="login-container">
        <span onClick={()=>setShowLogin(true)}>登录</span>
        <span onClick={()=>setShowRegister(true)}>注册</span>
      </div>
    </div>
  )
}
export default Header;
