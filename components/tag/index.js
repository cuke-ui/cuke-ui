import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { CloseIcon } from "../icon";

const types = [
  "default",
  "primary",
  "warning",
  "success",
  "error",
  "info",
  "loading"
];

export default class Tag extends PureComponent {
  state = {
    visible: true,
    animation: false
  };
  ANIMATE_END_TIME = 500;
  static defaultProps = {
    prefixCls: "cuke-tag",
    type: types[0],
    color: "",
    hollow: false,
    dashed: false,
    disabled: false,
    size: "default",
    closable: false,
    circle: false,
    onClose: () => {}
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    type: PropTypes.oneOf(types),
    color: PropTypes.string,
    hollow: PropTypes.bool,
    disabled: PropTypes.bool,
    dashed: PropTypes.bool,
    closable: PropTypes.bool,
    circle: PropTypes.bool,
    onClose: PropTypes.func,
    size: PropTypes.oneOf(["small", "default", "large"])
  };

  onClose = () => {
    this.setState({ animation: true }, () => {
      setTimeout(() => {
        this.setState({ visible: false });
        this.props.onClose();
      }, this.ANIMATE_END_TIME);
    });
  };

  render() {
    const {
      prefixCls,
      className,
      children,
      type,
      disabled,
      hollow,
      dashed,
      size,
      style,
      color,
      onClick,
      closable,
      circle,
      ...attr
    } = this.props;

    const { visible, animation } = this.state;

    if (!visible) {
      return null;
    }
    return (
      <span
        className={cls(prefixCls, className, {
          [`${prefixCls}-${type}`]: type,
          [`${prefixCls}-hollow`]: hollow,
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-large`]: size === "large",
          [`${prefixCls}-small`]: size === "small",
          [`${prefixCls}-dashed`]: dashed,
          [`${prefixCls}-color`]: color,
          [`${prefixCls}-circle`]: circle,
          [`${prefixCls}-hide`]: animation
        })}
        style={{
          backgroundColor: color,
          ...style
        }}
        {...attr}
        onClick={!disabled ? onClick : undefined}
      >
        <span>{children}</span>
        {closable && (
          <span className={cls(`${prefixCls}-close`)} onClick={this.onClose}>
            {<CloseIcon />}
          </span>
        )}
      </span>
    );
  }
}
