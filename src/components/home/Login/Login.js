
import React from 'react';
import classnames from 'classnames'
import styles from './Login.less'
import LoginLogo from 'img/login-logo.png'

const Login = (props) => {
  const { className } = props
  console.log(props)
  const cls = classnames({
    [styles.login]: true,
    [className]: true
  })
  return (
    <div className={cls}>
      <div className={styles.container}>
        <img className={styles.logo} src={LoginLogo} />
        <div className={styles.info}>
          <span>编程学习去哪里</span>
          <span>飞象章鱼属于你</span>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
};

export default Login;
