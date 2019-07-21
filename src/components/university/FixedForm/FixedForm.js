import React from "react";
import classNames from "classnames";
import ApplyIcon from 'img-tob/fixed-form-logo.png';

import "./FixedForm.less";

class FixedForm extends React.Component {

  render() {
    const { className, bottom, handlePeopleApply, handlePersonApply} = this.props;
    const cls = classNames({
      [className]: true,
      component_university_fixed_form_container: true
    });
    return (
      <div className={cls} style={{bottom: bottom}}>
        <div className="fixed-form-container">
        <img className="fixed-form-logo" src={ApplyIcon} alt="" />
        <div className="apply-bg-1" onClick={handlePeopleApply}>
          <span className="yellow">1680元</span>
        </div>
        <div className="apply-bg-2" onClick={handlePersonApply}>
          <span className="red">1980元</span>
        </div>
        </div>
      </div>
    );
  }
}
export default FixedForm;
