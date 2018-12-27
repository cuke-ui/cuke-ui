import React, { Component } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Popover from "../popover";
import Button from "../button";

import { WarningIcon } from "../icon";

const triggerTypes = {
  hover: "hover",
  click: "click"
};

export default class Popconfirm extends Component {
  state = {
    visible: null
  };
  static defaultProps = {
    prefixCls: "cuke-popconfirm",
    position: "top",
    title: "",
    theme: "light",
    okText: "确定",
    cancelText: "取消",
    trigger: triggerTypes.click,
    onVisibleChange: () => {},
    okButtonProps: {},
    cancelButtonProps: {},
    onOk: () => {},
    onCancel: () => {},
    disabled: false,
    hiddenArrow: false, // 隐藏三角箭头
    icon: <WarningIcon />
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onVisibleChange: PropTypes.func,
    title: PropTypes.any,
    okText: PropTypes.any,
    cancelText: PropTypes.any,
    trigger: PropTypes.oneOf(Object.values(triggerTypes)),
    position: PropTypes.oneOf(["top", "right", "left", "bottom"]),
    theme: PropTypes.oneOf(["light", "dark"]),
    okProps: PropTypes.object,
    cancelProps: PropTypes.object,
    icon: PropTypes.any,
    hiddenArrow: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  _onVisibleChange = visible => {
    this.setState({ visible }, () => {
      this.props.onVisibleChange(visible);
    });
  };

  _onCancel = () => {
    this.setState({ visible: false });
    this.props.onCancel();
  };

  _onOk = () => {
    this.setState({ visible: false });
    this.props.onOk();
  };

  renderContent = () => {
    const {
      prefixCls,
      title,
      okText,
      cancelText,
      okButtonProps,
      cancelButtonProps,
      icon
    } = this.props;
    return (
      <>
        {title && (
          <div className={`${prefixCls}-title`}>
            <span className={`${prefixCls}-title-icon`}>{icon}</span>
            {title}
          </div>
        )}
        <div className={`${prefixCls}-button-group`}>
          <Button size="small" {...cancelButtonProps} onClick={this._onCancel}>
            {cancelText}
          </Button>
          <Button
            size="small"
            type="primary"
            {...okButtonProps}
            onClick={this._onOk}
          >
            {okText}
          </Button>
        </div>
      </>
    );
  };

  render() {
    const {
      prefixCls,
      className,
      position,
      theme,
      trigger,
      wrapperClassName,
      children,
      hiddenArrow,
      style,
      disabled
    } = this.props;

    return (
      <Popover
        theme={theme}
        visible={this.state.visible}
        trigger={trigger}
        disabled={disabled}
        title={this.renderContent()}
        position={position}
        hiddenArrow={hiddenArrow}
        onVisibleChange={this._onVisibleChange}
        className={cls(prefixCls, className)}
        wrapperClassName={cls(`${prefixCls}-wrapper`, wrapperClassName)}
        style={style}
      >
        {children}
      </Popover>
    );
  }
}
