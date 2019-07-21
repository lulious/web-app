
import React from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import {
    Steps, Form, Input, Cascader, Select, Checkbox, Button, InputNumber, Radio, message
} from 'antd';
import { addressData } from 'utils/addressData.min.js';
import { code } from "services/query";
import Header from 'components/university/header/Header';
import Footer from 'components/home/Footer/Footer';
import './SmartRoom.less';
import FormItem from "antd/lib/form/FormItem";

const { Step } = Steps;
const { Option } = Select;
const RadioGroup = Radio.Group;
const residences = addressData;

const prefixCls = 'class-room-page';
class SmartRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            current: 0,
            btnText: '获取验证码',
            seconds: 60,
            clicked: true,
            handleClick: this.getCode,
            info: {}
        }
    }

    getCode = e => {
        const form = this.props.form;
        const phone = form.getFieldValue("phone");
        if (!phone) {
            form.validateFields(["phone"], { force: true });
        } else {
            this.sendCode();
            code({
                mobile: phone
            }).then(res => { });
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

    goToLocation = (type) => {
        this.props.goTo({
            pathname: '/university',
            query: {
                scroll: type
            }
        });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("两次输入的密码不同");
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["passwordCfm"], { force: true });
        }
        callback();
    }

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };


    handleFirstSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const info = this.state.info;
                this.setState({
                    current: 1,
                    info: Object.assign({}, {
                        ...info,
                        name: values.name,
                        qq: values.qq,
                        phone: values.phone
                    })
                })
            }
        });
    }

    handleSecondSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const info = this.state.info;
                this.setState({
                    current: 2,
                    info: Object.assign({}, {
                        ...info,
                        company: values.company,
                        residence: values.residence,
                        type: values.type
                    })
                })
            }
        });
    }
    handleThirdSubmit = (e) => {
        e.preventDefault();
        this.setState({
            current: 3
        })
    }

    handleFourthSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(this.props)
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.goTo('/university');
                message.success('申请智能教室成功！');
            }

        });
    }

    componentDidMount() {
        const scroll = this.props.location.query && this.props.location.query.scroll;
        console.log(scroll)
        scroll && this.goToPart(scroll)
    }

    render() {
        const { current, handleClick, seconds, btnText, clicked, info } = this.state;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
        };
        return (
            <div className={prefixCls}>
                <Header goToLocation={this.goToLocation} />
                <div className="container">
                    <div className="title">欢迎申请开通飞象章鱼智能教室</div>
                    <div className="form-container">
                        <Steps current={current}>
                            <Step title="填写个人信息" />
                            <Step title="填写单位信息" />
                            <Step title="确认提交" />
                            <Step title="完成" />
                        </Steps>
                        {current === 0 ? (
                            <div className="form">
                                <Form {...formItemLayout} onSubmit={this.handleFirstSubmit}>
                                    <Form.Item
                                        label={(
                                            <span>姓名&nbsp;</span>
                                        )}
                                    >
                                        {getFieldDecorator('name', {
                                            initialValue: info.name,
                                            rules: [{ required: true, message: '请输入你的姓名' }],
                                        })(
                                            <Input value={info.name} />
                                        )}
                                    </Form.Item>
                                    <Form.Item
                                        label="QQ号"
                                    >
                                        {getFieldDecorator('qq', {
                                            initialValue: info.qq,
                                            rules: [{ required: true, message: '请输入你的QQ号!' }],
                                        })(
                                            <Input style={{ width: '100%' }} />
                                        )}
                                    </Form.Item>
                                    <Form.Item
                                        label="手机号"
                                    >
                                        {getFieldDecorator('phone', {
                                            initialValue: info.phone,
                                            rules: [{ required: true, message: '请输入你的手机号!' }],
                                        })(
                                            <Input style={{ width: '100%' }} />
                                        )}
                                    </Form.Item>
                                    <Form.Item
                                        label="手机验证码"
                                    >
                                        {getFieldDecorator("code", {
                                            rules: [{ required: true, message: "请输入验证码！" }]
                                        })(
                                            <div className="verification-container">
                                                <Input
                                                    className="verification-input"
                                                    type="password"
                                                    placeholder="输入验证码"
                                                />
                                                <Button
                                                    type="primary"
                                                    className="verification"
                                                    onClick={this.getCode}
                                                    disabled={!clicked}
                                                >
                                                    {
                                                        clicked ? btnText : seconds + 's'
                                                    }
                                                </Button>
                                            </div>
                                        )}
                                    </Form.Item>
                                    <FormItem>

                                        <div className="submit-button-container">
                                            <Button className="step-button" htmlType="submit">下一步</Button>
                                        </div>
                                    </FormItem>
                                </Form>

                            </div>
                        ) : null}
                        {current === 1 ? (
                            <div className="form">
                                <Form {...formItemLayout} onSubmit={this.handleSecondSubmit}>
                                    <Form.Item
                                        label="选择地区"
                                    >
                                        {getFieldDecorator('residence', {
                                            initialValue: info.residence,
                                            rules: [{ type: 'array', required: true, message: '请输入地区!' }],
                                        })(
                                            <Cascader options={residences} placeholder="" />
                                        )}
                                    </Form.Item>
                                    <Form.Item
                                        label="选择或输入单位名称"
                                    >
                                        {getFieldDecorator('company', {
                                            initialValue: info.company,
                                            rules: [{ required: true, message: '请输入单位名称' }],
                                        })(
                                            <Input />
                                        )}
                                    </Form.Item>
                                    <Form.Item
                                        label="选择单位类型"
                                    >
                                        {getFieldDecorator('type', {
                                            initialValue: info.type,
                                            rules: [{ required: true, message: '请选择单位类型！' }],
                                        })(
                                            <RadioGroup className="radio">
                                                <Radio value={0}>学校/教育部门</Radio>
                                                <Radio value={1}>培训机构</Radio>
                                            </RadioGroup>
                                        )}
                                    </Form.Item>
                                    <FormItem>
                                        <div className="submit-button-container">
                                            <Button className="step-button" onClick={() => { this.setState({ current: 0 }) }}>上一步</Button>
                                            <Button className="step-button" htmlType="submit">下一步</Button>
                                        </div>
                                    </FormItem>
                                </Form>

                            </div>
                        ) : null}
                        {current === 2 ? (
                            <div className="form">
                                <div className="info-container">
                                    <div className="left">
                                        <div className="row">
                                            <span className="title">姓名</span>
                                            <span className="text">{info.name}</span>
                                        </div>
                                        <div className="row">
                                            <span className="title">QQ号</span>
                                            <span className="text">{info.qq}</span>
                                        </div>
                                        <div className="row">
                                            <span className="title">手机号</span>
                                            <span className="text">{info.phone}</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="row">
                                            <span className="title">地区</span>
                                            <span className="text">{info.residence}</span>
                                        </div>
                                        <div className="row">
                                            <span className="title">单位名称</span>
                                            <span className="text">{info.company}</span>
                                        </div>
                                        <div className="row">
                                            <span className="title">单位类型</span>
                                            <span className="text">{info.type === 0 ? '学校/教育部门' : '培训机构'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-button-container">
                                    <Button className="step-button" onClick={() => { this.setState({ current: 1 }) }}>上一步</Button>
                                    <Button className="step-button" onClick={this.handleThirdSubmit}>提交</Button>
                                </div>

                            </div>
                        ) : null}
                        {current === 3 ? (
                            <div className="form">
                                <div className="form">
                                    <Form {...formItemLayout} onSubmit={this.handleFourthSubmit}>
                                        <Form.Item
                                            label="账号"
                                        >
                                            <span>83947649</span>
                                        </Form.Item>
                                        <Form.Item
                                            label="密码"
                                        >
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入密码' }],
                                            })(
                                                <Input />
                                            )}
                                        </Form.Item>
                                        <Form.Item
                                            label="确认密码"
                                        >
                                            {getFieldDecorator('passwordQr', {
                                                rules: [{ required: true, message: '请确认密码！' }, {
                                                    validator: this.compareToFirstPassword
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </Form.Item>
                                        <FormItem>
                                            <div className="submit-button-container">
                                                <Button className="step-button" htmlType="submit">确认</Button>
                                            </div>
                                        </FormItem>
                                    </Form>
                                </div>

                            </div>
                        ) : null}
                        <div className="tips">
                            <span className="row">飞象章鱼智能教室申请说明： </span>
                            <span className="row">欢迎全国的学校和培训机构来免费体验教学平台及课程，<span className="red"> 须上传加盖公章的营业执照复印件。</span></span>
                            <span className="row"> 欢迎全国高校教授和行业名师来教学平台授课及分享，<span className="red">须上传个人简历和相关资质证书。</span></span>
                            <span className="row">请根据步骤填写申请资料，我们会在一个工作日内联系您。</span>
                            <span className="red row">*学生／家长无须申请，请用老师提供的学生账号登陆，进入智能教室。</span>
                        </div>

                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}
const SmartRoomForm = Form.create({ name: 'register' })(SmartRoom);
export default connect(
    ({ lesson }) => {
      return { ...lesson };
    },
    dispatch => {
      return {
        goTo(path) {
          dispatch(routerRedux.push(path));
        }
      };
    }
  )(SmartRoomForm);