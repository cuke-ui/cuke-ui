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
          this.destroy();
        }, this.animationTime);
        onClose();
      });
    }, duration * 1000);
  }
  componentWillUnmount() {
    this.destroy();
    clearTimeout(this.timer);
  }
  destroy = () => {
    if (this._containerRef) {
      ReactDOM.unmountComponentAtNode(this._containerRef);
    }
    if (this._currentNodeRef) {
      this._currentNodeRef.remove();
    }
  };
  static renderElement = (type, title, duration, onClose, darkTheme) => {
    const container = document.createElement("div");
    const currentNode = document.body.appendChild(container);
    const _message = ReactDOM.render(
      <Message
        type={type}
        title={title}
        darkTheme={darkTheme}
        duration={duration}
        onClose={onClose}
      />,
      container
    );
    if (_message) {
      _message._containerRef = container;
      _message._currentNodeRef = currentNode;
      return {
        destroy: _message.destroy
      };
    }
    return {
      destroy: () => {}
    };
  };
  static error(title, duration, onClose, darkTheme) {
    return this.renderElement("error", title, duration, onClose, darkTheme);
  }
  static info(title, duration, onClose, darkTheme) {
    return this.renderElement("info", title, duration, onClose, darkTheme);
  }
  static success(title, duration, onClose, darkTheme) {
    return this.renderElement("success", title, duration, onClose, darkTheme);
  }
  static warning(title, duration, onClose, darkTheme) {
    return this.renderElement("warning", title, duration, onClose, darkTheme);
  }
  static loading(title, duration, onClose, darkTheme) {
    return this.renderElement("loading", title, duration, onClose, darkTheme);
  }
  disableScroll = () => {
    document.body.style.overflow = "hidden";
    //滚动条的宽度 防止鬼畜
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
          { [`${prefixCls}-theme-dark`]: darkTheme },
          { [`${prefixCls}-open`]: visible && duration },
          { [`${prefixCls}-close`]: !visible }
        )}
        {...attr}
      >
        <div
          className={cls(
            `${prefixCls}-title-custom`,
            `${prefixCls}-${typeConfig[type]}`
          )}
        >
          <p className={`${prefixCls}-icon`}>
            {type === typeConfig["info"] ? <InfoIcon /> : undefined}
            {type === typeConfig["success"] ? <SuccessIcon /> : undefined}
            {type === typeConfig["error"] ? <ErrorIcon /> : undefined}
            {type === typeConfig["warning"] ? <WarningIcon /> : undefined}
            {type === typeConfig["loading"] ? <LoadingIcon /> : undefined}
          </p>

          <p className={`${prefixCls}-title`}>
            <span>{title}</span>
          </p>
        </div>
      </div>
    );
  }
}
