import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import CityPickerCore from "./CityPickerCore";
import Input from "../input";
import { DownIcon } from "../icon";

export default class CityPicker extends PureComponent {
  state = {
    visible: null,
    selectedCityGroup:
      this.props.defaultActiveGroup || this.props.activeGroup || 0,
    selectedCityName: ""
  };
  static defaultProps = {
    prefixCls: "cuke-city-picker",
    cityList: [],
    disabled: false,
    placeholder: "请选择",
    disabledGroups: [],
    onPanelVisibleChange: () => {}
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
    disabledGroups: PropTypes.array,
    activeGroup: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    onCityGroupChange: PropTypes.func,
    onCityChange: PropTypes.func,
    onPanelVisibleChange: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.toggleContainer = createRef();
  }

  onCityGroupChange = (selectedCityGroup, index) => {
    if (this.props.onCityGroupChange) {
      this.props.onCityGroupChange(selectedCityGroup, index);
    }
  };
  onCityChange = selectedCity => {
    this.setState({ visible: false, selectedCityName: selectedCity.name });

    if (this.props.onCityChange) {
      this.props.onCityChange(selectedCity);
    }
  };

  onOpenCityPicker = () => {
    const visible = !this.state.visible;
    this.setState({ visible });
    this.props.onPanelVisibleChange(visible);
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
  render() {
    const {
      cityList,
      prefixCls,
      disabled,
      placeholder,
      className,
      disabledGroups,
      onPanelVisibleChange, //eslint-disable-line
      defaultActiveGroup, //eslint-disable-line
      onCityGroupChange, //eslint-disable-line
      onCityChange, //eslint-disable-line
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
          />
          <DownIcon className={`${prefixCls}-arrow`} />
        </div>
        <div
          className={cls(`${prefixCls}-content`, {
            [`${prefixCls}-open`]: visible,
            [`${prefixCls}-close`]: !visible,
            ["cuke-ui-no-animate"]: visible === null
          })}
        >
          <CityPickerCore
            cityList={cityList}
            onCityChange={this.onCityChange}
            defaultActiveGroup={selectedCityGroup}
            onCityGroupChange={this.onCityGroupChange}
            disabledGroups={disabledGroups}
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
