import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import cls from "classnames";

import {
  InfoIcon,
  LoadingIcon,
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  CloseIcon
} from "../icon";

const positions = ["top-right", "top-left", "bottom-right", "bottom-left"];

const DEFAULT_OFFSET = 20;

export default class Notification extends PureComponent {
  state = {
    visible: true
  };
  animationTime = 500;
  _containerRef = null;
  _currentNodeRef = null;
  constructor(props) {
    super(props);
    this.typeConfig = {
      open: "open",
      info: "info",
      success: "success",
      error: "error",
      warning: "warning",
      loading: "loading"
    };
    this.timer = null;
  }
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    position: PropTypes.oneOf(positions),
    duration: PropTypes.number.isRequired,
    darkTheme: PropTypes.bool,
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    closable: PropTypes.bool,
    onClose: PropTypes.func,
    onClick: PropTypes.func
  };
  static defaultProps = {
    prefixCls: "cuke-notification",
    duration: 2,
    darkTheme: false,
    offset: DEFAULT_OFFSET,
    position: "top-right",
    closable: true,
    onClose: () => {},
    onClick: () => {}
  };
  componentDidMount() {
    const { duration, onClose } = this.props;

    if (duration <= 0) {
      return;
    }
    this.timer = setTimeout(() => {
      this.setState({ visible: false }, () => {
        setTimeout(() => {
          this.destroy();
        }, this.animationTime);
        onClose();
      });
    }, duration * 1000);
  }
  componentWillUnmount() {
    this.destroy();
  }
  disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";
  };
  enableScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = 0;
  };
  componentDidUpdate() {
    if (this.state.visible === true) {
      this.disableScroll();
    } else {
      this.enableScroll();
    }
  }
  destroy = () => {
    ReactDOM.unmountComponentAtNode(this._containerRef);
    this._currentNodeRef.remove();
  };
  static renderElement = (type, options) => {
    const container = document.createElement("div");
    const currentNode = document.body.appendChild(container);
    const _notification = ReactDOM.render(
      <Notification type={type} {...options} />,
      container
    );
    _notification._containerRef = container;
    _notification._currentNodeRef = currentNode;

    return {
      destroy: _notification.destroy
    };
  };
  static open(options) {
    return this.renderElement("open", options);
  }
  static error(options) {
    return this.renderElement("error", options);
  }
  static info(options) {
    return this.renderElement("info", options);
  }
  static success(options) {
    return this.renderElement("success", options);
  }
  static warning(options) {
    return this.renderElement("warning", options);
  }
  static loading(options) {
    return this.renderElement("loading", options);
  }
  onClose = e => {
    // 防止 onClick 事件  触发
    e.stopPropagation();
    this.setState({ visible: false });
    clearTimeout(this.timer);
    this.props.onClose();
  };
  getPositionStyle = () => {
    const { position, offset } = this.props;
    let style = {
      top: offset
    };
    switch (position) {
      case "top-right":
        style = {
          top: offset
        };
        break;
      case "top-left":
        style = {
          left: offset,
          top: offset
        };
        break;
      case "bottom-right":
        style = {
          bottom: offset
        };
        break;
      case "bottom-left":
        style = {
          bottom: offset,
          left: offset
        };
        break;
      default:
        style = {
          top: offset
        };
        break;
    }
    return style;
  };
  render() {
    const {
      prefixCls,
      darkTheme,
      type,
      title,
      className,
      duration,
      message,
      onClick, //eslint-disable-line
      closable,
      position,
      offset, //eslint-disable-line
      style,
      ...attr
    } = this.props;

    const { visible } = this.state;

    const typeConfig = this.typeConfig;
    const isShow = visible && duration >= 0;

    return (
      <div
        className={cls(
          prefixCls,
          className,
          { [`${prefixCls}-theme-dark`]: darkTheme },
          { [`${prefixCls}-open`]: isShow },
          { [`${prefixCls}-open-${position}`]: isShow },
          { [`${prefixCls}-close`]: !visible },
          { [`${prefixCls}-close-${position}`]: !visible }
        )}
        {...attr}
        style={{
          ...style,
          ...this.getPositionStyle()
        }}
        onClick={onClick}
      >
        {closable && (
          <div className={`${prefixCls}-close-btn`} onClick={this.onClose}>
            <CloseIcon />
          </div>
        )}
        <div
          className={cls(
            `${prefixCls}-icon`,
            `${prefixCls}-${typeConfig[type]}`
          )}
        >
          {type === typeConfig["info"] ? <InfoIcon /> : undefined}
          {type === typeConfig["success"] ? <SuccessIcon /> : undefined}
          {type === typeConfig["error"] ? <ErrorIcon /> : undefined}
          {type === typeConfig["warning"] ? <WarningIcon /> : undefined}
          {type === typeConfig["loading"] ? <LoadingIcon /> : undefined}
        </div>
        <div className={cls(`${prefixCls}-title-custom`)}>
          <div className={`${prefixCls}-title`}>
            <span>{title}</span>
          </div>
          <div className={`${prefixCls}-message`}>{message}</div>
        </div>
      </div>
    );
  }
}
