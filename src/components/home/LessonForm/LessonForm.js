import React from "react";
import classNames from "classnames";
import { Form, Input, Button, Select } from "antd";
import { code } from "services/query";
import PhoneIcon from "img/phone.png";
import "./LessonForm.less";
const prefix = "lesson-form-container";
const { Option } = Select;
class LessonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      btnText: '获取验证码',
      seconds: 60,
      clicked: true,
      handleClick: this.getCode
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // 判断用户和密码 与 后台是否符合
        const { phone, grade, code } = values;
        if(phone && code){
          this.props.applySuccess();
        }
      }
      
    });
  };

  getCode = e => {
    const form = this.props.form;
    const phone = form.getFieldValue("phone");
    if (!phone) {
      form.validateFields(["phone"], { force: true });
    } else {
      this.sendCode();
      code({
        mobile: phone
      }).then(res => {});
    }
  };

  // 定时
  sendCode = () => {
    let siv = setInterval(() => {
      this.setState(
        {
          clicked: false,
          seconds: this.state.seconds - 1,
          handleClick: null
        },
        () => {
          if (this.state.seconds === 0) {
            clearInterval(siv);
            this.setState({
              clicked: true,
              seconds: 60,
              handleClick: this.getCode
            });
          }
        }
      );
    }, 1000);
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    const { className } = this.props;
    const { getFieldDecorator } = this.props.form;
    const cls = classNames({
      [className]: true,
      [prefix]: true
    });
    const { seconds, btnText, clicked, handleClick } = this.state;
    return (
      <div className={cls}>
        <div>免费领取</div>
        <div>
          价值
          <span className="orange">258</span>
          元试听课
        </div>
        <Form onSubmit={this.handleSubmit} className="lesson-form-form">
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [{ required: true, message: "请输入手机号！" }]
            })(
              <Input
                prefix={<img className="phone-icon" src={PhoneIcon} alt="" />}
                placeholder="请输入手机号"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("code", {
              rules: [{ required: true, message: "请输入验证码！" }]
            })(
              <div className="verification-container">
                <Input
                  className="verification-input"
                  placeholder="请输入验证码"
                />
                <span className="verification" onClick={handleClick}>
                  {
                    clicked ? btnText : seconds + 's'
                  }
                </span>
              </div>
            )}
          </Form.Item>
          <Form.Item>
            <Select
              placeholder="年级（可选）"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="jack">一年级</Option>
              <Option value="lucy">二年级</Option>
              <Option value="Yiminghe">三年级</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button className="button" htmlType="submit">
              立即领取
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const LessonFormItem = Form.create({ name: "lessonForm" })(LessonForm);
export default LessonFormItem;
