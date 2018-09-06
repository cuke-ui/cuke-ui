import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { LoadingIcon } from "../icon";

const DefaultDot = () => <div className="cuke-timeline-dot" />;

const types = [
	"primary",
	"warning",
	"success",
	"error",
	"info",
	"disabled",
	"loading"
];
export default class TimelineItem extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-timeline-item",
		dot: <DefaultDot />,
		type: types[0],
		color: ""
	};

	static propsTypes = {
		prefixCls: PropTypes.string.isRequired,
		types: PropTypes.oneOf(types),
		dot: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.string,
			PropTypes.number
		])
	};

	render() {
		const {
			prefixCls,
			className,
			dot,
			children,
			type,
			color,
			style,
			...attr
		} = this.props;

		return (
			<li
				className={cls(prefixCls, className, {
					[`${prefixCls}-${type}`]: type
				})}
				{...attr}
			>
				<div className={`${prefixCls}-line`} />
				{type === "loading" ? (
					<div className={`${prefixCls}-dot-loading`}>
						<LoadingIcon style={{ color }} />
					</div>
				) : (
					<div className={`${prefixCls}-dot`} style={{ borderColor: color }}>
						{dot}
					</div>
				)}
				<div
					className={`${prefixCls}-content`}
					style={{ animationDelay: style.animationDelay }}
				>
					{children}
				</div>
			</li>
		);
	}
}
