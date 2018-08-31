import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { LoadingIcon } from "../icon";

import "./styles.less";

export default class Spin extends PureComponent {
	state = {
		visible: true
	};
	static defaultProps = {
		prefixCls: "cuke-spin",
		size: "",
		tip: "",
		indicator: <LoadingIcon />
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		tip: PropTypes.string,
		indicator: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		size: PropTypes.oneOf(["", "default", "small", "large"])
	};
	constructor(props) {
		super(props);
	}
	render() {
		const {
			prefixCls,
			className,
			indicator,
			size,
			tip,
			children,
			...attr
		} = this.props;

		if (children) {
			return (
				<div className={`${prefixCls}-container`}>
					<div
						className={cls(prefixCls, className, {
							[`${prefixCls}-wrap`]: true
						})}
						{...attr}
					>
						<span
							className={cls(`${prefixCls}-indicator`, {
								[`${prefixCls}-${size}`]: !!size
							})}
						>
							{indicator}
						</span>
						{tip ? <div className={`${prefixCls}-tip`}>{tip}</div> : undefined}
					</div>
					<div className={cls(`${prefixCls}-blur`)}>{children}</div>
				</div>
			);
		}

		return (
			<div
				className={cls(prefixCls, className, `${prefixCls}-spinning`)}
				{...attr}
			>
				<span
					className={cls(`${prefixCls}-indicator`, {
						[`${prefixCls}-${size}`]: !!size
					})}
				>
					{indicator}
				</span>
			</div>
		);
	}
}
