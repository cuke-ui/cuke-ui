import React, { PureComponent, createRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cls from "classnames";
import Input from "../input";
import { DownIcon, LoadingIcon } from "../icon";
import { debounce } from "../utils";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";
import Empty from "../empty";

const sizes = {
  default: "default",
  small: "small",
  large: "large"
};

export default class Select extends PureComponent {
  state = {
    selectedValue: this.props.defaultValue || this.props.value || "",
    visible: this.props.visible || null,
    left: 0,
    top: 0,
    width: 0
  };
  static defaultProps = {
    prefixCls: "cuke-select",
    onPanelVisibleChange: () => {},
    onChange: () => {},
    getPopupContainer: () => document.body,
    position: "bottom",
    disabled: false,
    allowClear: false,
    notFoundContent: <Empty height={120} />,
    labelInValue: false,
    loading: false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onPanelVisibleChange: PropTypes.func,
    getPopupContainer: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    allowClear: PropTypes.bool,
    labelInValue: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(sizes)),
    overlay: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    popupContainerClassName: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.timeOutId = null;
    this.toggleContainer = createRef();
    this.triggerWrapper = createRef();
    this.wrapper = createRef();
  }

  static getDerivedStateFromProps(props) {
    if (Reflect.has(props, "value")) {
      return {
        selectedValue: props.value
      };
    }
    return null;
  }

  get selectedValue() {
    const { selectedValue } = this.state;
    const { labelInValue } = this.props;
    if (labelInValue) {
      // children 如果有空格 会被解析成数组 有可能是 [10,"条数据"] 所以需要 join 一下
      return Array.prototype.join.call(
        (
          this.selectOptions.find(
            ({ key }) =>
              key === ((selectedValue && selectedValue.key) || selectedValue)
          ) || {}
        ).value,
        ""
      );
    }
    return selectedValue;
  }

  get selectOptions() {
    return this.props.children.map(({ props }) => {
      return {
        key: props.value,
        value: props.children
      };
    });
  }

  onChange = (value, label) => {
    const { labelInValue } = this.props;
    this.setState({ selectedValue: value, visible: false });
    this.props.onPanelVisibleChange(false);
    if (labelInValue) {
      this.props.onChange({
        key: value,
        label
      });
    } else {
      this.props.onChange(value);
    }
  };
  onClickHandler = () => {
    const visible = !this.state.visible;
    this.setState({
      visible
    });
    this.props.onPanelVisibleChange(visible);
    if (visible) {
      this.setWrapperBounding(() => {
        scrollIntoViewIfNeeded(this.wrapper.current, {
          scrollMode: "if-needed",
          behavior: "smooth",
          block: "nearest",
          inline: "nearest"
        });
      });
    }
  };
  onClickOutsideHandler = e => {
    e.stopPropagation();
    if (
      this.state.visible &&
      !this.props.disabled &&
      !this.toggleContainer.current.contains(e.target) &&
      !e.target.classList.contains(`${this.props.prefixCls}-option-disabled`)
    ) {
      this.setState({ visible: false });
      this.props.onPanelVisibleChange(false);
    }
  };
  getWrapperBounding = () => {
    const {
      width,
      height,
      top,
      left
    } = this.triggerWrapper.current.getBoundingClientRect();
    const {
      height: wrapperHeight
    } = this.wrapper.current.getBoundingClientRect();

    const { scrollX, scrollY } = window;

    const positions = {
      top: {
        top: top + scrollY - wrapperHeight - 10,
        left: left + scrollX,
        width
      },
      bottom: {
        top: top + height + scrollY,
        left: left + scrollX,
        width
      }
    };
    return positions[this.props.position];
  };

  setWrapperBounding(cb = () => {}) {
    const { left, top, width } = this.getWrapperBounding();
    this.setState({ left, top, width }, cb);
  }

  onResizeHandler = debounce(() => {
    this.setWrapperBounding();
  }, 500);

  onClear = () => {
    this.setState({ selectedValue: "", visible: false });
    this.props.onChange("");
  };

  render() {
    const { visible, left, top, width } = this.state;
    const {
      prefixCls,
      className,
      disabled,
      placeholder,
      children,
      getPopupContainer,
      size,
      style,
      allowClear,
      notFoundContent,
      loading,
      popupContainerClassName,
      labelInValue, //eslint-disable-line
      onPanelVisibleChange, //eslint-disable-line
      ...attr
    } = this.props;

    return (
      <div
        className={cls(`${prefixCls}`, className)}
        {...attr}
        style={style}
        ref={this.toggleContainer}
      >
        <div
          className={cls(`${prefixCls}-inner`, {
            [`${prefixCls}-active`]: visible
          })}
          ref={this.triggerWrapper}
        >
          <Input
            disabled={disabled}
            readonly
            placeholder={placeholder}
            className={cls(`${prefixCls}-input`)}
            value={this.selectedValue}
            onClick={this.onClickHandler}
            size={size}
            style={{
              width: style && style.width
            }}
            suffix={
              loading ? (
                <LoadingIcon className={`${prefixCls}-loading`} />
              ) : (
                <DownIcon className={`${prefixCls}-arrow`} />
              )
            }
            allowClear={allowClear}
            onClear={this.onClear}
          />
        </div>
        {createPortal(
          <div
            className={cls(`${prefixCls}-content`, popupContainerClassName, {
              [`${prefixCls}-open`]: visible,
              [`${prefixCls}-close`]: !visible,
              ["cuke-ui-no-animate"]: visible === null
            })}
            ref={this.wrapper}
            style={{
              width,
              left,
              top
            }}
          >
            {children
              ? React.Children.map(children, (element, index) => {
                  return React.cloneElement(element, {
                    key: index,
                    selectedValue: this.selectedValue,
                    onChange: this.onChange
                  });
                })
              : notFoundContent}
          </div>,
          getPopupContainer()
        )}
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.onClickOutsideHandler, false);
    window.removeEventListener("resize", this.onResizeHandler);
  }
  componentDidMount() {
    window.addEventListener("click", this.onClickOutsideHandler, false);
    window.addEventListener("resize", this.onResizeHandler);
    if (this.props.visible) {
      this.setWrapperBounding();
    }
  }
}
