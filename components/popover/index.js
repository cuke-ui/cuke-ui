import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Tooltip from "../tooltip";

export default class Popover extends PureComponent {
  state = {
    visible: this.props.visible || null
  };
  static defaultProps = {
    prefixCls: "cuke-popover",
    position: "top",
    title: "",
    theme: "light",
    onVisibleChange: () => {}
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onVisibleChange: PropTypes.func,
    title: PropTypes.any,
    content: PropTypes.any,
    position: PropTypes.oneOf(["top", "right", "left", "bottom"]),
    theme: PropTypes.oneOf(["light", "dark"])
  };

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps({ visible }, state) {
    if (!visible && state.visible === null) {
      return null;
    }
    return {
      visible: visible || state.visible
    };
  }

  onVisibleChange = visible => {
    this.props.onVisibleChange(visible);
  };

  renderContent = () => {
    const { prefixCls, title, content } = this.props;
    return (
      <>
        <div className={`${prefixCls}-title`}>{title}</div>
        {content && <div className={`${prefixCls}-content`}>{content}</div>}
      </>
    );
  };

  render() {
    const {
      prefixCls,
      className,
      title, // eslint-disable-line
      position,
      theme,
      wrapperClassName,
      onVisibleChange, // eslint-disable-line
      visible, // eslint-disable-line,
      children,
      ...attr
    } = this.props;

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <Tooltip
          theme={theme}
          visible={visible}
          title={this.renderContent()}
          position={position}
          onVisibleChange={this.onVisibleChange}
          wrapperClassName={cls(`${prefixCls}-wrapper`, wrapperClassName)}
        >
          {children}
        </Tooltip>
      </div>
    );
  }
}
