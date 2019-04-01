import React from 'react';
import Header from 'components/lesson/Header/Header';
import Slider from 'components/lesson/Slider/Slider';
import Content from 'components/lesson/Content/Content';
import Result from 'components/lesson/Result/Result';
import './LessonView.less';

const prefixCls = 'lesson-page-container';

const LessonView = (props) => {
  
  return (
      <div className={prefixCls}>
        <Header />
        <div className="content">
          <Slider />
          <Content />
          <Result />
        </div> 
      </div>
    
  )
}
export default LessonView