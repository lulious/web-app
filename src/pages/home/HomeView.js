import React from 'react';
import styles from './HomeView.less';
import Logo from 'img/logo.png';
import Content from 'img/content-2.png';
import Teacher from 'img/content-3.png';
import Lesson from 'img/content-4.png';
import Computer from 'img/computer-icon.png';
import Hand from 'img/hand-icon.png';
import Fly from 'img/fly-icon.png';

const LessonView = (props) => {
  
  return (
      <div className={styles.container}>
        <div className={styles['content-1']}>
          <img className={styles.logo} src={Logo} alt="" />
          <div className={styles.feature}>
            <div className={styles.computer}>
              <img className={styles['computer-icon']} src={Computer} alt="" />
              <span>趣味图形化编程课</span>
              <span>入门优选</span>
              <span>让编程像搭积木一样好玩</span>
            </div>
            <div className={styles.hand}>
              <img className={styles['hand-icon']} src={Hand} alt="" />
              <span>Python游戏化编程课</span>
              <span>列入高考科目</span>
              <span>学Python要从娃娃抓起</span>
            </div>
            <div className={styles.fly}>
              <img className={styles['fly-icon']} src={Fly} alt="" />
              <span>1对1大师课</span>
              <span>沉浸式学习</span>
              <span>真正放飞想像力</span>
            </div>
          </div>
        </div>
        <img className={styles['content-2']} src={Content} alt="" />
        <img className={styles['content-3']} src={Teacher} alt="" />
        <img className={styles['content-4']} src={Lesson} alt="" />
        <div className={styles.footer}>飞象章鱼有限责任公司  版权所有@2018-2022</div>
      </div>
    
  )
}
export default LessonView