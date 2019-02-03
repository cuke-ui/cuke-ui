import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

const cardType = "card";

export default class Tabs extends PureComponent {
  state = {
    activeKey: ~~(this.props.activeKey || this.props.defaultActiveKey),
    lineWidth: 0,
    lineOffsetLeft: 0
  };
  static defaultProps = {
    prefixCls: "cuke-tabs",
    defaultActiveKey: "1",
    onChange: () => {}
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.oneOf([cardType]),
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

  componentDidMount() {
    if (this.props.type !== cardType) {
      setTimeout(() => {
        this.setActiveLineStyle();
      }, 0);
    }
  }
  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps({ activeKey }) {
    const _activeKey = ~~activeKey;
    if (_activeKey !== this.props.activeKey) {
      this.setState({ activeKey: _activeKey });
    }
  }

  setActiveLineStyle = () => {
    const { width, left } =
      (this.activeTab && this.activeTab.getBoundingClientRect()) || {};
    const { left: headerOffset } =
      (this.tabsHeader.current &&
        this.tabsHeader.current.getBoundingClientRect()) ||
      {};
    this.setState({
      lineWidth: width,
      lineOffsetLeft: left - headerOffset
    });
  };
  onTabChange = disabled => key => () => {
    if (!disabled) {
      this.setState({ activeKey: key }, () => {
        if (this.props.type !== cardType) {
          this.setActiveLineStyle();
        }
      });
      this.props.onChange(key);
    }
  };

  render() {
    const {
      prefixCls,
      className,
      type,
      tabBarExtraContent,
      children,
      activeKey: _activeKey, //eslint-disable-line
      defaultActiveKey, //eslint-disable-line
      ...attr
    } = this.props;

    const { activeKey, lineWidth, lineOffsetLeft } = this.state;

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
            aria-disabled={disabled}
            aria-selected={true}
            className={cls(`${prefixCls}-tab`, {
              [`${prefixCls}-tab-active`]: activeKey === key,
              [`${prefixCls}-tab-disabled`]: !!disabled
            })}
            {...bindActiveRef}
            onClick={this.onTabChange(disabled)(key)}
          >
            {tab}
          </div>
        );
      }
    );

    const isCardType = type === cardType;
    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <div
          className={cls(`${prefixCls}-header`, {
            [`${prefixCls}-card`]: isCardType
          })}
          ref={this.tabsHeader}
        >
          {header}
          {!isCardType && (
            <div
              className={cls(`${prefixCls}-line`)}
              style={{
                width: lineWidth,
                transform: `translate3d(${lineOffsetLeft}px,0,0)`
              }}
            />
          )}
          {tabBarExtraContent && (
            <div className={cls(`${prefixCls}-extra`)}>
              {tabBarExtraContent}
            </div>
          )}
        </div>
        <div className={cls(`${prefixCls}-content`)}>{content}</div>
      </div>
    );
  }
}
