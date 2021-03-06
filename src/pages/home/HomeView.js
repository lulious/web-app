import React from "react";
import "./HomeView.less";
import Lesson from "img/gongkaike_02.png";
import System from "img/tixi_03.png";
import LessonForm from "components/home/LessonForm/LessonForm";
import Login from "components/home/Login/Login";
import ApplySuccess from "components/home/ApplySuccess/ApplySuccess";
import Header from "components/home/Header/Header";
import FixedForm from "components/home/FixedForm/FixedForm";
import Footer from "components/home/Footer/Footer";

const prefixCls = "home-page-container";
const LessonView = props => {
  const {
    showLogin,
    setShowLogin,
    showRegister,
    setShowRegister,
    showApplySuccess,
    setShowApplySuccess,
    bottom,
    showDiscount
  } = props;
  return (
    <div className={prefixCls}>
      { showApplySuccess ? (
        <ApplySuccess lesson="智能硬件" handleClose={() => setShowApplySuccess(false)} />
      ):null}
      
      {showLogin ? <Login handleClose={() => setShowLogin(false)} activeKey="login" /> : null}
      {showRegister ? (
        <Login handleClose={() => setShowRegister(false)} activeKey="register" />
      ) : null}
      <div className="content-1">
        <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
        <LessonForm className="lesson-form" applySuccess={() => setShowApplySuccess(true)}/>
      </div>
      <div className="content-2">
        <img className="lesson-img" src={Lesson} alt="" />
      </div>
      <div className="content-3">
        <img className="system-img" src={System} alt="" />
      </div>
      {showDiscount ? (
        <FixedForm className="fixed-form" bottom={bottom} applySuccess={() => setShowApplySuccess(true)} />
      ) : null}
      <Footer />
    </div>
  );
};
export default LessonView;
