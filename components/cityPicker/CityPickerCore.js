import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

export default class CityPickerCore extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-city-picker-core",
    disabledGroups: [],
    cityList: []
  };
  static propTypes = {
    cityList: PropTypes.arrayOf(
      PropTypes.shape({
        group: PropTypes.string.isRequired,
        resources: PropTypes.arrayOf(PropTypes.object)
      })
    ).isRequired,
    disabledGroups: PropTypes.array,
    onCityGroupChange: PropTypes.func,
    onCityChange: PropTypes.func,
    defaultActiveGroup: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    activeGroup: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  state = {
    selectedCityGroup:
      this.props.defaultActiveGroup || this.props.activeGroup || 0,
    selectedCityName: ""
  };

  onCityGroupChange = (selectedCityGroup, index) => {
    this.setState({ selectedCityGroup });

    if (this.props.onCityGroupChange) {
      this.props.onCityGroupChange(selectedCityGroup, index);
    }
  };
  onCityChange = selectedCity => {
    this.setState({ selectedCityName: selectedCity.name });
    if (this.props.onCityChange) {
      this.props.onCityChange(selectedCity);
    }
  };

  render() {
    const {
      cityList,
      prefixCls,
      className,
      defaultActiveGroup, //eslint-disable-line
      onCityGroupChange, //eslint-disable-line
      onCityChange, //eslint-disable-line
      disabledGroups,
      ...attr
    } = this.props;
    const { selectedCityGroup, selectedCityName } = this.state;
    const cityGroups =
      cityList.length >= 1 ? cityList.map(({ group }) => group) : [];

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <div className={cls(`${prefixCls}-panel`)}>
          <div className={cls(`${prefixCls}-panel-header`)}>
            <ul className={cls(`${prefixCls}-panel-header-wrap`)}>
              {cityGroups.map((cityGroup, i) => {
                const isDisabled = disabledGroups.some(
                  group => group === cityGroup || group === i
                );
                return (
                  <li
                    onClick={
                      isDisabled
                        ? undefined
                        : () => this.onCityGroupChange(cityGroup, i)
                    }
                    className={cls(`${prefixCls}-item`, {
                      [`${prefixCls}-active`]:
                        !isDisabled &&
                        (selectedCityGroup === cityGroup ||
                          selectedCityGroup === i),
                      [`${prefixCls}-disabled`]: isDisabled
                    })}
                    key={i}
                  >
                    <span>{cityGroup}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={cls(`${prefixCls}-panel-content`)}>
            <ul className={cls(`${prefixCls}-panel-content-wrap`)}>
              {cityList.length >= 1 &&
                (
                  (
                    cityList.find(
                      (item, i) =>
                        item.group === selectedCityGroup ||
                        i === selectedCityGroup
                    ) || {}
                  ).resources || []
                ).map((city, i) => {
                  return (
                    <li
                      className={cls("city", {
                        selected: selectedCityName === city.name
                      })}
                      key={i}
                      onClick={() => this.onCityChange(city)}
                    >
                      {city.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
