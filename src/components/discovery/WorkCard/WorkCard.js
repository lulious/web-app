import React from "react";
import classNames from "classnames";
import Scan from 'img/scan.png';
import Pick from 'img/pick.png';
import OpenSource from 'img/open-source.png';
import './WorkCard.less';

const prefixCls = 'work-card-container';
const WorkCard = (props) => {
  console.log(props)
  const { className, isOpenSource, coverImg, name, userName, userIcon, scan, pick, goToDetail} = props;
  const cls = classNames({
    [prefixCls]: true,
    [className]: true
  })
  return (
    <div className={cls} onClick={goToDetail}>
      <img className="cover-img" src={coverImg} alt="" />
      {isOpenSource ? (
        <img className="open-source-icon" src={OpenSource} alt="" />
      ) : null}
      <div className="name">{name}</div>
      <div className="count-container">
        <div className="scan-container">
          <img className="scan-icon" src={Scan} alt="" />
          <span>{scan}</span>
        </div>
        <div className="pick-container">
          <img className="pick-icon" src={Pick} alt="" />
          <span>{pick}</span>
        </div>
      </div>
      <div className="user-info">
        <img className="user-icon" src={userIcon} alt="" />
        <span>{userName}</span>
      </div>
    </div>
  )
}
export default WorkCard;