import React from 'react';
import {
  Form, Input, Button, Checkbox, Modal
} from 'antd';
import PhoneIcon from 'img/register-phone-icon.png';
import PassIcon from 'img/password-icon.png';
import {register, code} from 'services/query';
import './Register.less';

class RegisterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmDirty: false
    }
  }

  handleSubmit = (e) => {
    console.log('提交')
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // 判断用户和密码 与 后台是否符合
        const {phone, password, code}  = values ;
        register({
          mobile: phone,
          password: password,
          code: code
        }).then(res => {
          console.log('注册成功')
          console.log(res);
          this.props.handleClose();
        })
       
      }
    });
  }

  getCode = (e) => {
    const form = this.props.form;
    const phone = form.getFieldValue('phone');
    if(!phone){
      form.validateFields(['phone'], { force: true });
    } else{
      code({
        mobile: phone
      }).then(res => {
  
      })
    }
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不同');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['passwordCfm'], { force: true });
    }
    callback();
  }

  showProcotal = () => {
    Modal.info({
      title: '注册协议书',
      okText: '知道了',
      width: '50%',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  render() {
    const { goToLogin } = this.props;
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
              <Button type="primary" className="verification" onClick={this.getCode}>验证码</Button>
            </div>
          )}
        </Form.Item>
        <div className="title">请设置登录密码</div>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ 
              required: true, message: '请输入密码！'
           },{
              validator: this.validateToNextPassword,
            }],
          })(
            <Input prefix={<img src={PassIcon} alt="" />} type="password" placeholder="8-18字母、数字与字符" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('passwordCfm', {
            rules: [{ 
              required: true, message: '请再次输入密码！' 
            },{
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input prefix={<img src={PassIcon} alt="" />} type="password" placeholder="确认密码" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="register-form-button" >
          注册
        </Button>
        <Form.Item>
          {getFieldDecorator('checkbox', {
            rules: [{ required: true, message: '请勾选已阅读注册协议' }],
          })(
            <Checkbox className="checkbox" onChange={this.onChange}>已阅读<span className="procotal" onClick={this.showProcotal}>注册协议</span></Checkbox>
          )}
        </Form.Item> 
        <div className="gradient">
          <Button type="primary" className="go-to-login-button"  onClick={goToLogin}>
          已有账号，去登录
         </Button>
        </div>
      </Form>
    );
  }
}
const RegisterItem = Form.create({ name: 'register' })(RegisterForm);
export default RegisterItem;