import React from "react";
import { Tabs } from "antd";
import classnames from "classnames";
import "./Login.less";
import LoginItem from "./LoginItem";
import RegisterItem from './RegisterItem';
import CloseIcon from "img/close-icon.png";

const { TabPane } = Tabs;
const prefixCls = "component-home-login";
const Login = props => {
  const { className, handleClose, activeKey } = props;
  console.log(props);
  const cls = classnames({
    [prefixCls]: true,
    [className]: true
  });
  return (
    <div className={cls}>
      <div className="container">
        <img
          className="close-icon"
          src={CloseIcon}
          alt=""
          onClick={handleClose}
        />
        <Tabs className="tabs" defaultActiveKey={activeKey}>
          <TabPane tab="登录" key="login">
            <LoginItem handleClose={handleClose} />
          </TabPane>
          <TabPane tab="用户注册" key="register">
             <RegisterItem handleClose={handleClose} />
          </TabPane>
          
        </Tabs>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
