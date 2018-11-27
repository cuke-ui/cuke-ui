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
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default class Tooltip extends PureComponent {
  state = {
    visible: null,
    left: 0,
    top: 0
  };
  static defaultProps = {
    prefixCls: "cuke-tooltip",
    position: "top",
    title: "",
    onVisibleChange: () => {}
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onVisibleChange: PropTypes.func,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    position: PropTypes.oneOf(["top", "right", "left", "bottom"])
  };

  constructor(props) {
    super(props);
    this.wrapper = createRef();
  }

  getBounding = () => {
    const {
      width,
      height,
      top,
      left
    } = this.triggerWrapper.getBoundingClientRect();
    const {
      height: wrapperHeight,
      width: wrapperWidth
    } = this.wrapper.getBoundingClientRect();

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
  onMouseEnter = () => {
    this.setState({ visible: true }, () => {
      const { left, top } = this.getBounding();
      this.setState({ left, top });
      this.props.onVisibleChange(true);
    });
  };
  onMouseLeave = () => {
    this.setState({ visible: false });
    this.props.onVisibleChange(false);
  };

  render() {
    const { prefixCls, className, title, position, ...attr } = this.props;
    const { visible, left, top } = this.state;

    return (
      <div
        className={cls(prefixCls, className)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        {...attr}
      >
        <TooltipPortal>
          <div
            className={cls(`${prefixCls}-wrapper`, `position-${position}`, {
              [`${prefixCls}-show`]: visible,
              [`${prefixCls}-hide`]: !visible,
              [`cuke-ui-no-animate`]: visible === null
            })}
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
          ref={node => (this.triggerWrapper = node)}
          className={cls(`${prefixCls}-trigger-wrapper`)}
        >
          {this.props.children}
        </span>
      </div>
    );
  }
}
