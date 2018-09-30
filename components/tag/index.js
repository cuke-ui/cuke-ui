import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

const types = [
	"default",
	"primary",
	"warning",
	"success",
	"error",
	"info",
	"loading"
];

export default class Tag extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-tag",
		type: types[0],
		color: "",
		hollow: false,
		dashed: false,
		disabled: false,
		size: "default"
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		types: PropTypes.oneOf(types),
		color: PropTypes.string,
		hollow: PropTypes.bool,
		disabled: PropTypes.bool,
		dashed: PropTypes.bool,
		size: PropTypes.oneOf(["small", "default", "large"])
	};

	render() {
		const {
			prefixCls,
			className,
			children,
			type,
			disabled,
			hollow,
			dashed,
			size,
			style,
			color,
			...attr
		} = this.props;

		return (
			<span
				className={cls(prefixCls, className, {
					[`${prefixCls}-${type}`]: type,
					[`${prefixCls}-hollow`]: hollow,
					[`${prefixCls}-disabled`]: disabled,
					[`${prefixCls}-large`]: size === "large",
					[`${prefixCls}-small`]: size === "small",
					[`${prefixCls}-dashed`]: dashed
				})}
				style={{
					backgroundColor: color,
					...style
				}}
				{...attr}
			>
				{children}
			</span>
		);
	}
}
