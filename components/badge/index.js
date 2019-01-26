import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

export default class Badge extends PureComponent {
  static propsTypes = {
    prefixCls: PropTypes.string.isRequired,
    overflowCount: PropTypes.number,
    dot: PropTypes.bool,
    showZero: PropTypes.bool,
    onClick: PropTypes.func
  };
  static defaultProps = {
    prefixCls: "cuke-badge",
    overflowCount: 99,
    showZero: false,
    dot: false,
    onClick: () => {}
  };
  constructor(props) {
    super(props);
  }
  render() {
    const {
      className,
      prefixCls,
      children,
      overflowCount,
      showZero,
      dot,
      count,
      ...attr
    } = this.props;

    return (
      <div className={cls(prefixCls, className)}>
        {count > 0 || showZero ? (
          <span
            className={cls(`${prefixCls}-inner`, { [`${prefixCls}-dot`]: dot })}
            {...attr}
          >
            {dot
              ? undefined
              : count >= overflowCount
                ? `${overflowCount}+`
                : count}
          </span>
        ) : (
          undefined
        )}
        {children}
      </div>
    );
  }
}
