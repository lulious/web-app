import React from 'react';
import { Carousel } from 'antd';
import Header from 'components/university/header/Header';
import Footer from 'components/home/Footer/Footer';
import NewsCard from 'components/university/news-card/NewsCard';
import Banner_1 from 'img-tob/banner-1.png';
import Banner_2 from 'img-tob/banner-2.png';
import Book from 'img-tob/book.png';
import Teacher from 'img-tob/teacher.png';
import ManagerWeb from 'img-tob/manager-web.png';
import Train from 'img-tob/train.png';
import Game from 'img-tob/game.png';
import AI from 'img-tob/ai.png';
import SmartRoomBanner from 'img-tob/smart-room-banner.png';
import SmartRoom from 'img-tob/smart-room.png';
import ApplyImg from 'img-tob/apply-img.png';
import ExamBanner_1 from 'img-tob/exam-banner-1.png';
import ExamBanner_2 from 'img-tob/exam-banner-2.png';
import GameImgs from 'img-tob/game-imgs.png';
import RaceLogo from 'img-tob/race-logo.png';
import PointIcon from 'img-tob/point-icon.png';
import Brand from 'img-tob/brand.png';
import Support from 'img-tob/support.png';
import Vision from 'img-tob/vision.png';
import HR from 'img-tob/hr.png';
import LessonSystem from 'img-tob/lesson-system.png';
import OnlineManage from 'img-tob/online-manage.png';
import Operation from 'img-tob/operation.png';
import Teach from 'img-tob/teach.png';
import TrainSupport from 'img-tob/train-support.png';
import Solution from 'img-tob/banner-solution.png';
import Base from 'img-tob/banner-base.png';
import University from 'img-tob/university.png';
import './HomeView.less';

