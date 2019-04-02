
import React from 'react';
import classnames from 'classnames';
import './Register.less';
import LoginLogo from 'img/logo-1.png';
import RegisterItem from './RegisterItem';
import CloseIcon from 'img/close-icon.png';

const prefixCls = 'component-home-register';
const Register = (props) => {
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
          用户注册
        </div>
        <RegisterItem handleClose={handleClose} />
      </div>
    </div>
  );
};

Register.propTypes = {
};

export default Register;
