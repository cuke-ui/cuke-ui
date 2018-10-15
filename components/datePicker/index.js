import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Input from "../input";
import moment from "moment";
import { DownIcon, LoadingIcon, ArrowLeftIcon, ArrowRightIcon } from "../icon";

export default class DataPicker extends PureComponent {
	state = {
		selectedValue: this.props.defaultValue || this.props.value || "",
		momentSelected: moment(),
		currentDateInventory: [],
		visible: false,
		isShowCurrentDateInventory: false
	};
	static defaultProps = {
		prefixCls: "cuke-date-picker",
		onPanelVisibleChange: () => {},
		onChange: () => {}
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		onPanelVisibleChange: PropTypes.func,
		onChange: PropTypes.func,
		overlay: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.string,
			PropTypes.object
		])
	};
	constructor(props) {
		super(props);
	}

	onOpenOptionPanel = () => {
		this.setState({ visible: true });
		this.props.onPanelVisibleChange(true);
	};

	onCloseOptionPanel = () => {
		setTimeout(() => {
			this.setState({ visible: false });
			this.props.onPanelVisibleChange(false);
		}, 100);
	};

	onChange = value => {
		this.setState({ selectedValue: value });
		this.props.onChange(value);
	};

	addMonth = () => {
		this.setState({
			momentSelected: this.state.momentSelected.add(1, "months")
		});
	};

	subtractMonth = () => {
		this.setState({
			momentSelected: this.state.momentSelected.add(-1, "months")
		});
	};

	renderCalendarContent = () => {
		const momentDateFirst = this.state.momentSelected.clone().date(1);
		const daysInMonth = momentDateFirst.daysInMonth();
		const dayOfFirstDate = momentDateFirst.day();

		const momentLastMonth = momentDateFirst.clone().add(-1, "months");
		const lastMonthDaysInMonth = momentLastMonth.daysInMonth();

		if (this.props.isLoading) {
			return <LoadingIcon className={cls(`${this.props.prefixCls}-loading`)} />;
		} else {
			return (
				<Fragment>
					{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
						<span
							className={cls(
								`${this.props.prefixCls}-item`,
								`${this.props.prefixCls}-day-title`
							)}
							key={day}
						>
							{day}
						</span>
					))}

					{new Array(dayOfFirstDate).fill().map((_, index) => (
						<span
							className={cls(
								`${this.props.prefixCls}-item`,
								`${this.props.prefixCls}-last-month`
							)}
							key={index}
						>
							{lastMonthDaysInMonth - dayOfFirstDate + index + 1}
						</span>
					))}

					{new Array(daysInMonth).fill().map((_, index) => (
						<span
							className={cls(
								`${this.props.prefixCls}-item`,
								`${this.props.prefixCls}-current-month`
							)}
							key={index}
						>
							{index + 1}
						</span>
					))}
				</Fragment>
			);
		}
	};
	render() {
		const { visible } = this.state;
		const {
			prefixCls,
			className,
			disabled,
			placeholder,
			onPanelVisibleChange, //eslint-disable-line
			...attr
		} = this.props;

		const { selectedValue } = this.state;

		return (
			<div className={cls(prefixCls, className)} {...attr}>
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
						value={selectedValue}
						onFocus={this.onOpenOptionPanel}
					/>
					<DownIcon className={`${prefixCls}-arrow`} />
				</div>
				<div
					className={cls(`${prefixCls}-content`, {
						[`${prefixCls}-open`]: visible,
						[`${prefixCls}-close`]: !visible
					})}
				>
					<div className={cls(`${prefixCls}-header`)}>
						<span className={cls(`${prefixCls}-date`)}>
							{this.state.momentSelected.year()} {"  "}
							{this.state.momentSelected.month() + 1}月
						</span>
						<span className={cls(`${prefixCls}-switch`)}>
							<span
								className={cls(`${prefixCls}-switch-group`)}
								onClick={this.subtractMonth}
							>
								<ArrowLeftIcon />
							</span>
							<span
								className={cls(`${prefixCls}-switch-group`)}
								onClick={this.addMonth}
							>
								<ArrowRightIcon />
							</span>
						</span>
					</div>
					<div className={cls(`${prefixCls}-items`)}>
						{this.renderCalendarContent()}
					</div>
				</div>
			</div>
		);
	}
}
