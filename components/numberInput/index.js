import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Input from "../input";

export default class NumberInput extends PureComponent {
  state = {
    value: undefined
  };
  static defaultProps = {
    prefixCls: "cuke-number-input",
    disabled: false,
    readonly: false,
    placeholder: "",
    onChange: () => {}
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    placeholder: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
  };

  onChange = e => {
    this.props.onChange(e);
  };

  render() {
    const {
      placeholder,
      prefixCls,
      className,
      disabled,
      readonly,
      addonBefore,
      addonAfter,
      ...attr
    } = this.props;

    const { value } = this.state;

    const inputEle = (
      <Input
        disabled={disabled}
        readOnly={readonly}
        className={cls(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled
        })}
        placeholder={placeholder}
        onChange={this.onChange}
        {...attr}
        value={value}
      />
    );

    if (addonBefore || addonAfter) {
      return (
        <span
          className={cls(
            `${prefixCls}-group`,
            { [`${prefixCls}-group-addon-before`]: !!addonBefore },
            { [`${prefixCls}-group-addon-after`]: !!addonAfter },
            { [`${prefixCls}-group-addon-all`]: !!addonAfter && !!addonBefore }
          )}
        >
          {addonBefore ? (
            <span className={`${prefixCls}-group-addon`}>{addonBefore}</span>
          ) : (
            undefined
          )}
          {inputEle}
          {addonAfter ? (
            <span className={`${prefixCls}-group-addon`}>{addonAfter}</span>
          ) : (
            undefined
          )}
        </span>
      );
    }
    return inputEle;
  }
}
