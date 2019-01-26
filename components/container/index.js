import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Container extends React.PureComponent {
  static defaultProps = {
    width: 1200,
    center: false,
    prefixCls: "cuke-container"
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    center: PropTypes.bool
  };
  render() {
    const {
      className,
      prefixCls,
      width,
      style,
      children,
      center,
      ...attr
    } = this.props;
    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-centered`]: center
        })}
        style={{
          ...style,
          width
        }}
        {...attr}
      >
        <div className={cls(`${prefixCls}-wrap`)}>{children}</div>
      </div>
    );
  }
}
