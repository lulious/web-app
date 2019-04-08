import React from 'react';
import classNames from 'classnames';
import PlayIcon from 'img/play.png';
import './VideoList.less';

const prefixCls = 'component-video-list';

export default class VideoList extends React.Component{
  render(){
    const {className} = this.props
    const cls = classNames({
      [prefixCls]: true,
      [className]: true
    })
    const map = [
      {
        seq: '01',
        name: '过关斩将',
        time: 20,
        level: '初级',
      },
      {
        seq: '02',
        name: '过关斩将',
        time: 20,
        level: '初级',
      },
      {
        seq: '03',
        name: '过关斩将',
        time: 20,
        level: '初级',
      },
      {
        seq: '04',
        name: '过关斩将',
        time: 20,
        level: '初级',
      },
      {
        seq: '05',
        name: '过关斩将过关斩将',
        time: 20,
        level: '初级',
      },
      {
        seq: '06',
        name: '过关斩将过关斩将过关斩将',
        time: 20,
        level: '初级',
      },
      {
        seq: '07',
        name: '过关斩将',
        time: 20,
        level: '初级',
      },
      {
        seq: '08',
        name: '过关斩将',
        time: 20,
        level: '初级',
      }
     ];
    return (
      <div className={cls}>
        {
          map.map(item=>{
            return (
              <div className="item">
                <img className="play-icon" src={PlayIcon} />
                <span className="seq">第&nbsp;{item.seq}课</span>
                <span className="name">{item.name}</span>
                <span className="time">时长：<span className="orange">{item.time}</span>分钟</span>
                <span className="level">级别：{item.level}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}