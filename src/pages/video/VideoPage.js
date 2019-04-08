import React from 'react';
import Header from 'components/home/Header/Header';
import Footer from 'components/home/Footer/Footer';
import Login from 'components/home/Login/Login';
import Register from 'components/home/Register/Register';
import VideoCard from 'components/video/VideoCard';
import ApplyIcon from 'img/apply-icon.png';
import Lesson1 from 'img/lesson-1.png';
import Lesson2 from 'img/lesson-2.png';

import './VideoPage.less';

const prefixCls = 'video-page-container';
export default class VideoPage extends React.Component{

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
        <div className="content">
          <Header setShowLogin={this.setShowLogin} setShowRegister={this.setShowRegister}  />
          <div className="info">
            <img className="apply-icon" src={ApplyIcon} alt="" />
            <span className="blue">课程体验</span>
          </div> 
          <div className="video-list-container">
            <div className="video-item">
              <div className="title">源码编辑器公开课</div>
              <div className="info">
                <img className="banner" src={Lesson1} alt="" />
                <VideoCard />
              </div>
            </div>
            <div className="video-item">
              <div className="title">代码岛2.0公开课</div>
              <div className="info">
                <img className="banner" src={Lesson2} alt="" />
                <VideoCard />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}