import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

export default class Checkbox extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-checkbox",
    defaultChecked: false,
    indeterminate: false,
    checked: false,
    onChange: () => {}
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    indeterminate: PropTypes.bool
  };
  state = {
    checked: this.props.checked || this.props.defaultChecked
  };
  _onChange = e => {
    this.setState(({ checked }) => {
      return {
        checked: !checked
      };
    });
    this.props.onChange(e);
  };

  render() {
    const {
      className,
      prefixCls,
      disabled,
      children,
      value,
      indeterminate,
      ...attr
    } = this.props;
    const { checked } = this.state;
    return (
      <label className={cls(`${prefixCls}-wrapper`)} {...attr}>
        <span
          className={cls(prefixCls, className, {
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-indeterminate`]: checked && indeterminate
          })}
        >
          <input
            type="checkbox"
            value={value}
            checked={checked}
            className={cls(`${prefixCls}-input`)}
            onChange={this._onChange}
            disabled={disabled}
          />
          <span className={cls(`${prefixCls}-inner`)} />
        </span>
        <span>{children}</span>
      </label>
    );
  }
}
