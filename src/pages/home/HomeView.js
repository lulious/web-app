import React from 'react';
import './HomeView.less';
import Lesson from 'img/gongkaike_02.png';
import System from 'img/tixi_03.png';
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
          <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
        </div>
        <div className="content-2">
        <img className="lesson-img" src={Lesson} alt="" />
        </div>
        <div className="content-3">
        <img className="system-img" src={System} alt="" />
        </div>
        <Footer />
      </div>
    
  )
}
export default LessonView