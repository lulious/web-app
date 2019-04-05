import React from 'react';
import classnames from 'classnames';
import './Login.less';
import LoginLogo from 'img/logo.png';
import LoginItem from './LoginItem';
import CloseIcon from 'img/close-icon.png';

const prefixCls = 'component-home-login';
const Login = (props) => {
  const { className, handleClose } = props
  console.log(props)
  const cls = classnames({
    [prefixCls]: true,
    [className]: true
  })
  return (
    <div className={cls}>
      <div className="container">
        <img className="logo" src={LoginLogo} alt="" />
        <img className="close-icon" src={CloseIcon} alt="" onClick={handleClose} />
        <div className="info">
          <span>&lt;&nbsp;</span>
          <span>少儿编程</span>
          <span>&nbsp;&gt;</span>
        </div>
        <div className="eng-info">Frogramming&nbsp;&nbsp;For&nbsp;&nbsp;Kids </div>
        <LoginItem handleClose={handleClose} />
      </div>
    </div>
  );
};

Login.propTypes = {
};

export default Login;
