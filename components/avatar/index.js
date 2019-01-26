import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

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
    alt: "cuke-avatar",
    size: sizes.default
  };
  static propTypes = {
    shape: PropTypes.oneOf(Object.values(shape)),
    prefixCls: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node,
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.oneOf(Object.values(sizes)),
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.avatarChildren = createRef();
    this.avatar = createRef();
  }

  state = {
    scale: 1
  };

  componentDidMount() {
    this.setScale();
  }

  getChildren = () => {
    const { src, alt, icon, text, prefixCls } = this.props;
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
          style={childrenStyle}
          ref={this.avatarChildren}
        >
          {text}
        </span>
      );
    } else {
      children = this.props.children;
    }
    return children;
  };

  setScale = () => {
    const childrenNode = this.avatarChildren.current;
    if (childrenNode) {
      const { width: childrenWidth } = childrenNode.getBoundingClientRect();
      const {
        width: avatarWidth
      } = this.avatar.current.getBoundingClientRect();

      const scale =
        avatarWidth < childrenWidth ? avatarWidth / childrenWidth - 0.1 : 1;
      this.setState({
        scale
      });
    }
  };

  render() {
    const {
      shape,
      className,
      prefixCls,
      size,
      src,
      icon,
      ...attr
    } = this.props;

    const children = this.getChildren();

    return (
      <span
        className={cls(prefixCls, className, {
          [`${prefixCls}-${shape}`]: shape,
          [`${prefixCls}-size-${size}`]: typeof size === "string",
          [`${prefixCls}-image`]: src,
          [`${prefixCls}-icon`]: icon
        })}
        ref={this.avatar}
        {...attr}
      >
        {children}
      </span>
    );
  }
}
