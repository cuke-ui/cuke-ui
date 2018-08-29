import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import "./styles.less";

export default class Row extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-row",
		gutter: 0
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	};

	render() {
		const { gutter, prefixCls, className, style, ...attr } = this.props;

		const rowStyle = {
			marginLeft: `${-gutter / 2}px`,
			marginRight: `${-gutter / 2}px`
		};
		return (
			<div
				className={cls(prefixCls, className)}
				style={{
					...style,
					...rowStyle
				}}
				{...attr}
			>
				{this.props.children}
			</div>
		);
	}
}
