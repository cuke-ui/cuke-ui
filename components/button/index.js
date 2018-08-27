import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { IoIosRefresh } from "react-icons/io";
import "./styles.less";

export default class Button extends PureComponent {
	static defaultProps = {
		prefix: "cuke-button",
		type: "default",
		htmlType: "button",
		loading: false,
		disabled: false
	};
	static propTypes = {
		block: PropTypes.bool,
		type: PropTypes.oneOf([
			"primary",
			"default",
			"warning",
			"success",
			"error",
			"info",
			"disabled"
		])
	};
	render() {
		const {
			loading,
			disabled,
			block,
			prefix,
			children,
			type,
			className,
			htmlType,
			onClick,
			...attr
		} = this.props;

		const checkType = btnType => {
			return type.indexOf(btnType) !== -1;
		};

		const isDisabled = disabled ? { disabled: true } : {};
		return (
			<button
				{...attr}
				{...isDisabled}
				type={htmlType}
				onClick={onClick}
				className={cls(
					prefix,
					{ "btn-primary": checkType("primary") },
					{ "btn-warning": checkType("warning") },
					{ "btn-success": checkType("success") },
					{ "btn-error": checkType("error") },
					{ "btn-default": checkType("default") },
					{ "btn-info": checkType("info") },
					{ "btn-disabled": disabled },
					{ "btn-loading": loading },
					{ "btn-block": block },
					className
				)}
			>
				{//TODO: 替换图标
				loading ? <IoIosRefresh className="cuke-loading" /> : undefined}
				<span>{children}</span>
			</button>
		);
	}
}
