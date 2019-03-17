import React from 'react';
import ColdIcon from 'img/cold.png';
import styles from './Result.less';

export default class Result extends React.Component{
  render(){
    return (
      <div className={styles.result}>
        <img className={styles.cold} src={ColdIcon} alt="" />
      </div>
    )
  }
}