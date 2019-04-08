import React from 'react';
import classNames from 'classnames';
import './VideoCard.less';

const prefixCls = 'component-video-card';

export default class VideoCard extends React.Component{
  render(){
    const {className} = this.props
    const cls = classNames({
      [prefixCls]: true,
      [className]: true
    })
    const map = ['01','02','03','04','05','06','07', '08','09','10','11','12','13','14','15','16'];
    return (
      <div className={cls}>
        <div className="title">05 如果</div>
        <div className="info">这是一次勇气的训练，超声蝠到底能否顺利</div>
        <div className="video-list">
          {
            map.map(item=>{
              return (
                <span className="item">{item}</span>
              )
            })
          }
        </div>
      </div>
    )
  }
}