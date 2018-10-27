import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Input from "../input";
import { DownIcon } from "../icon";

export default class Select extends PureComponent {
  state = {
    selectedValue: this.props.defaultValue || this.props.value || "",
    visible: false
  };
  static defaultProps = {
    prefixCls: "cuke-select",
    onPanelVisibleChange: () => {},
    onChange: () => {}
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onPanelVisibleChange: PropTypes.func,
    onChange: PropTypes.func,
    overlay: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ])
  };
  constructor(props) {
    super(props);
  }

  onOpenOptionPanel = () => {
    this.setState({ visible: true });
    this.props.onPanelVisibleChange(true);
  };

  onCloseOptionPanel = () => {
    setTimeout(() => {
      this.setState({ visible: false });
      this.props.onPanelVisibleChange(false);
    }, 120);
  };

  onChange = value => {
    this.setState({ selectedValue: value });
    this.props.onChange(value);
  };
  render() {
    const { visible } = this.state;
    const {
      prefixCls,
      className,
      disabled,
      placeholder,
      children,
      onPanelVisibleChange, //eslint-disable-line
      ...attr
    } = this.props;

    const { selectedValue } = this.state;

    return (
      <div className={cls(`${prefixCls}`, className)} {...attr}>
        <div
          className={cls(`${prefixCls}-inner`, {
            [`${prefixCls}-active`]: visible
          })}
        >
          <Input
            disabled={disabled}
            readonly
            placeholder={placeholder}
            className={cls(`${prefixCls}-input`)}
            value={selectedValue}
            onFocus={this.onOpenOptionPanel}
            onBlur={this.onCloseOptionPanel}
          />
          <DownIcon className={`${prefixCls}-arrow`} />
        </div>
        <div
          className={cls(`${prefixCls}-content`, {
            [`${prefixCls}-open`]: visible,
            [`${prefixCls}-close`]: !visible
          })}
        >
          {React.Children.map(children, (element, index) => {
            return React.cloneElement(element, {
              key: index,
              selectedValue,
              onChange: this.onChange
            });
          })}
        </div>
      </div>
    );
  }
}
