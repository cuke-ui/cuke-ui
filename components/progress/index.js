import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

const types = ["default", "warning", "success", "error", "info"];

export default class Progress extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-progress",
		type: "default",
		percent: 0,
		animation: false,
		showInfo: true
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		animation: PropTypes.bool,
		percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		type: PropTypes.oneOf(types)
	};
	constructor(props) {
		super(props);
	}
	render() {
		const {
			prefixCls,
			type,
			animation,
			className,
			percent,
			showInfo,
			...attr
		} = this.props;

		const _percent = `${Math.min(100, percent)}%`;

		return (
			<div
				className={cls(prefixCls, className, `${prefixCls}-${type}`)}
				{...attr}
			>
				<div className={`${prefixCls}-enter`}>
					<div
						className={cls(`${prefixCls}-bg`, {
							[`${prefixCls}-bg-animation`]: animation
						})}
						style={{ width: _percent }}
					/>
				</div>
				{showInfo ? (
					<div className={`${prefixCls}-num`}>{_percent}</div>
				) : (
					undefined
				)}
			</div>
		);
	}
}
