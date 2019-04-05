import React from 'react';
import ApplyForm from 'components/apply/ApplyForm';
import Header from 'components/home/Header/Header';
import Footer from 'components/home/Footer/Footer';
import Login from 'components/home/Login/Login';
import Register from 'components/home/Register/Register';
import ApplyIcon from 'img/apply-icon.png';
import './ApplyPage.less';

const prefixCls = 'apply-page-container';
export default class ApplyPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showLogin: false,
      showRegister: false
    }
  }

  setShowLogin = (type) => {
    this.setState({
      showLogin: type
    })
  }

  setShowRegister = type => {
    this.setState({
      showRegister: type
    })
  }
  render(){
    const  { showLogin, showRegister } = this.state;
    return (
      <div className={prefixCls}>   
        {
          showLogin ? (<Login className="login" handleClose={()=>this.setShowLogin(false)} />):null
        }
        {
          showRegister ? (<Register className="register" handleClose={()=>this.setShowRegister(false)} />):null
        } 
        <div className="container">
          <Header setShowLogin={this.setShowLogin} setShowRegister={this.setShowRegister}  />
          <div className="title-container">
            <img className="apply-icon" src={ApplyIcon} alt="" />
            <div className="info">
              <span className="blue">在线报名</span>
              <span>请仔细填写以下内容</span>
            </div> 
          </div>
          <ApplyForm className="form" />
        </div>
        <Footer />
      </div>
    )
  }
}
