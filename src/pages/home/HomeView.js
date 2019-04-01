import React from 'react';
import styles from './HomeView.less';
import Logo from 'img/logo-1.png';
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
        {/* <Login className={styles.login} /> */}
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
          飞象章鱼通过编程教育与智能硬件的结合，使孩子在图形化编程、游戏设计、软件开发、算法学习、三维设计、程序撰写、智能机器控制、人脸语音识别的过程中了解AI、科技、艺术、数学、人工智能等综合性知识技能，全方位的培养孩子的逻辑思维能力、实践创作能力、跨学科综合能力、审美能力和团队协作能力等综合素养。
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