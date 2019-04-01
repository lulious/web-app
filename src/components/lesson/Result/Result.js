import React from 'react';
import ColdIcon from 'img/cold.png';
import './Result.less';

const prefixCls = 'component-lesson-result';
export default class Result extends React.Component{
  render(){
    return (
      <div className={prefixCls}>
        <img className="cold" src={ColdIcon} alt="" />
      </div>
    )
  }
}