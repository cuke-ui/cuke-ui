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

const POSITIONS = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_LEFT: "bottom-left"
};

const TYPES = {
  OPEN: "open",
  INFO: "info",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  LOADING: "loading"
};

const DEFAULT_OFFSET = 20;
const ANIMATION_TIME = 500;

const SINGLE_NODE = {
  notification: null,
  containerRef: null,
  currentNodeRef: null
};

export default class Notification extends PureComponent {
  state = {
    visible: true
  };

  constructor(props) {
    super(props);
    this.timer = null;
  }

  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    position: PropTypes.oneOf(Object.values(POSITIONS)),
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
    position: POSITIONS.TOP_RIGHT,
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
        }, ANIMATION_TIME);
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
    if (SINGLE_NODE.containerRef) {
      ReactDOM.unmountComponentAtNode(SINGLE_NODE.containerRef);
      SINGLE_NODE.currentNodeRef.remove();
    }
  };

  static renderElement = (type, options) => {
    // if notification exist , destroy
    if (SINGLE_NODE.notification) {
      SINGLE_NODE.notification.destroy();
    }

    const container = document.createElement("div");
    const currentNode = document.body.appendChild(container);
    const _notification = ReactDOM.render(
      <Notification type={type} {...options} />,
      container
    );

    SINGLE_NODE.containerRef = container;
    SINGLE_NODE.currentNodeRef = currentNode;
    SINGLE_NODE.notification = _notification;

    return {
      destroy: _notification.destroy
    };
  };

  static open(options) {
    return this.renderElement(TYPES.OPEN, options);
  }

  static error(options) {
    return this.renderElement(TYPES.ERROR, options);
  }

  static info(options) {
    return this.renderElement(TYPES.INFO, options);
  }

  static success(options) {
    return this.renderElement(TYPES.SUCCESS, options);
  }

  static warning(options) {
    return this.renderElement(TYPES.WARNING, options);
  }

  static loading(options) {
    return this.renderElement(TYPES.LOADING, options);
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
      case POSITIONS.TOP_RIGHT:
        style = {
          top: offset
        };
        break;
      case POSITIONS.TOP_LEFT:
        style = {
          left: offset,
          top: offset
        };
        break;
      case POSITIONS.BOTTOM_RIGHT:
        style = {
          bottom: offset
        };
        break;
      case POSITIONS.BOTTOM_LEFT:
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
        <div className={cls(`${prefixCls}-icon`, `${prefixCls}-${type}`)}>
          {type === TYPES.INFO ? <InfoIcon /> : undefined}
          {type === TYPES.SUCCESS ? <SuccessIcon /> : undefined}
          {type === TYPES.ERROR ? <ErrorIcon /> : undefined}
          {type === TYPES.WARNING ? <WarningIcon /> : undefined}
          {type === TYPES.LOADING ? <LoadingIcon /> : undefined}
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
