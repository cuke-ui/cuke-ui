import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Input from "../input";

//保留 数字 和 小数点
export const getCleanString = (str = "") => {
  return str.toString().replace(/[^\d|\\.]/g, "");
};

// 小数点限制
export const getTheValueLengthAfterTheDecimalPoint = (
  value = "",
  decimal,
  point = "."
) => {
  if (!decimal || !value.includes(point) || value.endsWith(point)) {
    return value;
  }
  // 支持 xx.xxx.xxx.xx ...
  const first = value.slice(0, 1);
  const other = value.slice(1);
  return (
    first +
    other
      .split(point)
      .map(str => str.substr(0, decimal))
      .join(point)
  );
};

export default class NumberInput extends PureComponent {
  state = {
    value: getTheValueLengthAfterTheDecimalPoint(
      getCleanString(this.props.defaultValue || this.props.value || ""),
      this.props.decimal
    )
  };

  static defaultProps = {
    prefixCls: "cuke-number-input",
    disabled: false,
    readonly: false,
    placeholder: "",
    showStepper: false,
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
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    decimal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showStepper: PropTypes.bool,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: getTheValueLengthAfterTheDecimalPoint(
          getCleanString(nextProps.value),
          nextProps.decimal
        )
      });
    }
  }

  getValue = () => {
    const { min, max } = this.props;
    return Math.min(max, Math.max(min, this.state.value));
  };

  onChange = e => {
    const value = getTheValueLengthAfterTheDecimalPoint(
      getCleanString(e.target.value),
      this.props.decimal
    );
    const { min, max } = this.props;
    this.setState(
      {
        value
      },
      () => {
        if (value && (value > max || value < min)) {
          this.setState({
            value: this.getValue()
          });
          return;
        }
        this.props.onChange(value);
      }
    );
  };

  add = () => {
    this.setState(({ value }) => ({
      value: Number(value) + 1
    }));
  };
  subtract = () => {
    this.setState(({ value }) => ({
      value: Number(value) - 1
    }));
  };
  render() {
    const {
      placeholder,
      prefixCls,
      className,
      disabled,
      readonly,
      showStepper,
      decimal, //eslint-disable-line
      min, //eslint-disable-line
      max, //eslint-disable-line
      ...attr
    } = this.props;

    const AddStepper = () => (
      <button
        className={`${prefixCls}-stepper`}
        onClick={this.add}
        disabled={disabled}
      >
        +
      </button>
    );
    const SubtractStepper = () => (
      <button
        className={`${prefixCls}-stepper`}
        onClick={this.subtract}
        disabled={disabled}
      >
        -
      </button>
    );

    const { value } = this.state;

    return (
      <Input
        disabled={disabled}
        readOnly={readonly}
        className={cls(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled
        })}
        placeholder={placeholder}
        {...attr}
        onChange={this.onChange}
        value={value}
        addonBefore={showStepper ? <SubtractStepper /> : undefined}
        addonAfter={showStepper ? <AddStepper /> : undefined}
        addonClassName={`${prefixCls}-group`}
      />
    );
  }
}
