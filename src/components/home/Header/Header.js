import React from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import { Menu, Dropdown } from 'antd';
import Logo from 'img/logo.png';
import User from 'img/user.png';
import Consult from 'img/consult-icon.png';
import './Header.less';

const prefixCls = 'components-home-header';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/university">
        前往飞象章鱼学院
      </a>
    </Menu.Item>
  </Menu>
);
class Header extends React.Component{
  constructor(props){
    super(props);
  }

  goToCreate = () => {
    this.props.goTo('/lesson')
  }


  render(){
    const { setShowLogin, setShowRegister, goTo,setActiveNav, activeNav} = this.props;
    return (
      <div className={prefixCls}>
        <div className="logo-container">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="nav">
          <div className={activeNav===0 ? 'item-container active': 'item-container'} onClick={()=>{goTo('/');setActiveNav({activeNav: 0})}}>
            <span className="item">首页</span></div>
          <div className={activeNav===1 ? 'item-container active': 'item-container'} onClick={()=>{goTo('/discovery');setActiveNav({activeNav: 1})}}>
            <span className="item">发现</span></div>
          <div className={activeNav===2 ? 'item-container active': 'item-container'} onClick={()=>{goTo('/system');setActiveNav({activeNav: 2})}}>
            <span className="item">课程</span>
          </div>
          <div className={activeNav===3 ? 'item-container active': 'item-container'} onClick={()=>{goTo('/');setActiveNav({activeNav: 3})}}>
            {/* <span className="item none_border">更多</span> */}
            <Dropdown overlay={menu} trigger={['click']}>
              <span className="item none_border">更多</span>
            </Dropdown>
          </div>
        </div>
        <div className="login-container">
          <img className="user" src={User} alt="" />        
          <span onClick={()=>setShowLogin(true)}>登录</span>/
          <span onClick={()=>setShowRegister(true)}>注册</span>
        </div>
        {/* <span className="create" onClick={()=>this.goToCreate()}>创作</span> */}
        <a className="create" href="http://119.3.234.131:8601" target="_blank">创作</a>
        <div className="consult" onClick={()=>goTo('/')}>
          <img className="consult-icon" src={Consult} alt="" />
          咨询</div>
      </div>
    )
  }
}
export default connect(
  ({lesson})=>{
   return {...lesson}
  },
  (dispatch)=>{
    return {
      goTo(path){
        dispatch(routerRedux.push(path));
      },
      setActiveNav: (payload) => {
        return dispatch({
          type: 'lesson/set',
          payload
        });
      }
    }
  })(Header)