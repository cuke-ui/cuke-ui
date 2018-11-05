import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Radio extends PureComponent {
  state = {
    checked: this.props.checked || this.props.defaultChecked || false
  };
  static defaultProps = {
    prefixCls: "cuke-radio",
    defaultChecked: false,
    checked: false
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  onChange = e => {
    this.setState({
      checked: true
    });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  componentWillReceiveProps({ checked, defaultChecked }) {
    if (checked !== this.state.checked) {
      this.setState({
        checked: defaultChecked || checked
      });
    }
  }

  render() {
    const {
      prefixCls,
      value,
      className,
      children,
      disabled,
      onChange, //eslint-disable-line
      ...attr
    } = this.props;

    const { checked } = this.state;

    return (
      <label className={cls(`${prefixCls}-wrapper`)} {...attr}>
        <span
          className={cls(prefixCls, className, {
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-disabled`]: disabled
          })}
        >
          <input
            type="radio"
            value={value}
            checked={checked}
            className={cls(`${prefixCls}-input`)}
            onChange={this.onChange}
            disabled={disabled}
          />
          <span className={cls(`${prefixCls}-inner`)} />
        </span>
        <span>{children}</span>
      </label>
    );
  }
}
