import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import CityPickerCore from "./CityPickerCore";
import Input from "../input";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";
import { DownIcon } from "../icon";

const sizes = {
  default: "default",
  small: "small",
  large: "large"
};

export default class CityPicker extends PureComponent {
  state = {
    visible: null,
    selectedCityGroup:
      this.props.defaultActiveGroup || this.props.activeGroup || 0,
    selectedCityName: this.props.defaultCityName || this.props.cityName || ""
  };
  static defaultProps = {
    prefixCls: "cuke-city-picker",
    cityList: [],
    disabled: false,
    placeholder: "请选择",
    disabledGroups: [],
    loading: false,
    onPanelVisibleChange: () => {},
    size: sizes.default,
    allowClear: false
  };
  static propTypes = {
    cityList: PropTypes.arrayOf(
      PropTypes.shape({
        group: PropTypes.string.isRequired,
        resources: PropTypes.arrayOf(PropTypes.object)
      })
    ).isRequired,
    defaultActiveGroup: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    defaultCityName: PropTypes.string,
    cityName: PropTypes.string,
    disabledGroups: PropTypes.array,
    activeGroup: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    onCityGroupChange: PropTypes.func,
    onCityChange: PropTypes.func,
    onPanelVisibleChange: PropTypes.func,
    loading: PropTypes.bool,
    allowClear: PropTypes.bool,
    tip: PropTypes.any,
    popupContainerClassName: PropTypes.string,
    size: PropTypes.oneOf(Object.values(sizes))
  };
  constructor(props) {
    super(props);
    this.toggleContainer = createRef();
    this.wrapper = createRef();
  }

  onCityGroupChange = (selectedCityGroup, index) => {
    if (this.props.onCityGroupChange) {
      this.props.onCityGroupChange(selectedCityGroup, index);
    }
  };
  onCityChange = selectedCity => {
    this.setState({ visible: false, selectedCityName: selectedCity.name });
    this.props.onPanelVisibleChange(false);

    if (this.props.onCityChange) {
      this.props.onCityChange(selectedCity);
    }
  };

  onOpenCityPicker = () => {
    const visible = !this.state.visible;
    this.setState({ visible });
    this.props.onPanelVisibleChange(visible);
    if (visible) {
      scrollIntoViewIfNeeded(this.wrapper.current, {
        scrollMode: "if-needed",
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  };
  onClickOutsideHandler = e => {
    e.stopPropagation();
    if (
      this.state.visible &&
      !this.toggleContainer.current.contains(e.target)
    ) {
      this.setState({ visible: false });
      this.props.onPanelVisibleChange(false);
    }
  };

  onClear = () => {
    this.setState({ selectedCityName: "" });
    if (this.props.onCityChange) {
      this.props.onCityChange({});
    }
  };
  render() {
    const {
      cityList,
      prefixCls,
      disabled,
      placeholder,
      className,
      disabledGroups,
      loading,
      tip,
      onPanelVisibleChange, //eslint-disable-line
      defaultActiveGroup, //eslint-disable-line
      onCityGroupChange, //eslint-disable-line
      onCityChange, //eslint-disable-line
      defaultCityName, //eslint-disable-line
      popupContainerClassName,
      size,
      allowClear,
      ...attr
    } = this.props;

    const { visible, selectedCityName, selectedCityGroup } = this.state;

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
        >
          <Input
            disabled={disabled}
            readonly
            placeholder={placeholder}
            className={cls(`${prefixCls}-input`)}
            onClick={this.onOpenCityPicker}
            value={selectedCityName}
            size={size}
            suffix={<DownIcon className={`${prefixCls}-arrow`} />}
            onClear={this.onClear}
            allowClear={allowClear}
          />
        </div>
        <div
          className={cls(`${prefixCls}-content`, popupContainerClassName, {
            [`${prefixCls}-open`]: visible,
            [`${prefixCls}-close`]: !visible,
            "cuke-ui-no-animate": visible === null
          })}
          ref={this.wrapper}
        >
          <CityPickerCore
            cityList={cityList}
            onCityChange={this.onCityChange}
            defaultActiveGroup={selectedCityGroup}
            defaultCityName={selectedCityName}
            onCityGroupChange={this.onCityGroupChange}
            disabledGroups={disabledGroups}
            loading={loading}
            tip={tip}
          />
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.onClickOutsideHandler, false);
  }
  componentDidMount() {
    window.addEventListener("click", this.onClickOutsideHandler, false);
  }
}
