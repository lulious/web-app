import React from 'react';
import classNames from 'classnames';
import {
  Form, Input, Cascader, Select,  Checkbox, Button, InputNumber, Radio
} from 'antd';
import { addressData } from 'utils/addressData.min.js';
import { join } from 'services/query';
import './ApplyForm.less';

const { Option } = Select;
const RadioGroup = Radio.Group;

const residences = addressData;

const prefixCls = 'component-apply-form';

class ApplyFormItem extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const lessonId = this.props.lessonId;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { name, age, gender, level, phone, residence, email } = values;
        join({
          name: name,
          age: age,
          gender: gender,
          level: level,
          phone: phone,
          residence: residence,
          email: email,
          lessonId: lessonId,
          token: sessionStorage.getItem('token')
        }).then(res => {
          console.log('报名成功')
        })
      }
    });
  }

  render() {
    const { className } = this.props;
    const cls = classNames({
      [prefixCls]: true,
      [className]: true
    })
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    return (
      <Form className={cls} {...formItemLayout} onSubmit={this.handleSubmit} hideRequiredMark>
        <Form.Item
          label={(
            <span>
              姓名&nbsp;
            </span>
          )}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入你的姓名'}],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label={(
            <span>
              学员年龄&nbsp;
            </span>
          )}
        >
          {getFieldDecorator('age', {
            rules: [{ required: true, message: '请输入你的年龄!'}],
          })(
            <InputNumber min={1} />
          )}
        </Form.Item>
        <Form.Item
          className="gender-form"
          label={(
            <span>
              性别&nbsp;
            </span>
          )}
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: '请输入你的性别!'}],
          })(
            <RadioGroup className="radio">
              <Radio value={0}>男</Radio>
              <Radio value={1}>女</Radio>
            </RadioGroup>
          )}
        </Form.Item>
        <Form.Item
          label={(
            <span>
              报名级别&nbsp;
            </span>
          )}
        >
          {getFieldDecorator('level', {
            rules: [{ required: true, message: '请输入你的报名级别!'}],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label={(
            <span>
              联系电话&nbsp;
            </span>
          )}
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入你的联系电话!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </Form.Item>
        <Form.Item
          label={(
            <span>
              所在城市&nbsp;
            </span>
          )}
        >
          {getFieldDecorator('residence', {
            rules: [{ type: 'array', required: true, message: '请输入你所在的城市!' }],
          })(
            <Cascader options={residences} placeholder="" />
          )}
        </Form.Item>
        <Form.Item
          label={(
            <span>
              邮箱&nbsp;
            </span>
          )}
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '输入的是非法邮箱!',
            }, {
              required: true, message: '请输入你的邮箱!',
            }],
          })(
            <Input />
          )}
        </Form.Item>

        {/* <Form.Item > */}
          <Button htmlType="submit">提交报名申请</Button>
        {/* </Form.Item> */}

        <Form.Item >
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox className="checkbox">我已认真阅读<a href="">报名须知</a></Checkbox>
          )}
        </Form.Item>  
      </Form>
    );
  }
}

const ApplyForm = Form.create({ name: 'register' })(ApplyFormItem);

export default ApplyForm;

