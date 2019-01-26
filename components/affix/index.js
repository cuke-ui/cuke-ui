import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

export default class Affix extends PureComponent {
  state = {
    visible: false
  };
  static propsTypes = {
    prefixCls: PropTypes.string.isRequired,
    offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  static defaultProps = {
    prefixCls: "cuke-affix",
    offsetTop: 0
  };
  onClick = () => {
    this.props.onClick();
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { fixed } = this.state;
    const {
      className,
      prefixCls,
      children,
      offsetTop,
      style,
      ...attr
    } = this.props;

    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-fixed`]: fixed
        })}
        style={{
          ...style,
          top: offsetTop
        }}
        ref={node => (this.container = node)}
        {...attr}
      >
        {children}
      </div>
    );
  }
  bindScroll = () => {
    const { offsetTop } = this.props;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    this.setState({ fixed: scrollTop >= this.offsetTop - offsetTop });
  };
  componentDidMount() {
    this.offsetTop = this.container.getBoundingClientRect().top;
    window.addEventListener("scroll", this.bindScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.bindScroll);
  }
}
