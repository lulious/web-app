import React from "react";
import classNames from "classnames";
import Scan from 'img/scan.png';
import Pick from 'img/pick.png';
import './RecommandItem.less';

const prefixCls = 'recommand-item-container';
const RecommandItem = (props) => {
  console.log(props)
  const { className, coverImg, name, userName, userIcon, scan, pick} = props;
  const cls = classNames({
    [prefixCls]: true,
    [className]: true
  })
  return (
    <div className={cls}>
      <img className="cover-img" src={coverImg} alt="" />
      <div className="right">
        <div className="name">{name}</div>
        <div className="scan-pick">
          <div className="scan">
            <img className="scan-icon" src={Scan} alt="" />
            <span>{scan}</span>
          </div>
          <div className="pick">
            <img className="pick-icon" src={Pick} alt="" />
            <span>{pick}</span>
          </div>
        </div>
        <div className="user-info">
          <img className="user-icon" src={userIcon} alt="" />
          <span className="user-name">{userName}</span>
        </div>
      </div>
    </div>
  )
}
export default RecommandItem;