import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { ArrowRightIcon } from "../icon";

export default class CollapseItem extends React.PureComponent {
  state = {
    visible: this.props.visible
  };
  static defaultProps = {
    prefixCls: "cuke-collapse-item",
    hideArrow: false,
    disabled: false,
    rightArrow: false,
    icon: <ArrowRightIcon />
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    hideArrow: PropTypes.bool,
    rightArrow: PropTypes.bool,
    icon: PropTypes.any
  };
  toggleContentPanel = () => {
    this.setState({
      visible: !this.state.visible
    });
    if (this.props.onChange) {
      this.props.onChange(this.props.activeKey);
    }
  };

  // 通过父组件 改变 非当前 active item 状态 实现手风琴效果
  static getDerivedStateFromProps({ visible, accordion }, state) {
    if (accordion) {
      return {
        visible
      };
    }
    return null;
  }
  render() {
    const {
      title,
      children,
      className,
      prefixCls,
      disabled,
      hideArrow,
      rightArrow,
      icon,
      visible: collapseVisible, //eslint-disable-line
      accordion, //eslint-disable-line
      defaultActiveKey, //eslint-disable-line
      activeKey, //eslint-disable-line
      ...attr
    } = this.props;
    const { visible } = this.state;

    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-right-arrow`]: rightArrow
        })}
        {...attr}
      >
        <div
          className={cls(`${prefixCls}-header`, {
            [`${prefixCls}-header-has-radius`]: !visible
          })}
          onClick={disabled ? undefined : this.toggleContentPanel}
        >
          {hideArrow ? (
            undefined
          ) : (
            <span
              className={cls(`${prefixCls}-arrow`, {
                [`${prefixCls}-arrow-active`]: visible
              })}
            >
              {icon}
            </span>
          )}
          {title}
        </div>
        <div
          className={cls(`${prefixCls}-content`, {
            [`${prefixCls}-hide`]: !visible
          })}
        >
          {children}
        </div>
      </div>
    );
  }
}
