import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Popover from "../popover";

const triggerTypes = {
  hover: "hover",
  click: "click"
};

export default class Dropdown extends PureComponent {
  state = {
    visible: false
  };
  static defaultProps = {
    prefixCls: "cuke-dropdown",
    trigger: triggerTypes.hover,
    position: "bottom",
    onVisibleChange: () => {},
    getPopupContainer: () => document.body,
    hiddenArrow: false,
    disabled: false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onVisibleChange: PropTypes.func,
    trigger: PropTypes.oneOf(Object.values(triggerTypes)),
    getPopupContainer: PropTypes.func,
    overlay: PropTypes.any,
    popupContainerClassName: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  _onVisibleChange = visible => {
    this.setState({ visible }, () => {
      this.props.onVisibleChange(visible);
    });
  };

  render() {
    const {
      prefixCls,
      className,
      position,
      trigger,
      wrapperClassName,
      children,
      hiddenArrow,
      overlay,
      disabled,
      style
    } = this.props;

    return (
      <Popover
        visible={this.state.visible}
        trigger={trigger}
        content={overlay}
        position={position}
        disabled={disabled}
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
