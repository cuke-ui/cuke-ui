import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import CityPickerCore from "./CityPickerCore";
import Input from "../input";
import { DownIcon } from "../icon";

export default class CityPicker extends PureComponent {
	state = {
		visible: false
	};
	static defaultProps = {
		prefixCls: "cuke-city-picker",
		cityList: [],
		disabled: false,
		placeholder: "请选择"
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
		activeGroup: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		disabled: PropTypes.bool,
		placeholder: PropTypes.string,
		onCityGroupChange: PropTypes.func,
		onCityChange: PropTypes.func
	};
	state = {
		selectedCityGroup:
			this.props.defaultActiveGroup || this.props.activeGroup || 0,
		selectedCityName: ""
	};

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
		this.setState({ visible: true });
	};

	onCloseCityPicker = () => {
		// this.setState({visible: false})
	};
	render() {
		const {
			cityList,
			prefixCls,
			disabled,
			placeholder,
			className,
			...attr
		} = this.props;
		const { visible, selectedCityName, selectedCityGroup } = this.state;
		return (
			<div className={cls(`${prefixCls}`, className)} {...attr}>
				<div className={cls(`${prefixCls}-inner`)}>
					<Input
						disabled={disabled}
						readonly
						placeholder={placeholder}
						className={cls(`${prefixCls}-input`)}
						onFocus={this.onOpenCityPicker}
						onBlur={this.onCloseCityPicker}
						value={selectedCityName}
					/>
					<DownIcon className={`${prefixCls}-arrow`} />
				</div>
				<div
					className={cls(`${prefixCls}-content`, {
						[`${prefixCls}-open`]: visible,
						[`${prefixCls}-close`]: !visible
					})}
				>
					<CityPickerCore
						cityList={cityList}
						onCityChange={this.onCityChange}
						defaultActiveGroup={selectedCityGroup}
						onCityGroupChange={this.onCityGroupChange}
					/>
				</div>
			</div>
		);
	}
}
