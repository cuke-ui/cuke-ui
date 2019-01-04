import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

const sizes = {
  default: "default",
  small: "small",
  large: "large"
};
export default class Input extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-input",
    disabled: false,
    readonly: false,
    placeholder: "",
    type: "text",
    onChange: () => {}
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    placeholder: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    addonClassName: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    type: PropTypes.oneOf([
      "text",
      "password",
      "range",
      "date",
      "number",
      "color",
      "email"
    ]),
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(Object.values(sizes))
  };

  render() {
    const {
      type,
      placeholder,
      prefixCls,
      className,
      disabled,
      readonly,
      addonBefore,
      addonAfter,
      addonClassName,
      size,
      ...attr
    } = this.props;

    const inputEle = (
      <input
        type={type}
        disabled={disabled}
        readOnly={readonly}
        className={cls(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-${size}`]: size !== sizes.default
        })}
        placeholder={placeholder}
        {...attr}
      />
    );

    if (addonBefore || addonAfter) {
      return (
        <span
          className={cls(
            `${prefixCls}-group`,
            {
              [`${prefixCls}-group-addon-before`]: !!addonBefore,
              [`${prefixCls}-group-addon-after`]: !!addonAfter,
              [`${prefixCls}-group-addon-all`]: !!addonAfter && !!addonBefore,
              [`${prefixCls}-group-${size}`]: size !== sizes.default
            },
            addonClassName
          )}
        >
          {addonBefore && (
            <span className={`${prefixCls}-group-addon`}>{addonBefore}</span>
          )}
          {inputEle}
          {addonAfter && (
            <span className={`${prefixCls}-group-addon`}>{addonAfter}</span>
          )}
        </span>
      );
    }
    return inputEle;
  }
}
