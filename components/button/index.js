import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { LoadingIcon } from "../icon";

export default class Button extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-button",
    href: "",
    type: "default",
    htmlType: "button",
    size: "default",
    loading: false,
    block: false,
    disabled: false,
    hollow: false,
    dashed: false,
    circle: false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    block: PropTypes.bool,
    hollow: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    dashed: PropTypes.bool,
    circle: PropTypes.bool,
    htmlType: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.oneOf([
      "primary",
      "default",
      "warning",
      "success",
      "error",
      "info",
      "disabled"
    ]),
    size: PropTypes.oneOf(["small", "default", "large"])
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
      ...attr
    } = this.props;

    const checkType = btnType => {
      return type === btnType;
    };

    const isDisabled = disabled || loading ? { disabled: true } : { onClick };

    const baseProps = {
      ...attr,
      ...isDisabled,
      type: htmlType,
      className: cls(prefixCls, {
        [`${prefixCls}-primary`]: checkType("primary"),
        [`${prefixCls}-warning`]: checkType("warning"),
        [`${prefixCls}-success`]: checkType("success"),
        [`${prefixCls}-error`]: checkType("error"),
        [`${prefixCls}-default`]: !disabled && checkType("default"),
        [`${prefixCls}-normal`]: checkType("default"),
        [`${prefixCls}-info`]: checkType("info"),
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-hollow`]: hollow,
        [`${prefixCls}-large`]: size === "large",
        [`${prefixCls}-small`]: size === "small",
        [`${prefixCls}-dashed`]: dashed,
        [`${prefixCls}-circle`]: circle,
        className
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
