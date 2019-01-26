import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import { UpIcon } from "../icon";

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    document.body.scrollTop = c - c / 8;
    document.documentElement.scrollTop = c - c / 8;
  }
};

export default class BackTop extends PureComponent {
  state = {
    visible: null,
    animateLock: true
  };
  static propsTypes = {
    prefixCls: PropTypes.string.isRequired,
    visibilityHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func
  };
  static defaultProps = {
    prefixCls: "cuke-back-top",
    visibilityHeight: 400,
    onClick: () => {}
  };
  onClick = () => {
    this.props.onClick();
    scrollToTop();
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { visible } = this.state;
    const {
      className,
      prefixCls,
      children,
      onClick, //eslint-disable-line
      visibilityHeight, //eslint-disable-line
      ...attr
    } = this.props;

    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-open`]: visible,
          [`${prefixCls}-close`]: !visible,
          "cuke-ui-no-animate": visible === null
        })}
        {...attr}
      >
        <div className={`${prefixCls}-inner`} onClick={this.onClick}>
          {children || (
            <div className={`${prefixCls}-inner-icon`}>
              <UpIcon />
            </div>
          )}
        </div>
      </div>
    );
  }
  bindScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    const visible = c >= this.props.visibilityHeight;
    if (!visible && this.state.animateLock) {
      this.setState({ visible: null });
    } else {
      this.setState({ visible, animateLock: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.bindScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.bindScroll);
  }
}
