import React from 'react';
import FileIcon from '../../../public/img/file-icon.png';
import LogolIcon from '../../../public/img/logol-icon.png';
import LogoutIcon from '../../../public/img/logout-icon.png';
import SaveIcon from '../../../public/img/save-icon.png';
import ToolIcon from '../../../public/img/tool-icon.png';
import styles from './Header.less'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={LogolIcon} alt="" />
      <img src={FileIcon} alt="" />
      <img src={SaveIcon} alt="" />
      <img src={ToolIcon} alt="" />
      <img src={LogoutIcon} alt="" />
    </div>
  );
};

Header.propTypes = {
};

export default Header;
