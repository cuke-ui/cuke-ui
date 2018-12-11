import React, { PureComponent, createRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cls from "classnames";
import Input from "../input";
import { DownIcon } from "../icon";
import { debounce } from "../utils";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";

export default class Select extends PureComponent {
  state = {
    selectedValue: this.props.defaultValue || this.props.value || "",
    visible: null,
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
    disabled: false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onPanelVisibleChange: PropTypes.func,
    getPopupContainer: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    overlay: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ])
  };
  constructor(props) {
    super(props);
    this.timeOutId = null;
    this.toggleContainer = createRef();
    this.triggerWrapper = createRef();
    this.wrapper = createRef();
  }

  onChange = value => {
    this.setState({ selectedValue: value, visible: false });
    this.props.onChange(value);
    this.props.onPanelVisibleChange(false);
  };
  onClickHandler = () => {
    const visible = !this.state.visible;
    this.setState({
      visible
    });
    this.props.onPanelVisibleChange(visible);
    if (visible) {
      this.setWrapperBounding();
      scrollIntoViewIfNeeded(this.wrapper.current, {
        scrollMode: "if-needed",
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
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

  setWrapperBounding() {
    const { left, top, width } = this.getWrapperBounding();
    this.setState({ left, top, width });
  }

  onResizeHandler = debounce(() => {
    this.setWrapperBounding();
  }, 500);

  render() {
    const { visible, left, top, width } = this.state;
    const {
      prefixCls,
      className,
      disabled,
      placeholder,
      children,
      getPopupContainer,
      onPanelVisibleChange, //eslint-disable-line
      ...attr
    } = this.props;

    const { selectedValue } = this.state;

    return (
      <div
        className={cls(`${prefixCls}`, className)}
        {...attr}
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
            value={selectedValue}
            onClick={this.onClickHandler}
          />
          <DownIcon className={`${prefixCls}-arrow`} />
        </div>
        {createPortal(
          <div
            className={cls(`${prefixCls}-content`, {
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
            {React.Children.map(children, (element, index) => {
              return React.cloneElement(element, {
                key: index,
                selectedValue,
                onChange: this.onChange
              });
            })}
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
  }
}
