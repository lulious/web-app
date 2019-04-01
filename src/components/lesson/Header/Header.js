import React from 'react';
import {Button} from 'antd';
import FileIcon from 'img/file-icon.png';
import LogoIcon from 'img/logo-icon.png';
import LogoutIcon from 'img/logout-icon.png';
import SaveIcon from 'img/save-icon.png';
import ToolIcon from 'img/tool-icon.png';
import './Header.less'

const prefixCls = 'component-lesson-header';

const Header = (props) => {
  return (
    <div className={prefixCls}>
      <div className="left">
        <img className="logo" src={LogoIcon} alt="" />
        <span className="title">飞象章鱼</span>
      </div>

      <div className="mid">
        <div className="file">
          <img className="icon" src={FileIcon} alt="" />
          <span>文件</span>
        </div>
        <div className="sperator"></div>
        <div className="tool">
          <img className="icon" src={ToolIcon} alt="" />
          <span>工具</span>
        </div>
        <div className="sperator"></div>
        <div className="save">
          <img className="icon" src={SaveIcon} alt="" />
          <span>保存</span>
        </div>
      </div>

      <div className="right">
        <Button className="button" type="primary">按钮标题</Button>
        <Button className="button" type="primary">按钮标题</Button>
        <img className="icon" src={LogoutIcon} alt="" />
        <span>退出</span>
      </div>
      
    </div>
  );
};

Header.propTypes = {
};

export default Header;
