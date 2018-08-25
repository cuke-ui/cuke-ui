import React from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import "./styles.less";

export default class Button extends React.PureComponent {
	static defaultProps = {
		prefix: "cuke-button",
		type: "default",
		htmlType: "button"
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

		const isDisabled = checkType("disabled") ? { disabled: true } : {};
		return (
			<button
				{...attr}
				{...isDisabled}
				type={htmlType}
				onClick={onClick}
				className={cls(
					prefix,
					"btn",
					{ "btn-primary": checkType("primary") },
					{ "btn-warning": checkType("warning") },
					{ "btn-success": checkType("success") },
					{ "btn-error": checkType("error") },
					{ "btn-default": checkType("default") },
					{ "btn-disabled": checkType("disabled") },
					{ "btn-info": checkType("info") },
					{ "btn-block": block },
					className
				)}
			>
				<span>{children}</span>
			</button>
		);
	}
}
