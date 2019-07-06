import React from 'react';
import { Upload, Button, Icon} from 'antd';
import Header from 'components/home/Header/Header';
import Footer from 'components/home/Footer/Footer';
import Login from 'components/home/Login/Login';
import ApplyIcon from 'img/apply-icon.png';
import './VideoPage.less';

const prefixCls = 'video-page-container';
export default class VideoPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showLogin: false,
      showRegister: false,
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
    const token = sessionStorage.getItem('token');
    return (
      <div className={prefixCls}>   
        {showLogin ? <Login handleClose={() => this.setShowLogin(false)} activeKey="login" /> : null}
      {showRegister ? (
        <Login handleClose={() => this.setShowRegister(false)} activeKey="register" />
      ) : null}
        <div className="content">
          <Header setShowLogin={this.setShowLogin} setShowRegister={this.setShowRegister}  />
          <div className="info">
            <img className="apply-icon" src={ApplyIcon} alt="" />
            <span className="blue">课程体验</span>
          </div> 
          <Upload className="upload" name="logo" action="http://119.3.234.131:9000/Video/upload" headers={{Authorization: `JWT ${token}`}} name="video" listType="picture" withCredentials>
              <Button>
                <Icon type="upload" /> 点击上传视频
              </Button>
          </Upload>
        </div> 
        <Footer />
      </div>
    )
  }
}
