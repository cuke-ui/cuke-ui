import React, { PureComponent } from "react";
import Radio from "./Radio";
import PropTypes from "prop-types";
import cls from "classnames";

export default class RadioGroup extends PureComponent {
  state = {
    value: this.props.value || this.props.defaultValue
  };
  static defaultProps = {
    prefixCls: "cuke-radio-group",
    disabled: false,
    onChange: () => {},
    size: "default"
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["small", "default", "large"])
  };

  constructor(props) {
    super(props);
  }

  onRadioChange = e => {
    this.setState({
      value: e.target.value
    });
    this.props.onChange(e);
  };

  static getDerivedStateFromProps({ value }, state) {
    //当传入的 value 值改变时 重置下 value 值
    if (value === state.value) {
      return null;
    }
    return {
      value
    };
  }

  render() {
    const {
      children,
      prefixCls,
      disabled,
      size,
      className,
      onChange, //eslint-disable-line
      ...attr
    } = this.props;
    const { value } = this.state;

    // 变量子节点 对比当前value 和  子节点 value 是否相同
    const radios = React.Children.map(children, (radio, index) => {
      return (
        <Radio
          key={index}
          disabled={disabled}
          size={size}
          {...radio.props}
          onChange={this.onRadioChange}
          checked={value === radio.props.value}
        />
      );
    });

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        {radios}
      </div>
    );
  }
}
