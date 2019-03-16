import React from 'react';
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
import styles from './Slider.less'

const getCls = (type, active) => {
  return active===type ? styles.active : '';
}

class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: ''
    }
  }
  handleClick = (type) => {
    this.setState({
      active : type
    });
  }
  render(){
    const active = this.state.active;
    const handleClick = this.handleClick;
    return (
      <div className={styles.slider}>
        <div className={`${styles.item} ${styles.action} ${getCls('action',active)}`} onClick={()=>{handleClick('action')}}>
          <div className={styles['icon-container']}>
            <img className={styles.icon} src={active === 'action' ? ActivePerson : PersonIcon} alt="" />
          </div>
          <div className={styles.title}>动作</div>
        </div>
        <div className={`${styles.item} ${styles.event} ${getCls('event',active)}`} onClick={()=>{handleClick('event')}}>
          <div className={styles['icon-container']}>
            <img className={styles.icon} src={active === 'event' ? ActiveBus : BusIcon} alt="" />
          </div>
          <div className={styles.title}>事件</div>
        </div>
        <div className={`${styles.item} ${styles.outward} ${getCls('outward',active)}`} onClick={()=>{handleClick('outward')}}>
          <div className={styles['icon-container']}>
            <img className={styles.icon} src={active === 'outward' ? ActiveUm : UmbraIcon} alt="" />
          </div>
          <div className={styles.title}>外观</div>
        </div>
        <div className={`${styles.item} ${styles.sound} ${getCls('sound',active)}`} onClick={()=>{handleClick('sound')}}>
          <div className={styles['icon-container']}>
            <img className={styles.icon} src={active === 'sound' ? ActiveSound : SoundIcon} alt="" />
          </div>
          <div className={styles.title}>声音</div>
        </div>
        <div className={`${styles.item} ${styles.pen} ${getCls('pen',active)}`} onClick={()=>{handleClick('pen')}}>
          <div className={styles['icon-container']}> 
            <img className={styles.icon} src={active === 'pen' ? ActivePen : PenIcon} alt="" />
          </div>
          <div className={styles.title}>画笔</div>
        </div>
        <div className={`${styles.item} ${styles.data} ${getCls('data',active)}`} onClick={()=>{handleClick('data')}}>
          <div className={styles['icon-container']}>
            <img className={styles.icon} src={active === 'data' ? ActiveData : DataIcon} alt="" />
          </div>
          <div className={styles.title}>数据</div>
        </div>
      </div>
    );
  }
}
export default Slider;
