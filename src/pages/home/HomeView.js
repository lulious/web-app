import React from 'react';
import './HomeView.less';
import Content from 'img/content-2.png';
import Teacher from 'img/content-3.png';
import Login from 'components/home/Login/Login';
import Register from 'components/home/Register/Register';
import Header from 'components/home/Header/Header';
import Footer from 'components/home/Footer/Footer';

const prefixCls = 'home-page-container'
const LessonView = (props) => {
  const {showLogin, setShowLogin, showRegister, setShowRegister } = props;
  return (
      <div className={prefixCls}>
        {
          showLogin ? (<Login handleClose={()=>setShowLogin(false)} />):null
        }
        {
          showRegister ? (<Register handleClose={()=>setShowRegister(false)} goToLogin={()=>{ setShowRegister(false);setShowLogin(true)}} />):null
        }
        <div className="content-1">
          <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister}  />
          <div className="feature">
            飞象章鱼通过编程教育与智能硬件的结合，使孩子在图形化编程、游戏设计、软件开发、算法学习、三维设计、程序撰写、智能机器控制、人脸语音识别的过程中了解AI、科技、艺术、数学、人工智能等综合性知识技能，全方位的培养孩子的逻辑思维能力、实践创作能力、跨学科综合能力、审美能力和团队协作能力等综合素养。
          </div>
        </div>
        <img className="content-2" src={Content} alt="" />
        <img className="content-3" src={Teacher} alt="" />
        <div className="content-4">
          <span>免费预约价值<span>298</span>元体验课</span>
          <span>轻松好玩的编程体验</span>
          <span>免费的专家指导、能力潜力测评</span>
          <span>覆盖20余座城市的40余家校区，方便体验</span>
          <div className="button">免费预约体验课</div>
        </div>
        <Footer />
      </div>
    
  )
}
export default LessonView