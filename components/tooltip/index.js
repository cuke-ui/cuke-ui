import React, { PureComponent, createRef } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export class TooltipPortal extends PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    document.body.appendChild(this.el);
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

const themes = ["dark", "light"];

export default class Tooltip extends PureComponent {
  state = {
    visible: this.props.visible || null,
    left: 0,
    top: 0
  };
  static defaultProps = {
    prefixCls: "cuke-tooltip",
    position: "top",
    title: "",
    theme: themes[0],
    onVisibleChange: () => {}
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onVisibleChange: PropTypes.func,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    position: PropTypes.oneOf(["top", "right", "left", "bottom"]),
    theme: PropTypes.oneOf(themes)
  };

  constructor(props) {
    super(props);
    this.wrapper = createRef();
    this.triggerWrapper = createRef();
  }

  static getDerivedStateFromProps({ visible }, state) {
    // 如果没有指定 visible 并且没有触发过 什么也不改变
    if (!visible && state.visible === null) {
      return null;
    }

    // 否则就更新 初始值
    return {
      visible: visible || state.visible
    };
  }

  getWrapperBounding = () => {
    const {
      width,
      height,
      top,
      left
    } = this.triggerWrapper.current.getBoundingClientRect();
    const {
      height: wrapperHeight,
      width: wrapperWidth
    } = this.wrapper.current.getBoundingClientRect();

    const { scrollX, scrollY } = window;

    const positions = {
      top: {
        top: top + scrollY - wrapperHeight,
        left: left + scrollX + width / 2 - wrapperWidth / 2
      },
      bottom: {
        top: top + height + scrollY,
        left: left + scrollX + width / 2 - wrapperWidth / 2
      },
      left: {
        top: top + scrollY + height / 2 - wrapperHeight / 2,
        left: left + scrollX - width
      },
      right: {
        top: top + scrollY + height / 2 - wrapperHeight / 2,
        left: left + scrollX + width
      }
    };
    return positions[this.props.position];
  };

  setWrapperBounding() {
    const { left, top } = this.getWrapperBounding();
    this.setState({ left, top });
  }

  onMouseEnter = () => {
    this.setState({ visible: true }, () => {
      this.setWrapperBounding();
      this.props.onVisibleChange(true);
    });
  };
  onMouseLeave = () => {
    this.setState({ visible: false });
    this.props.onVisibleChange(false);
  };

  onRestWrapperPosition = () => {
    if (this.state.visible) {
      setTimeout(() => {
        this.setWrapperBounding();
      });
    }
  };

  render() {
    const {
      prefixCls,
      className,
      title,
      theme,
      position,
      wrapperClassName,
      onVisibleChange, // eslint-disable-line
      visible: _visible, // eslint-disable-line
      ...attr
    } = this.props;
    const { visible, left, top } = this.state;

    return (
      <div
        className={cls(prefixCls, className)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        {...attr}
      >
        <TooltipPortal onChange={this.onRestWrapperPosition}>
          <div
            className={cls(
              `${prefixCls}-wrapper`,
              `${prefixCls}-position-${position}`,
              `${prefixCls}-${theme}`,
              wrapperClassName,
              {
                [`${prefixCls}-show`]: visible,
                [`${prefixCls}-hide`]: !visible,
                [`cuke-ui-no-animate`]: visible === null
              }
            )}
            style={{
              left,
              top
            }}
            ref={this.wrapper}
          >
            {title}
          </div>
        </TooltipPortal>
        <span
          ref={this.triggerWrapper}
          className={cls(`${prefixCls}-trigger-wrapper`)}
        >
          {this.props.children}
        </span>
      </div>
    );
  }
}
