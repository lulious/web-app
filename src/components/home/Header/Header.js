import React from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import Logo from 'img/logo.png';
import User from 'img/user.png';
import './Header.less';

const prefixCls = 'components-home-header';
class Header extends React.Component{
  constructor(props){
    super(props);
  }

  goToCreate = () => {
    this.props.goTo('/lesson')
  }

  render(){
    const { setShowLogin, setShowRegister, goTo} = this.props;
    return (
      <div className={prefixCls}>
        <div className="logo-container">
          <img className="logo" src={Logo} alt="" />
          <div className="logo-text">
            <span>编程学习去哪里</span>
            <span>飞象章鱼属于你</span>
          </div> 
        </div>
        <div className="nav">
          <div className="item" onClick={()=>goTo('/')}>首页</div>
          <div className="item" onClick={()=>goTo('/video')}>公开课</div>
          <div className="item" onClick={()=>goTo('/system')}>课程体验</div>
          <div className="item" onClick={()=>goTo('/apply')}>在线预约报名</div>
          <div className="item" onClick={()=>goTo('/')}>联系我们</div>
        </div>
        <div className="login-container">
          <img className="user" src={User} alt="" />        
          <span onClick={()=>setShowLogin(true)}>登录</span>/
          <span onClick={()=>setShowRegister(true)}>注册</span>
          <span className="create" onClick={()=>this.goToCreate()}>创作</span>
        </div>
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
      }
    }
  })(Header)