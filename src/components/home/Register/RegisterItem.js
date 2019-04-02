import React from 'react';
import {
  Form, Input, Button, Checkbox,
} from 'antd';
import PhoneIcon from 'img/register-phone-icon.png';
import PassIcon from 'img/password-icon.png';
import './Register.less';

class RegisterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
    
        // 判断用户和密码 与 后台是否符合
        this.props.handleClose();
      }
    });
  }

  onChange = (e) => {
    const checked = e.target.checked;
    this.setState({
      checked: checked
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <Form.Item>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号！' }],
          })(
            <Input prefix={<img src={PhoneIcon} alt="" />} placeholder="手机号" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('code', {
            rules: [{ required: true, message: '请输入验证码！' }],
          })(
            <div className="verification-container">
              <Input className="verification-input" prefix={<img src={PassIcon} alt="" />} type="password" placeholder="输入验证码" />
              <Button type="primary" className="verification" >验证码</Button>
            </div>
          )}
        </Form.Item>
        <div className="title">请设置登录密码</div>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input prefix={<img src={PassIcon} alt="" />} type="password" placeholder="8-18字母、数字与字符" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('passwordCfm', {
            rules: [{ required: true, message: '请输入确认！' }],
          })(
            <Input prefix={<img src={PassIcon} alt="" />} type="password" placeholder="确认密码" />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="register-form-button" >
          注册
        </Button>
        <Form.Item>
          <Checkbox className="checkbox" onChange={this.onChange}>已阅读<a className="procotal" href="">注册协议</a></Checkbox>
        </Form.Item> 
        <div className="gradient">
          <Button type="primary" className="go-to-login-button" >
          已有账号，去登录
         </Button>
        </div>
        
      </Form>
    );
  }
}
const RegisterItem = Form.create({ name: 'register' })(RegisterForm);
export default RegisterItem;