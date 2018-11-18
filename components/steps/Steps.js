import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Steps extends PureComponent {
  state = {
    activeKey: ~~(this.props.activeKey || this.props.defaultActiveKey),
    lineWidth: 0,
    lineOffsetLeft: 0
  };
  static defaultProps = {
    prefixCls: "cuke-steps",
    defaultActiveKey: "1",
    onChange: () => {}
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tabBarExtraContent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object
    ]),
    onChange: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.tabsHeader = React.createRef();
  }

  componentWillReceiveProps({ activeKey }) {
    const _activeKey = ~~activeKey;
    if (_activeKey !== this.props.activeKey) {
      this.setState({ activeKey: _activeKey });
    }
  }

  setActiveLineStyle = () => {
    const activeElement = this.activeTab;
    const { width, left } = activeElement.getBoundingClientRect();
    const {
      left: headerOffset
    } = this.tabsHeader.current.getBoundingClientRect();
    this.setState({
      lineWidth: width,
      lineOffsetLeft: left - headerOffset
    });
  };
  onTabChange = key => {
    this.setState({ activeKey: key }, () => {
      this.setActiveLineStyle();
    });
    this.props.onChange(key);
  };

  render() {
    const {
      prefixCls,
      className,
      tabBarExtraContent,
      children,
      activeKey: _activeKey, //eslint-disable-line
      defaultActiveKey, //eslint-disable-line
      ...attr
    } = this.props;

    const { activeKey } = this.state;

    const content = React.Children.map(children, (element, index) => {
      const key = (index + 1) >> 0;
      return cloneElement(element, {
        activeKey,
        visible: activeKey === key,
        key: index
      });
    });

    const header = React.Children.map(
      children,
      ({ props: { tab, disabled } }, index) => {
        const key = (index + 1) >> 0;
        const bindActiveRef =
          activeKey === key ? { ref: node => (this[`activeTab`] = node) } : {};
        return (
          <div
            key={index}
            role="tab"
            aria-disabled={false}
            aria-selected={true}
            className={cls(`${prefixCls}-tab`, {
              [`${prefixCls}-tab-active`]: activeKey === key,
              [`${prefixCls}-tab-disabled`]: !!disabled
            })}
            {...bindActiveRef}
            onClick={() => !disabled && this.onTabChange(key)}
          >
            {tab}
          </div>
        );
      }
    );

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <div className={cls(`${prefixCls}-header`)} ref={this.tabsHeader}>
          {header}
          {tabBarExtraContent ? (
            <div className={cls(`${prefixCls}-extra`)}>
              {tabBarExtraContent}
            </div>
          ) : (
            undefined
          )}
        </div>
        <div className={cls(`${prefixCls}-content`)}>{content}</div>
      </div>
    );
  }
}
