import React from 'react';
import styles from './HomeView.less';
import Logo from 'img/logo.png';
import Content from 'img/content-2.png';
import Teacher from 'img/content-3.png';
import Lesson from 'img/content-4.png';
import Computer from 'img/computer-icon.png';
import Hand from 'img/hand-icon.png';
import Fly from 'img/fly-icon.png';
import Login from 'components/home/Login/Login'

const LessonView = (props) => {
  
  return (
      <div className={styles.container}>
        <Login className={styles.login} />
        <div className={styles['content-1']}>
          <div className={styles.header}>
            <img className={styles.logo} src={Logo} alt="" />
            <div className={styles.nav}>
              <div className={styles.item}>公开课</div>
              <div className={styles.item}>师资力量</div>
              <div className={styles.item}>线下课程</div>
              <div className={styles.item}>课程体验</div>
              <div className={styles.item}>线下课程</div>
              <div className={styles.item}>课程体验</div>
            </div>
            <div className={styles['login-container']}>
              <span>登录</span>
              <span>注册</span>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.computer}>
              <div className={styles['computer-icon-container']}>
                <img className={styles['computer-icon']} src={Computer} alt="" />
              </div>
              <span className={styles.title}>趣味图形化编程课</span>
              <span>入门优选</span>
              <span>让编程像搭积木一样好玩</span>
            </div>
            <div className={styles.hand}>
              <img className={styles['hand-icon']} src={Hand} alt="" />
              <span className={styles.title}>Python游戏化编程课</span>
              <span>列入高考科目</span>
              <span>学Python要从娃娃抓起</span>
            </div>
            <div className={styles.fly}>
              <img className={styles['fly-icon']} src={Fly} alt="" />
              <span className={styles.title}>1对1大师课</span>
              <span>沉浸式学习</span>
              <span>真正放飞想像力</span>
            </div>
          </div>
        </div>
        <img className={styles['content-2']} src={Content} alt="" />
        <img className={styles['content-3']} src={Teacher} alt="" />
        <div className={styles['content-4']}>
          <span>免费预约价值<span>298</span>元体验课</span>
          <span>轻松好玩的编程体验</span>
          <span>免费的专家指导、能力潜力测评</span>
          <span>覆盖20余座城市的40余家校区，方便体验</span>
          <div className={styles.button}>免费预约体验课</div>
        </div>
        <div className={styles.footer}>飞象章鱼有限责任公司  版权所有@2018-2022</div>
      </div>
    
  )
}
export default LessonView