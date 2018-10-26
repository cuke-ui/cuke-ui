import React, { PureComponent } from "react";
import Checkbox from "./Checkbox";
import PropTypes from "prop-types";
import cls from "classnames";

export default class CheckboxGroup extends PureComponent {
  state = {
    //默认选中的值
    value:
      this.props.value ||
      this.props.defaultValue ||
      this.getCheckedValue(this.props.children)
  };
  static defaultProps = {
    prefixCls: "cuke-checkbox-group",
    disabled: false,
    onChange: () => { }
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  getCheckedValue(children) {
    const checkedValue = [];
    //遍历子节点 看是否有选中的值
    React.Children.forEach(children, checkbox => {
      if (
        (checkbox.props && checkbox.props.checked) ||
        checkbox.props.defaultChecked
      ) {
        checkedValue.push(checkbox.props.value);
      }
    });
    return checkedValue;
  }

  //TODO: 这里会执行两次 ???
  onCheckboxChange = e => {
    const currentValue = e.target.value;
    const { value } = this.state;

    const currentIndex = value.findIndex(v => v === currentValue);

    //如果没在就加入数组 否则就是 取消选中 删除掉
    if (currentIndex < 0) {
      value.push(currentValue);
    } else {
      value.splice(currentIndex, 1);
    }
    this.setState({ value });
    this.props.onChange(value);
  };
  render() {
    const {
      children,
      prefixCls,
      disabled,
      className,
      value: currentValue,
      ...attr
    } = this.props;
    const { value } = this.state;
    const isChecked = value.find(v => v === currentValue);

    // 变量子节点 对比当前value 和  子节点 value 是否相同
    const items = React.Children.map(children, checkbox => {
      return (
        <Checkbox
          disabled={disabled}
          {...checkbox.props}
          onChange={this.onCheckboxChange}
          checked={isChecked}
        />
      );
    });

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        {items}
      </div>
    );
  }
}