const prefixCls = 'university-home-view';
const HomeView = (props) => {
  const { goToLocation, goToDetail, handleSmartRoom, newsList } = props;
  console.log(newsList)
  return (
    <div className={prefixCls}>
      <Header goToLocation={goToLocation} handleSmartRoom={handleSmartRoom} />
      <div className="banner-container">
        <Carousel autoplay>
          <img className="banner" src={Banner_1} alt="" />
          <img className="banner" src={Banner_2} alt="" />
        </Carousel>
      </div>
      <div className="feature">
        <div className="item" onClick={() => goToDetail('course')}>
          <img className="icon" src={Book} alt="" />
          <span className="title">标准学校教材</span>
          <span className="info">一套青少年系统化编程教程</span>
        </div>
        <div className="item" onClick={() => goToDetail('apply_1')}>
          <img className="icon" src={Teacher} alt="" />
          <span className="title">百万名师课堂</span>
          <span className="info">名师独家创作视频课程直击科技教学</span>
        </div>
        <div className="item" onClick={() => goToDetail('platform')}>
          <img className="icon" src={ManagerWeb} alt="" />
          <span className="title">教学管理平台</span>
          <span className="info">教学管理与课程资源一体化云平台</span>
        </div>
        <div className="item" onClick={() => goToDetail('apply_2')}>
          <img className="icon" src={Train} alt="" />
          <span className="title">百万讲师进修培训</span>
          <span className="info">线上 + 线下双渠道输出的专业化培训</span>
        </div>
        <div className="item" onClick={() => goToDetail('solution')}>
          <img className="icon" src={Game} alt="" />
          <span className="title">赛事合作服务</span>
          <span className="info">权威编程竞赛一站式办赛解决方案</span>
        </div>
        <div className="item" onClick={() => goToDetail('ai')}>
          <img className="icon" src={AI} alt="" />
          <span className="title">AI双师课堂</span>
          <span className="info">AI双师编程教学课堂服务</span>
        </div>
      </div>
      <div id="platform" className="smart-room-container">
        <img className="banner" src={SmartRoomBanner} alt="" />
        <div className="room-feature">
          <img className="feature" src={SmartRoom} alt="" />
          <img className="apply" src={ApplyImg} alt="" />
        </div>
      </div>
      <div id="exam" className="exam-container">
        <Carousel autoplay>
          <img className="banner" src={ExamBanner_1} alt="" />
          <img className="banner" src={ExamBanner_2} alt="" />
        </Carousel>
      </div>
      <div id="race" className="race-container">
        <img className="race-logo" src={RaceLogo} alt="" />
        <div className="race-info">
          <span className="title">专业编程 + 机器人赛事平台</span>
          <span className="sub-title">100W+学生团队参与竞赛，多项国家级赛事</span>
          <div className="list">
            <div className="item">
              <img className="point-icon" src={PointIcon} alt="" />
              <span>一键参加世界、国家级赛事</span>
            </div>
            <div className="item">
              <img className="point-icon" src={PointIcon} alt="" />
              <span>一键举办省、市、校各级别赛事</span>
            </div>
            <div className="item">
              <img className="point-icon" src={PointIcon} alt="" />
              <span>配备线上+线下编程作品评分系统</span>
            </div>
            <div className="item">
              <img className="point-icon" src={PointIcon} alt="" />
              <span>专业赛事级配套课程及赛事工具套装</span>
            </div>
            <div className="item">
              <img className="point-icon" src={PointIcon} alt="" />
              <span>专家 + 人工智能评审作品</span>
            </div>
            <div className="item">
              <img className="point-icon" src={PointIcon} alt="" />
              <span>支持多类型赛事在线证书查询</span>
            </div>
          </div>
          <div className="apply-buttons">
            <div className="button-1">
              <span>前往赛事中心</span>
            </div>
            <div className="button-2">
              <span>申请办赛</span>
            </div>
          </div>
        </div>
        <img className="race-img" src={GameImgs} alt="" />
      </div>
      <div id="organization" className="organization-container">
        <div className="title">机构合作支持  科学运营 </div>
        <div className="sub-title">9大服务体系    “保障”服务优质高效</div>
        <div className="feature-list">
          <div className="item">
            <img className="brand-icon" src={Brand} alt="" />
            <div className="right">
              <span className="title">品牌支持</span>
              <span>部分奖项和证书可在合作地区使用</span>
              <span>公众号、官网、全方位展示校区开业信息</span>
            </div>
          </div>
          <div className="item">
            <img className="support-icon" src={Support} alt="" />

            <div className="right">
              <span className="title">前期筹备支持</span>
              <span>远程协助或到店选址</span>
              <span>设计图服务</span>
              <span>整体装修服务</span>
            </div>
          </div>
          <div className="item">
            <img className="vision-icon" src={Vision} alt="" />
            <div className="right">
              <span className="title">视觉识别系统</span>
              <span>飞象章鱼介绍手册</span>
              <span>飞象章鱼相关周边产品</span>
            </div>
          </div>
          <div className="item">
            <img className="hr-icon" src={HR} alt="" />
            <div className="right">
              <span className="title">人力管理支持</span>
              <span>协助面试主管及以上员工</span>
              <span>协助测评老师</span>
              <span>协助校区师资培训和资格认证</span>
            </div>
          </div>
          <div className="item">
            <img className="lesson-icon" src={LessonSystem} alt="" />
            <div className="right">
              <span className="title">课程体系支持</span>
              <span>提供合作范围内全套课程体系</span>
              <span>外拓名师讲堂分享和互动</span>
            </div>
          </div>
          <div className="item">
            <img className="online-icon" src={OnlineManage} alt="" />
            <div className="right">
              <span className="title">线上管理系统</span>
              <span>教学管理与课程资源一体化的云平台</span>
              <span>CRM用户招生营销体系</span>
            </div>
          </div>
          <div className="item">
            <img className="operation-icon" src={Operation} alt="" />
            <div className="right">
              <span className="title">线下标准化运营</span>
              <span>标准化操作流程 帮助合作伙伴“放心开店”</span>
            </div>
          </div>
          <div className="item">
            <img className="teach-icon" src={Teach} alt="" />
            <div className="right">
              <span className="title">一对一教练式指导</span>
              <span>优质1对1运营指导服务</span>
              <span>每周两次电话沟通服务及时解决各种疑问</span>
            </div>
          </div>
          <div className="item">
            <img className="train-icon" src={TrainSupport} alt="" />
            <div className="right">
              <span className="title">培训支持</span>
              <span>线上视频学习，线下测试认证</span>
              <span>走进500强企业学习交流</span>
            </div>
          </div>
        </div>
      </div>
      <div className="school-container">
        <img className="banner" src={Solution} alt="" />
        <img id="school" className="base-banner" src={Base} alt="" />
        <img id="university" className="banner" src={University} alt="" />
      </div>
      <div id="news" className="news-container">
        <div className="title">行业前沿</div>
        <div className="sub-title">了解行业更多大趋势</div>
        <div className="news-list">
          <span className="button-prev arrow">&lt;</span>

          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                newsList.map((item,index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <NewsCard title={item.fields.name} content={item.fields.news_content} coverImg={item.fields.img} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <span className="button-next arrow">&gt;</span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomeView
