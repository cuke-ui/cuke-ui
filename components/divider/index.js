import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./styles.less";

const type = {
  horizontal: "horizontal",
  vertical: "vertical"
};
const position = {
  left: "left",
  right: "right",
  center: "center"
};

export default class Divider extends PureComponent {
  static propsTypes = {
    prefixCls: PropTypes.string,
    type: PropTypes.oneOf(Object.values(type)),
    position: PropTypes.oneOf(Object.values(position)),
    dashed: PropTypes.bool
  };
  static defaultProps = {
    prefixCls: "cuke-divider",
    type: type.horizontal,
    dashed: false,
    position: position.center
  };
  constructor(props) {
    super(props);
  }
  render() {
    const {
      className,
      prefixCls,
      type,
      dashed,
      children,
      position
    } = this.props;

    return (
      <div
        className={cls(
          prefixCls,
          className,
          `${prefixCls}-${type}`,
          `${prefixCls}-horizontal-title-${position}`,
          {
            [`${prefixCls}-dashed`]: dashed,
            [`${prefixCls}-horizontal-title`]: children && type === "horizontal"
          }
        )}
      >
        {children && (
          <>
            <b />
            <span className={`${prefixCls}-title-text`}>{children}</span>
            <b />
          </>
        )}
      </div>
    );
  }
}
