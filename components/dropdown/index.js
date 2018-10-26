import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

const triggerTypes = {
  hover: "hover",
  click: "click"
};

const animateType = [
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
  "none",
  false
];

export default class Dropdown extends PureComponent {
  state = {
    visible: false
  };
  static defaultProps = {
    prefixCls: "cuke-dropdown",
    animate: animateType[0],
    trigger: Object.values(triggerTypes)[0],
    onVisibleChange: () => { }
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onVisibleChange: PropTypes.func,
    trigger: PropTypes.oneOf(Object.values(triggerTypes)),
    animate: PropTypes.oneOf(animateType),
    overlay: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ])
  };
  constructor(props) {
    super(props);
  }

  onShowOverlay = () => {
    this.setState({ visible: true });
    this.props.onVisibleChange(true);
  };
  onHideOverlay = () => {
    this.setState({ visible: false });
    this.props.onVisibleChange(false);
  };
  render() {
    const { visible } = this.state;
    const {
      prefixCls,
      className,
      children,
      overlay,
      disabled,
      trigger,
      animate,
      onVisibleChange, //eslint-disable-line
      ...attr
    } = this.props;

    const isHover = trigger === triggerTypes["hover"];
    /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
    const bindEvents = disabled
      ? {}
      : {
        [isHover ? "onMouseEnter" : "onMouseDown"]: this.onShowOverlay,
        [isHover ? "onMouseLeave" : "onBlur"]: this.onHideOverlay
      };
    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled
        })}
        {...attr}
        {...bindEvents}
      >
        {disabled ? (
          <div className={cls(`${prefixCls}-disabled-mask`)} />
        ) : (
            undefined
          )}
        <div className={cls(`${prefixCls}-wrap`)}>{children}</div>
        <div
          className={cls(`${prefixCls}-overlay`, {
            [`${prefixCls}-overlay-show`]: visible,
            [`${prefixCls}-overlay-${animate}`]: true
          })}
        >
          {overlay}
        </div>
      </div>
    );
  }
}
