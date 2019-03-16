import React from 'react';
import {Button} from 'antd';
import FileIcon from 'img/file-icon.png';
import LogoIcon from 'img/logo-icon.png';
import LogoutIcon from 'img/logout-icon.png';
import SaveIcon from 'img/save-icon.png';
import ToolIcon from 'img/tool-icon.png';
import styles from './Header.less'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img className={styles.logo} src={LogoIcon} alt="" />
        <span className={styles.title}>飞象章鱼</span>
      </div>

      <div className={styles.mid}>
        <div className={styles.file}>
          <img className={styles.icon} src={FileIcon} alt="" />
          <span>文件</span>
        </div>
        <div className={styles.sperator}></div>
        <div className={styles.tool}>
          <img className={styles.icon} src={ToolIcon} alt="" />
          <span>工具</span>
        </div>
        <div className={styles.sperator}></div>
        <div className={styles.save}>
          <img className={styles.icon} src={SaveIcon} alt="" />
          <span>保存</span>
        </div>
      </div>

      <div className={styles.right}>
        <Button className={styles.button} type="primary">按钮标题</Button>
        <Button className={styles.button} type="primary">按钮标题</Button>
        <img className={styles.icon} src={LogoutIcon} alt="" />
        <span>退出</span>
      </div>
      
    </div>
  );
};

Header.propTypes = {
};

export default Header;
