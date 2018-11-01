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
    duration: PropTypes.number.isRequired,
    darkTheme: PropTypes.bool,
    onClose: PropTypes.func,
    onClick: PropTypes.func
  };
  static defaultProps = {
    prefixCls: "cuke-notification",
    duration: 2,
    darkTheme: false,
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
          this.removeNode();
        }, this.animationTime);
        onClose();
      });
    }, duration * 1000);
  }
  componentWillUnmount() {
    this.removeNode();
  }
  removeNode = () => {
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
  };
  static open(options) {
    this.renderElement("open", options);
  }
  static error(title, duration, onClose, darkTheme) {
    this.renderElement("error", title, duration, onClose, darkTheme);
  }
  static info(title, duration, onClose, darkTheme) {
    this.renderElement("info", title, duration, onClose, darkTheme);
  }
  static success(title, duration, onClose, darkTheme) {
    this.renderElement("success", title, duration, onClose, darkTheme);
  }
  static warning(title, duration, onClose, darkTheme) {
    this.renderElement("warning", title, duration, onClose, darkTheme);
  }
  static loading(title, duration, onClose, darkTheme) {
    this.renderElement("loading", title, duration, onClose, darkTheme);
  }
  onClose = () => {
    this.setState({ visible: false });
    clearTimeout(this.timer);
    this.props.onClose();
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
      onClick,
      ...attr
    } = this.props;

    const { visible } = this.state;

    const typeConfig = this.typeConfig;

    return (
      <div
        className={cls(
          prefixCls,
          className,
          { [`${prefixCls}-theme-dark`]: darkTheme },
          { [`${prefixCls}-open`]: visible && duration },
          { [`${prefixCls}-close`]: !visible }
        )}
        {...attr}
        onClick={onClick}
      >
        <div className={`${prefixCls}-close`} onClick={this.onClose}>
          <CloseIcon />
        </div>
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
