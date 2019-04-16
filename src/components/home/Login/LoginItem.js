import React from 'react';
import {
  Form, Input, Button, Checkbox,
} from 'antd';
import UserIcon from 'img/user-icon.png';
import PassIcon from 'img/password-icon.png';
import {login} from 'services/query';
import './Login.less';

class LoginForm extends React.Component {
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
        const userName = values.userName;
        const password = values.password;
        // 判断用户和密码 与 后台是否符合
        login({
          username: userName,
          password: password
        }).then(res =>{
          console.log('登录成功');
          console.log(res);
          this.props.handleClose();
        })
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
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名或手机号！' }],
          })(
            <Input prefix={<img src={UserIcon} alt="" />} placeholder="用户名/手机号" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input prefix={<img src={PassIcon} alt="" />} type="password" placeholder="密码" />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          登录
        </Button>
        <Form.Item>
          <Checkbox className="checkbox" onChange={this.onChange}>下次自动登录</Checkbox>
          <a className="login-form-forgot" href="">忘记密码</a>
        </Form.Item>  
      </Form>
    );
  }
}
const LoginItem = Form.create({ name: 'login' })(LoginForm);
export default LoginItem;