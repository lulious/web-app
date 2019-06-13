import React from 'react';
import { Radio } from 'antd';
import Header from 'components/home/Header/Header';
import Footer from 'components/home/Footer/Footer';
import Login from 'components/home/Login/Login';
import ApplyIcon from 'img/apply-icon.png';
import Zhifubao from 'img/zhifubao.png';
import Weixin from 'img/weixin.png';
import Qrcode from 'img/qrcode.png';

import './PayPage.less';
const RadioGroup = Radio.Group;
const prefixCls = 'pay-page-container';
export default class PayPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showLogin: false,
      showRegister: false,
      pay: 0
    }
  }

  setShowLogin = (type) => {
    this.setState({
      showLogin: type
    })
  }

  setShowRegister = type => {
    this.setState({
      showRegister: type
    })
  }

  onChange = e => {
    this.setState({
      pay: e.target.value
    });
  }
  render(){
    const  { showLogin, showRegister, pay } = this.state;
    return (
      <div className={prefixCls}>   
        {showLogin ? <Login handleClose={() => this.setShowLogin(false)} activeKey="login" /> : null}
      {showRegister ? (
        <Login handleClose={() => this.setShowRegister(false)} activeKey="register" />
      ) : null}
        <div className="content">
          <Header setShowLogin={this.setShowLogin} setShowRegister={this.setShowRegister}  />
          <div className="info">
            <img className="apply-icon" src={ApplyIcon} alt="" />
            <span className="blue">在线支付</span>
          </div> 
          <div className="account">
            <div>当前账户：<span className="red">小象001</span></div>
            <div className="lesson">购买课程：
              <span className="bold">编程基础</span>
              <span className="button">修改</span>
            </div>
            <div>支付金额：<span className="money">¥745</span></div>
          </div>
          <div className="pay-container">
            <div className="label">支付方式：</div>
            <RadioGroup onChange={this.onChange} value={pay}>
              <div className="pay" style={pay === 0 ? {border: '1px solid #ccc'} : {}}>
                <Radio value={0} />
                <img className="icon" src={Zhifubao} alt="" />
                <span>支付宝支付</span>
              </div>
              <div className="pay" style={pay === 1 ? {border: '1px solid #ccc'} : {}}>
                <Radio value={1} />
                <img className="icon" src={Weixin} alt="" />
                <span>微信支付</span>
              </div>
            </RadioGroup>
            <div className="qrcode">
              <img src={Qrcode} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
