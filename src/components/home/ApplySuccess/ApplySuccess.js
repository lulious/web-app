import React from "react";
import { Button } from "antd";
import classnames from "classnames";
import "./ApplySuccess.less";

const prefixCls = "component-home-ApplySuccess";
const ApplySuccess = props => {
  const { className, handleClose, lesson} = props;
  console.log(props);
  const cls = classnames({
    [prefixCls]: true,
    [className]: true
  });
  return (
    <div className={cls}>
      <div className="container">
        <div className="info">
          您已领取了<span className="red">《{lesson}》</span>相关试听课程，
          <div>请及时查看，谢谢</div>
        </div>
        <Button className="button" onClick={handleClose}>
          我知道了
        </Button>
      </div>
    </div>
  );
};

ApplySuccess.propTypes = {};

export default ApplySuccess;
