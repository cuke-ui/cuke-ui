import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { LoadingIcon } from "../icon";

const sizes = {
  small: "small",
  default: "default",
  large: "large"
};

const types = {
  primary: "primary",
  default: "default",
  warning: "warning",
  success: "success",
  error: "error",
  info: "info",
  disabled: "disabled"
};

export default class Button extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-button",
    href: "",
    type: types.default,
    htmlType: "button",
    size: sizes.default,
    loading: false,
    block: false,
    disabled: false,
    hollow: false,
    dashed: false,
    circle: false,
    plain: false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    block: PropTypes.bool,
    hollow: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    dashed: PropTypes.bool,
    circle: PropTypes.bool,
    plain: PropTypes.bool,
    htmlType: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.oneOf(Object.values(types)),
    size: PropTypes.oneOf(Object.values(sizes))
  };
  render() {
    const {
      loading,
      disabled,
      block,
      prefixCls,
      children,
      type,
      className,
      htmlType,
      onClick,
      hollow,
      size,
      href,
      dashed,
      circle,
      plain,
      ...attr
    } = this.props;

    const isDisabled = disabled || loading ? { disabled: true } : { onClick };

    const baseProps = {
      ...attr,
      ...isDisabled,
      type: htmlType,
      className: cls(prefixCls, className, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-default`]: !disabled && type === types.default,
        [`${prefixCls}-normal`]: type === types.default,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-hollow`]: hollow,
        [`${prefixCls}-size-${size}`]: size !== sizes.default,
        [`${prefixCls}-dashed`]: dashed,
        [`${prefixCls}-circle`]: circle,
        [`${prefixCls}-plain`]: plain
      })
    };

    const content = (
      <>
        {loading && !circle && <LoadingIcon className="cuke-loading" />}
        <span>{children}</span>
      </>
    );
    if (href) {
      return (
        <a
          href={disabled ? "javascript:void(0);" : href}
          disabled={disabled}
          className={cls(`${prefixCls}-link`, className, {
            [`${prefixCls}-link-disabled`]: disabled
          })}
          {...attr}
        >
          {content}
        </a>
      );
    }
    return <button {...baseProps}>{content}</button>;
  }
}
