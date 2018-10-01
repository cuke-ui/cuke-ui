import React, { PureComponent } from "react";
import cls from "classnames";

export default class CityPicker extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-city-picker",
		cityList: []
	};
	state = {
		selectedCityGroup: "热门",
		selectedCityName: ""
	};

	onCityGroupChange = selectedCityGroup => () => {
		this.setState({ selectedCityGroup });

		if (this.props.onCityGroupChange) {
			this.props.onCityGroupChange(selectedCityGroup);
		}
	};
	onCityChange = selectedCity => () => {
		this.setState({ selectedCityName: selectedCity.name });
		if (this.props.onCityChange) {
			this.props.onCityChange(selectedCity);
		}
	};

	render() {
		const { cityList, prefixCls } = this.props;
		const { selectedCityGroup, selectedCityName } = this.state;
		const cityGroups =
			cityList.length >= 1 ? cityList.map(({ group }) => group) : [];

		return (
			<div className={`${prefixCls}`}>
				<div className={cls(`${prefixCls}-panel`)}>
					<div className={cls(`${prefixCls}-panel-header`)}>
						<ul className={cls(`${prefixCls}-panel-header-wrap`)}>
							{cityGroups.map((cityGroup, i) => {
								return (
									<li
										onClick={this.onCityGroupChange(cityGroup)}
										className={cls("item", {
											active: selectedCityGroup === cityGroup
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
								cityList
									.find(item => item.group === selectedCityGroup)
									.resources.map((city, i) => {
										return (
											<li
												className={cls("city", {
													selected: selectedCityName === city.name
												})}
												key={i}
												onClick={this.onCityChange(city)}
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
