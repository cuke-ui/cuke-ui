import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Input from "../input";
import moment from "moment";
import { DownIcon, LoadingIcon, ArrowLeftIcon, ArrowRightIcon } from "../icon";

export default class DataPicker extends PureComponent {
	state = {
		momentSelected: this.props.defaultValue || this.props.value || moment(),
		selectedDate: moment().date(),
		visible: false,
		isSelected: false,
		extraFooter: null
	};
	static defaultProps = {
		prefixCls: "cuke-date-picker",
		format: "YYYY-MM-DD",
		onPanelVisibleChange: () => {},
		onChange: () => {}
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		onPanelVisibleChange: PropTypes.func,
		onChange: PropTypes.func,
		format: PropTypes.string,
		overlay: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.string,
			PropTypes.object
		])
	};
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps({ value }) {
		this.setState({ momentSelected: value });
	}

	onOpenPanel = () => {
		this.setState({ visible: true }, () => {
			this.content.scrollIntoView({
				behavior: "smooth",
				block: "end"
			});
		});
		// 	this.content.scrollIntoViewIfNeeded({
		// 		behavior: 'smooth',
		// 		block: 'end',
		// 	})
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

	selectedDate = date => {
		this.setState(
			{
				selectedDate: date,
				isSelected: true,
				momentSelected: this.state.momentSelected.clone().date(date),
				visible: false
			},
			() => {
				this.props.onPanelVisibleChange(true);
				this.props.onChange(
					date,
					this.state.momentSelected,
					this.state.momentSelected.format(this.props.format)
				);
			}
		);
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
							key={`first-date-${index}`}
						>
							{lastMonthDaysInMonth - dayOfFirstDate + index + 1}
						</span>
					))}

					{new Array(daysInMonth).fill().map((_, date) => (
						<span
							className={cls(
								`${this.props.prefixCls}-item`,
								`${this.props.prefixCls}-current-month`,
								{
									[`${this.props.prefixCls}-selected-date`]:
										this.state.selectedDate === date + 1
								}
							)}
							key={`date-${date}`}
							onClick={() => this.selectedDate(date + 1)}
						>
							{date + 1}
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
			format,
			extraFooter,
			onSelectedDateChange, //eslint-disable-line
			onPanelVisibleChange, //eslint-disable-line
			...attr
		} = this.props;

		const { momentSelected } = this.state;

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
						value={momentSelected.format(format)}
						onFocus={this.onOpenPanel}
					/>
					<DownIcon className={`${prefixCls}-arrow`} />
				</div>
				<div
					className={cls(`${prefixCls}-content`, {
						[`${prefixCls}-open`]: visible,
						[`${prefixCls}-close`]: !visible
					})}
					ref={node => (this.content = node)}
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
					<div className={cls(`${prefixCls}-footer`)}>{extraFooter}</div>
				</div>
			</div>
		);
	}
}
