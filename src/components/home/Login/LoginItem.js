import React from 'react';
import {
  Form, Input, Button, Checkbox,
} from 'antd';
import UserIcon from 'img/user-icon.png';
import PassIcon from 'img/password-icon.png';
import './Login.less';

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名或手机号！' }],
          })(
            <Input prefix={<img src={UserIcon} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input prefix={<img src={PassIcon} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        <Form.Item>
          <Checkbox>下次自动登录</Checkbox>
          <a className="login-form-forgot" href="">忘记密码</a>
        </Form.Item>  
      </Form>
    );
  }
}
const LoginItem = Form.create({ name: 'login' })(LoginForm);
export default LoginItem;