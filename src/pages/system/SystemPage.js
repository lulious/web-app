import React from 'react';
import Header from 'components/home/Header/Header';
import Footer from 'components/home/Footer/Footer';
import Login from 'components/home/Login/Login';
import Register from 'components/home/Register/Register';
import TeacherIcon from 'img/system-bg2.png';
import Computer from 'img/computer-icon.png';
import Hand from 'img/hand-icon.png';
import Fly from 'img/fly-icon.png';
import RoundIcon from 'img/round-icon.png';
import ApplyIcon from 'img/apply-icon.png';

import './SystemPage.less';

const prefixCls = 'system-page-container';
export default class SystemPage extends React.Component{

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
          showRegister ? (<Register handleClose={()=>this.setShowRegister(false)} goToLogin={()=>{ this.setShowRegister(false);this.setShowLogin(true)}} />):null
        }
        <div className="content-1">
          <Header setShowLogin={this.setShowLogin} setShowRegister={this.setShowRegister}  />
          <div className="info">
            <img className="apply-icon" src={ApplyIcon} alt="" />
            <span className="blue">课程体系</span>
          </div> 
          <div className="intro-container">
            <div className="intro">领先行业的课程体系</div>
            <div className="intro">孩子学编程，和成人不一样</div>
            <div className="intro">覆盖6~17岁青少年编程学习全阶段</div>
          </div>
          <div className="button">在线试听</div>
        </div>
        <div className="content-2">
          <img className="teacher-icon" src={TeacherIcon} alt="" />
          <div className="intro-container">
            <div className="intro">经验丰富、恪尽职守的教学团队</div>
            <div className="intro">拥有十余年一线编程经验的教研专家</div>
            <div className="intro">像孩子一样教孩子</div>
          </div>
          
          <div className="feature">
            <div className="fly">
              <img className="fly-icon" src={Fly} alt="" />
              <span className="title">1对1大师课</span>
              <span>沉浸式学习</span>
              <span>真正放飞想像力</span>
            </div>
            <div className="computer">
              <div className="computer-icon-container">
                <img className="computer-icon" src={Computer} alt="" />
              </div>
              <span className="title">趣味图形化编程课</span>
              <span>入门优选</span>
              <span>让编程像搭积木一样好玩</span>
            </div>
            <div className="hand">
              <img className="hand-icon" src={Hand} alt="" />
              <span className="title">Python游戏化编程课</span>
              <span>列入高考科目</span>
              <span>学Python要从娃娃抓起</span>
            </div>
          </div>
        </div>
        <div className="content-3">
          <div className="intro-container">
            <div className="red">科学且体系的课程阶段</div>
            <div>明确阶段目标才能让孩子的成长可视化</div>
          </div>
          <div className="table-container">
            <div className="item">
              <div className="s1 cell"></div>
              <span>S1</span>
            </div>
            <div className="item">
              <div className="s2 cell"></div>
              <span>S2</span>
            </div>
            <div className="item">
              <div className="info">掌握软件编程核心技能：变量、三种运算符、条件分支及分支嵌套；培养程序流程图的阅读与分析，强化训练逻辑思维能力。</div>
              <div className="s3 cell"></div>
              <span>S3</span>
            </div>
            <div className="item">
              <div className="s4 cell"></div>
              <span>S4</span>
            </div>
          </div>
          <div className="footer-info">
            <span>Scratch学科编程</span>
            <span>160课时</span>
            <span>课程阶段描述</span>
          </div>
          <img className="icon" src={RoundIcon} alt="" />
        </div>
        <Footer />
      </div>
    )
  }
}
