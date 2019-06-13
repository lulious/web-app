import React from "react";
import Header from "components/home/Header/Header";
import Footer from "components/home/Footer/Footer";
import Login from "components/home/Login/Login";
import Register from "components/home/Register/Register";
import System from "img/system.png";
import HotIcon from "img/hot_icon.png";
import Lesson4 from "img/bg_04.png";
import Lesson5 from "img/bg_05.png";

import "./LessonPage.less";

const prefixCls = "system-page-container";
export default class LessonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showRegister: false
    };
  }

  setShowLogin = type => {
    this.setState({
      showLogin: type
    });
  };

  setShowRegister = type => {
    this.setState({
      showRegister: type
    });
  };
  render() {
    const { showLogin, showRegister } = this.state;
    return (
      <div className={prefixCls}>
       {showLogin ? <Login handleClose={() => this.setShowLogin(false)} activeKey="login" /> : null}
      {showRegister ? (
        <Login handleClose={() => this.setShowRegister(false)} activeKey="register" />
      ) : null}
        <div className="content-1">
          <Header
            setShowLogin={this.setShowLogin}
            setShowRegister={this.setShowRegister}
          />
          <div className="bold">涵盖不同年龄的课程体系 • 提高升学竞争力</div>
          <div className="grey">参照斯坦福计算机专业课程打造的</div>
        </div>
        <div className="content-2">
          <div className="right">
            <div className="title">
              <span>图形化编程课</span>
            </div>
            <div className="sub_title">
              零基础入门首选 让编程像搭积木一样好玩
            </div>
            <div className="label">适合5年级及以下</div>
            <div className="info">
              <span className="bold">编程知识点：</span>
              流程图、基础数据存储和运算、程序设计
            </div>
            <div className="info">
              <span className="bold">学科知识点：</span>
              函数思想、振动发声的原理、物体运动的方向和速度
            </div>

            <div className="apply">
              <img className="hot_icon" src={HotIcon} alt="" />
              <span className="apply_count">
                已有<span className="red">2364</span>人报名
              </span>
              <div className="button">立即预约</div>
            </div>
          </div>
        </div>
        <div className="content-3">
          <div className="left">
            <div className="title">
              <span>Python代码编程课</span>
            </div>
            <div className="sub_title">
              浙江、北京和山东已将Python纳入中高考科目
            </div>
            <div className="label">适合6年级及以上</div>
            <div className="info">
              <span className="bold">编程知识点：</span>
              软件基础开发、人工智能之数据分析和图像处理{" "}
            </div>
            <div className="info">
              <span className="bold">实战项目：</span>
              复杂几何图形绘制、信息加密器、抽签小程序：软件基础开发、人工智能之数据分析和图像处理
            </div>
            <div className="apply">
              <img className="hot_icon" src={HotIcon} alt="" />
              <span className="apply_count">
                已有<span className="red">7354</span>人报名
              </span>
              <div className="button">立即预约</div>
            </div>
          </div>
        </div>
        <div className="content-4">
          <div className="right">
            <div className="title">
              <span>硬件编程课</span>
            </div>
            <div className="sub_title">
              了解硬件基础模型，为进入人工智能领域打下基础
            </div>
            <div className="label">适合2年级及以上</div>
            <div className="info">
              <span className="bold">编程知识点：</span>
              硬件基础、传感器原理、电子电路原理、温度传感原理、语音识别、人脸识别
            </div>
            <div className="info">
              <span className="bold">实战项目：</span>
              Kenblock硬件模块、智能小车、智趣音乐与小小驾驶员、智能家具和智慧城市、水中机器人
            </div>

            <div className="apply">
              <img className="hot_icon" src={HotIcon} alt="" />
              <span className="apply_count">
                已有<span className="red">25979</span>人报名
              </span>
              <div className="button">立即预约</div>
            </div>
          </div>
        </div>
        <div className="content-5">
          <div className="left">
            <div className="title">
              <span>智能考级课</span>
            </div>
            <div className="sub_title">
            增强人工智能科技认知，培养创新精神和创新能力
            </div>
            <div className="label">适合1年级及以上</div>
            <div className="info">
              <span className="bold">编程知识点：</span>
              Arduino IDE、Mixly、Arduino UNO控制器、C语言编程、传感器、执行器、反馈型机器人、人工智能核心技术和行业应用
            </div>
            <div className="info">
              <span className="bold">实战项目：</span>
              全国青少年机器人技术等级考试、青少年人工智能技术水平测试智能等级考试
            </div>
            <div className="apply">
              <img className="hot_icon" src={HotIcon} alt="" />
              <span className="apply_count">
                已有<span className="red">25979</span>人报名
              </span>
              <div className="button">立即预约</div>
            </div>
          </div>
          <img className="lesson_4" src={Lesson4} alt="" />
        </div>
        <div className="content-6">
          <img className="lesson_5" src={Lesson5} alt="" />
          <div className="right">
            <div className="title">
              <span>国际竞赛课</span>
            </div>
            <div className="sub_title">
            培养科学技术素养，拓展国际化视野
            </div>
            <div className="label">适合3年级及以上</div>
            <div className="info">
              <span className="bold">编程知识点：</span>
             Python编程、C语言编程、C++编程、算法、计算机与数学及编程思维、力和运动、电器控制、杠杆结构、伸缩结构、齿轮等传动结构的原理与应用
            </div>
            <div className="info">
              <span className="bold">实战项目：</span>
              ROBOCOM、NOC、NOIP竞赛、国际水中机器人大赛、国际机器人与创客大赛、青少年科技创新大赛、北京大学人工智能与机器人大赛等
            </div>

            <div className="apply">
              <img className="hot_icon" src={HotIcon} alt="" />
              <span className="apply_count">
                已有<span className="red">3598</span>人报名
              </span>
              <div className="button">立即预约</div>
            </div>
          </div>
        </div>
        <div className="content-7">
          <img className="system-img" src={System} alt="" />
        </div>
        <Footer />
      </div>
    );
  }
}
