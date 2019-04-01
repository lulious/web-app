import React from 'react';
import classnames from 'classnames';
import styles from './Login.less';
import LoginLogo from 'img/logo-1.png';
import LoginItem from './LoginItem';


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
        <img className={styles.logo} src={LoginLogo} alt="" />
        <LoginItem />
      </div>
    </div>
  );
};

Login.propTypes = {
};

export default Login;
