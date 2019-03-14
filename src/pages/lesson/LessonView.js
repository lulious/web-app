import React from 'react';
import Header from '../../components/Header/Header'
import styles from './LessonView.less';



const LessonView = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.left}>left</div>
        <div className={styles.mid}>mid</div>
        <div className={styles.right}>right</div>
      </div> 
    </div>
  )
}
export default LessonView