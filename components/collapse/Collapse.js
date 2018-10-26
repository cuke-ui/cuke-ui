import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Collapse extends React.PureComponent {
  state = {
    activeKey: [],
    currentActiveKey: ""
  };
  static defaultProps = {
    prefixCls: "cuke-collapse",
    defaultActiveKey: [],
    activeKey: [],
    disabled: false,
    hideArrow: false,
    accordion: false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    defaultActiveKey: PropTypes.array,
    activeKey: PropTypes.array,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    hideArrow: PropTypes.bool,
    accordion: PropTypes.bool
  };

  onChange = key => {
    let activeKey = [...this.state.activeKey];
    if (!activeKey.includes(key)) {
      activeKey.push(key);
    } else {
      activeKey = activeKey.filter(_activeKey => _activeKey !== key);
    }

    this.setState({ activeKey, currentActiveKey: key });

    if (this.props.onChange) {
      this.props.onChange(activeKey);
    }
  };
  render() {
    const {
      className,
      prefixCls,
      children,
      accordion,
      defaultActiveKey,
      activeKey,
      disabled,
      hideArrow,
      ...attr
    } = this.props;

    const { currentActiveKey } = this.state;

    const items = React.Children.map(children, (element, index) => {
      return React.cloneElement(element, {
        key: index,
        accordion,
        activeKey: String(index + 1),
        disabled: element.props.disabled || disabled,
        hideArrow: element.props.hideArrow || hideArrow,
        visible: accordion
          ? currentActiveKey === String(index + 1)
          : defaultActiveKey.includes(String(index + 1)) ||
          activeKey.includes(String(index + 1)), //eslint-disable-line
        onChange: this.onChange
      });
    });

    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-accordion`]: accordion
        })}
        {...attr}
      >
        {items}
      </div>
    );
  }
}
