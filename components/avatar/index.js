import React, { PureComponent } from "react";
import * as ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cls from "classnames";
import "./styles.less";

const sizes = {
  small: "small",
  default: "default",
  large: "large"
};

const shape = {
  circle: "circle",
  square: "square"
};

export default class Avatar extends PureComponent {
  static defaultProps = {
    shape: shape.circle,
    prefixCls: "cuke-avatar",
    className: "",
    icon: undefined,
    children: undefined,
    src: undefined,
    alt: "cuke-avatar",
    size: sizes.default,
    text: undefined,
    style: {}
  };
  static propTypes = {
    shape: PropTypes.oneOf(Object.values(shape)),
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node,
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.oneOf(Object.values(sizes)),
    text: PropTypes.string,
    style: PropTypes.shape({})
  };

  state = {
    scale: 1
  };

  componentDidMount() {
    this.setScale();
  }

  setScale = () => {
    const childrenNode = this.avatarChildren;
    if (childrenNode) {
      const childrenWidth = childrenNode.offsetWidth;
      const avatarNode = ReactDOM.findDOMNode(this);
      const avatarWidth = avatarNode.getBoundingClientRect().width;
      if (avatarWidth - 8 < childrenWidth) {
        this.setState({
          scale: (avatarWidth - 8) / childrenWidth
        });
      } else {
        this.setState({
          scale: 1
        });
      }
    }
  };

  render() {
    const {
      shape,
      className,
      prefixCls,
      size,
      src,
      alt,
      icon,
      text,
      style
    } = this.props;
    const baseClassName = cls(prefixCls, className, {
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-size-${size}`]: typeof size === "string",
      [`${prefixCls}-image`]: src,
      [`${prefixCls}-icon`]: icon
    });

    let children;
    if (src) {
      children = <img src={src} alt={alt} />;
    } else if (icon) {
      children = icon;
    } else if (text) {
      let childrenStyle = {};
      const { scale } = this.state;
      if (scale !== 1) {
        const transformText = `scale(${scale}) translateX(-50%)`;
        childrenStyle = {
          transform: transformText
        };
      }
      children = (
        <span
          className={`${prefixCls}-text`}
          style={{ ...childrenStyle }}
          ref={span => (this.avatarChildren = span)}
        >
          {text}
        </span>
      );
    } else {
      children = this.props.children;
    }

    return (
      <span className={baseClassName} style={{ ...style }}>
        {children}
      </span>
    );
  }
}
