import React, { PureComponent, isValidElement, createRef } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { CloseIcon } from "../icon";

const sizes = {
  default: "default",
  small: "small",
  large: "large"
};
export default class Input extends PureComponent {
  state = {
    value: this.props.defaultValue || this.props.value || ""
  };

  static defaultProps = {
    prefixCls: "cuke-input",
    disabled: false,
    readonly: false,
    placeholder: "",
    type: "text",
    size: sizes.default,
    onChange: () => {},
    allowClear: false,
    suffix: null,
    prefix: null
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(Object.values(sizes)),
    allowClear: PropTypes.bool,
    suffix: PropTypes.any,
    prefix: PropTypes.any
  };

  static getDerivedStateFromProps({ value }, state) {
    if (value && state.value !== value) {
      return {
        value
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  _onChange = e => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  onClearValue = () => {
    this.setState({ value: "" });
  };

  componentWillUnmount() {
    this.inputRef = undefined;
  }

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
      defaultValue, //eslint-disable-line
      allowClear,
      suffix,
      prefix,
      ...attr
    } = this.props;

    const { value } = this.state;

    const isShowWrapper =
      allowClear || isValidElement(prefix) || isValidElement(suffix);

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
        value={value}
        onChange={this._onChange}
        ref={this.inputRef}
      />
    );

    const inputWrapper = (
      <div className={`${prefixCls}-wrapper`}>
        {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
        {inputEle}
        {(suffix || allowClear) && (
          <span className={`${prefixCls}-suffix`}>
            {allowClear && value ? (
              <CloseIcon
                className={`${prefixCls}-clear`}
                onClick={this.onClearValue}
              />
            ) : (
              suffix
            )}
          </span>
        )}
      </div>
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
          {(isShowWrapper && inputWrapper) || inputEle}
          {addonAfter && (
            <span className={`${prefixCls}-group-addon`}>{addonAfter}</span>
          )}
        </span>
      );
    }

    if (isShowWrapper) {
      return inputWrapper;
    }
    return inputEle;
  }
}
