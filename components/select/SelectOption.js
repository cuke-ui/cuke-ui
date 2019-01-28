import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Option extends React.PureComponent {
  static defaultProps = {
    prefixCls: "cuke-select-option",
    disabled: false,
    value: ""
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  onClick = (value, children) => {
    if (this.props.onChange) {
      this.props.onChange(value, children);
    }
  };
  trim = (value = "") => {
    const _value = Array.prototype.join.call(value, "");
    return _value.replace(/\s/g, "");
  };
  render() {
    const {
      children,
      className,
      prefixCls,
      disabled,
      value,
      selectedValue,
      ...attr
    } = this.props;

    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-selected`]:
            selectedValue === value ||
            this.trim(selectedValue) === this.trim(children),
          [`${prefixCls}-disabled`]: disabled
        })}
        onClick={disabled ? undefined : () => this.onClick(value, children)}
        {...attr}
      >
        {children}
      </div>
    );
  }
}
