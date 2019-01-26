import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { LoadingIcon } from "../icon";

const SWITCH_SIZES = ["default", "large", "small"];

export default class Switch extends React.PureComponent {
  state = {
    checked: this.props.defaultChecked || this.props.checked
  };
  static defaultProps = {
    checked: false,
    defaultChecked: false,
    disabled: false,
    loading: false,
    prefixCls: "cuke-switch",
    onChange: () => {}
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    size: PropTypes.oneOf(SWITCH_SIZES),
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onChange: PropTypes.func,
    checkedChildren: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    unCheckedChildren: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ])
  };
  _onChange = () => {
    const checked = !this.state.checked;
    this.setState({ checked });

    this.props.onChange(checked);
  };
  render() {
    const {
      className,
      prefixCls,
      loading,
      disabled,
      checkedChildren,
      unCheckedChildren,
      size,
      ...attr
    } = this.props;

    const { checked } = this.state;
    return (
      <span
        className={cls(prefixCls, className, {
          [`${prefixCls}-checked`]: checked,
          [`${prefixCls}-loading`]: loading,
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-${size}`]: !!size
        })}
        {...attr}
        onClick={disabled || loading ? undefined : this._onChange}
      >
        {loading ? (
          <span className={cls(`${prefixCls}-loading-icon`)}>
            <LoadingIcon />
          </span>
        ) : (
          <span className={cls(`${prefixCls}-inner`)}>
            {checked ? checkedChildren : unCheckedChildren}
          </span>
        )}
      </span>
    );
  }
}
