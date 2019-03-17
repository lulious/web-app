import React from 'react';
import Header from 'components/lesson/Header/Header';
import Slider from 'components/lesson/Slider/Slider';
import Content from 'components/lesson/Content/Content';
import Result from 'components/lesson/Result/Result';
import styles from './LessonView.less';

const LessonView = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Slider />
        <Content />
        <Result />
      </div> 
    </div>
  )
}
export default LessonView