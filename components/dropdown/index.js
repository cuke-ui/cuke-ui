import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import cls from "classnames";
import { debounce } from "../utils";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";

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
    visible: false,
    top: 0,
    left: 0
  };
  static defaultProps = {
    prefixCls: "cuke-dropdown",
    animate: animateType[0],
    trigger: triggerTypes.hover,
    position: "bottom",
    onVisibleChange: () => {},
    getPopupContainer: () => document.body
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onVisibleChange: PropTypes.func,
    trigger: PropTypes.oneOf(Object.values(triggerTypes)),
    animate: PropTypes.oneOf(animateType),
    getPopupContainer: PropTypes.func,
    overlay: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ])
  };
  constructor(props) {
    super(props);
    this.timeOutId = null;
    this.wrapper = createRef();
    this.triggerWrapper = createRef();
  }

  onShowOverlay = () => {
    this.setWrapperBounding();
    this.setState({ visible: true });
    this.props.onVisibleChange(true);
    scrollIntoViewIfNeeded(this.wrapper.current, {
      scrollMode: "if-needed",
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });
  };
  onHideOverlay = () => {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 100);
    this.props.onVisibleChange(false);
  };
  onFocusHandler = () => {
    clearTimeout(this.timeOutId);
  };
  getWrapperBounding = () => {
    const {
      height,
      top,
      left
    } = this.triggerWrapper.current.getBoundingClientRect();
    const {
      height: wrapperHeight
    } = this.wrapper.current.getBoundingClientRect();

    const { scrollX, scrollY } = window;

    const positions = {
      top: {
        top: top + scrollY - wrapperHeight - 10,
        left: left + scrollX
      },
      bottom: {
        top: top + height + scrollY + 2,
        left: left + scrollX
      }
    };
    return positions[this.props.position];
  };

  onResizeHandler = debounce(() => {
    this.setWrapperBounding();
  }, 500);

  setWrapperBounding() {
    const { left, top } = this.getWrapperBounding();
    this.setState({ left, top });
  }
  render() {
    const { visible, top, left } = this.state;
    const {
      prefixCls,
      className,
      children,
      overlay,
      disabled,
      trigger,
      animate,
      getPopupContainer,
      position, //eslint-disable-line
      onVisibleChange, //eslint-disable-line
      ...attr
    } = this.props;

    const isHover = trigger === triggerTypes["hover"];
    /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
    const bindEvents = disabled
      ? {}
      : {
          [isHover ? "onMouseEnter" : "onFocus"]: this.onShowOverlay,
          [isHover ? "onMouseLeave" : "onBlur"]: this.onHideOverlay
        };
    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled
        })}
        {...attr}
        onBlur={this.onHideOverlay}
        onFocus={this.onFocusHandler}
        {...bindEvents}
        ref={this.triggerWrapper}
      >
        {disabled ? (
          <div className={cls(`${prefixCls}-disabled-mask`)} />
        ) : (
          undefined
        )}
        <div className={cls(`${prefixCls}-wrap`)}>{children}</div>
        {createPortal(
          <div
            className={cls(`${prefixCls}-overlay`, {
              [`${prefixCls}-overlay-show`]: visible,
              [`${prefixCls}-overlay-${animate}`]: animate
            })}
            ref={this.wrapper}
            style={{
              top,
              left
            }}
          >
            {overlay}
          </div>,
          getPopupContainer()
        )}
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeHandler);
  }
  componentDidMount() {
    window.addEventListener("resize", this.onResizeHandler);
  }
}
