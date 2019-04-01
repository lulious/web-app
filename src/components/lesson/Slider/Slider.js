import React from 'react';
import {connect} from 'dva';
import PersonIcon from 'img/person-icon.png';
import ActivePerson from 'img/active-person.png';
import BusIcon from 'img/bus-icon.png';
import ActiveBus from 'img/active-bus.png';
import UmbraIcon from 'img/umbra-icon.png';
import ActiveUm from 'img/active-um.png';
import SoundIcon from 'img/sound-icon.png';
import ActiveSound from 'img/active-sound.png';
import PenIcon from 'img/pen-icon.png';
import ActivePen from 'img/active-pen.png';
import DataIcon from 'img/data-icon.png';
import ActiveData from 'img/active-data.png';
import './Slider.less';

const getCls = (type, active) => {
  return active===type ? 'active' : '';
}

const prefixCls = 'component-lesson-slider';

class Slider extends React.Component{
 
  handleClick = (type) => {
    this.props.setActiveItem({activeItem: type});
  }
  
  render(){
    const active = this.props.activeItem;
    const handleClick = this.handleClick;
    return (
      <div className={prefixCls}>
        <div className={`item action ${getCls('action',active)}`} onClick={()=>{handleClick('action')}}>
          <div className="icon-container">
            <img className="icon" src={active === 'action' ? ActivePerson : PersonIcon} alt="" />
          </div>
          <div className="title">动作</div>
        </div>
        <div className={`item event ${getCls('event',active)}`} onClick={()=>{handleClick('event')}}>
          <div className="icon-container">
            <img className="icon" src={active === 'event' ? ActiveBus : BusIcon} alt="" />
          </div>
          <div className="title">事件</div>
        </div>
        <div className={`item outward ${getCls('outward',active)}`} onClick={()=>{handleClick('outward')}}>
          <div className="icon-container">
            <img className="icon" src={active === 'outward' ? ActiveUm : UmbraIcon} alt="" />
          </div>
          <div className="title">外观</div>
        </div>
        <div className={`item sound ${getCls('sound',active)}`} onClick={()=>{handleClick('sound')}}>
          <div className="icon-container">
            <img className="icon" src={active === 'sound' ? ActiveSound : SoundIcon} alt="" />
          </div>
          <div className="title">声音</div>
        </div>
        <div className={`item pen ${getCls('pen',active)}`} onClick={()=>{handleClick('pen')}}>
          <div className="icon-container"> 
            <img className="icon" src={active === 'pen' ? ActivePen : PenIcon} alt="" />
          </div>
          <div className="title">画笔</div>
        </div>
        <div className={`item data ${getCls('data',active)}`} onClick={()=>{handleClick('data')}}>
          <div className="icon-container">
            <img className="icon" src={active === 'data' ? ActiveData : DataIcon} alt="" />
          </div>
          <div className="title">数据</div>
        </div>
      </div>
    );
  }
}
export default connect(
  ({lesson}) => {
    return {...lesson}
  },
  dispatch => {
    return {
       setActiveItem: (payload) => {
        return dispatch({
          type: 'lesson/set',
          payload
        })
      }
    }
  }
)(Slider);
