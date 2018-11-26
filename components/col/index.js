import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Col extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-col",
    gutter: 0
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    const {
      gutter,
      prefixCls,
      className,
      style,
      span,
      offset,
      ...attr
    } = this.props;

    const colStyle = gutter
      ? {
          paddingLeft: gutter / 2,
          paddingRight: gutter / 2
        }
      : {};

    return (
      <div
        className={cls(
          prefixCls,
          { [`${prefixCls}-${span}`]: span },
          { [`${prefixCls}-offset-${offset}`]: offset },
          className
        )}
        style={{
          ...style,
          ...colStyle
        }}
        {...attr}
      >
        {this.props.children}
      </div>
    );
  }
}
