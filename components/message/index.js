import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import cls from "classnames";

import {
  InfoIcon,
  LoadingIcon,
  SuccessIcon,
  ErrorIcon,
  WarningIcon
} from "../icon";

export default class Message extends PureComponent {
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
  }
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    duration: PropTypes.number.isRequired,
    darkTheme: PropTypes.bool,
    onClose: PropTypes.func
  };
  static defaultProps = {
    prefixCls: "cuke-message",
    duration: 2,
    darkTheme: false,
    onClose: () => {}
  };
  componentDidMount() {
    const { duration, onClose } = this.props;

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
  static renderElement = (type, title, duration, onClose, darkTheme) => {
    const container = document.createElement("div");
    const currentNode = document.body.appendChild(container);
    let _message = ReactDOM.render(
      <Message
        type={type}
        title={title}
        darkTheme={darkTheme}
        duration={duration}
        onClose={onClose}
      />,
      container
    );
    _message._containerRef = container;
    _message._currentNodeRef = currentNode;
  };
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
  render() {
    const {
      prefixCls,
      darkTheme,
      type,
      title,
      className,
      duration,
      ...attr
    } = this.props;

    const { visible } = this.state;

    const typeConfig = this.typeConfig;

    return (
      <div
        className={cls(
          prefixCls,
          className,
          { "theme-dark": darkTheme },
          { open: visible && duration },
          { close: !visible }
        )}
        {...attr}
      >
        <div
          className={cls(
            `${prefixCls}-title-custom`,
            `message-${typeConfig[type]}`
          )}
        >
          <p className="icon">
            {type === typeConfig["info"] ? <InfoIcon /> : undefined}
            {type === typeConfig["success"] ? <SuccessIcon /> : undefined}
            {type === typeConfig["error"] ? <ErrorIcon /> : undefined}
            {type === typeConfig["warning"] ? <WarningIcon /> : undefined}
            {type === typeConfig["loading"] ? <LoadingIcon /> : undefined}
          </p>

          <p className="text">
            <span className="title">{title}</span>
          </p>
        </div>
      </div>
    );
  }
}
