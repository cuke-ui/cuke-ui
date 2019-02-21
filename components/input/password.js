import React, { PureComponent } from "react";
import { PasswordShowIcon, PasswordHideIcon } from "../icon";
import Input from "./input";

export default class InputPassword extends PureComponent {
  state = {
    passwordVisible: false
  };

  static defaultProps = {
    prefixCls: "cuke-input-password"
  };

  onTogglePasswordVisible = () => {
    this.setState({
      passwordVisible: !this.state.passwordVisible
    });
  };

  render() {
    const { prefixCls, ...attr } = this.props;
    const { passwordVisible } = this.state;
    const suffix = passwordVisible ? (
      <PasswordHideIcon />
    ) : (
      <PasswordShowIcon />
    );
    const type = passwordVisible ? "text" : "password";
    return (
      <Input
        {...attr}
        type={type}
        className={prefixCls}
        suffix={
          <div
            className={`${prefixCls}-suffix`}
            onClick={this.onTogglePasswordVisible}
          >
            {suffix}
          </div>
        }
      />
    );
  }
}
