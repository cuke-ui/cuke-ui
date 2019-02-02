import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

const types = {
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
    prefixCls: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(types)),
    position: PropTypes.oneOf(Object.values(position)),
    dashed: PropTypes.bool
  };
  static defaultProps = {
    prefixCls: "cuke-divider",
    type: types.horizontal,
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
      position,
      ...attr
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
            [`${prefixCls}-horizontal-title`]:
              children && type === types.horizontal
          }
        )}
        {...attr}
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
