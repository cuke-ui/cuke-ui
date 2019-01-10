import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { EmptyIcon } from "../icon";

export default class Empty extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-empty",
    description: "暂无数据",
    icon: <EmptyIcon />,
    height: 200
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    description: PropTypes.any,
    height: PropTypes.number
  };

  render() {
    const {
      prefixCls,
      className,
      description,
      icon,
      height,
      style,
      ...attr
    } = this.props;

    return (
      <div
        className={cls(prefixCls, className)}
        {...attr}
        style={{
          height,
          ...style
        }}
      >
        <div className={cls(`${prefixCls}-icon`)}>{icon}</div>
        <div className={cls(`${prefixCls}-description`)}>{description}</div>
        {this.props.children}
      </div>
    );
  }
}
