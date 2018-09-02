import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

const types = ["default","warning", "success", "error", "info"];

export default class Progress extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-progress",
		type: "default",
		percent: 0,
		animation: true
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
			...attr
		} = this.props;

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
						style={{ width: `${percent}%` }}
					/>
				</div>
			</div>
		);
	}
}
