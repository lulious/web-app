import React from "react";
import classNames from "classnames";
import { Form, Input, Button } from "antd";
import PhoneIcon from "img/phone.png";
import DiscountIcon from "img/discount-icon.png";
import "./FixedForm.less";

class FixedFormItem extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // 判断用户和密码 与 后台是否符合
        const { phone } = values;
        
        this.props.applySuccess();
      }
    });
  };

  render() {
    const { className, bottom } = this.props;
    const { getFieldDecorator } = this.props.form;
    const cls = classNames({
      [className]: true,
      component_fixed_form_container: true
    });
    return (
      <div className={cls} style={{bottom: bottom}}>
        <div className="fixed-form-container">
        <img className="discount-icon" src={DiscountIcon} alt="" />
        <div>
        免费领取价值 
          <span className="red">258</span>
          元试听课
        </div>
        <Form layout="inline"  onSubmit={this.handleSubmit} className="lesson-form-form">
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
            <Button className="button" htmlType="submit">
              立即领取
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    );
  }
}
const FixedForm = Form.create({ name: "FixedForm" })(FixedFormItem);
export default FixedForm;
