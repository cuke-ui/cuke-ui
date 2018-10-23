import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { LoadingIcon } from "../icon";

export default class Button extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-button",
		href: "",
		type: "default",
		htmlType: "button",
		size: "default",
		loading: false,
		block: false,
		disabled: false,
		hollow: false,
		dashed: false
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		block: PropTypes.bool,
		hollow: PropTypes.bool,
		loading: PropTypes.bool,
		disabled: PropTypes.bool,
		dashed: PropTypes.bool,
		htmlType: PropTypes.string,
		href: PropTypes.string,
		type: PropTypes.oneOf([
			"primary",
			"default",
			"warning",
			"success",
			"error",
			"info",
			"disabled"
		]),
		size: PropTypes.oneOf(["small", "default", "large"])
	};
	render() {
		const {
			loading,
			disabled,
			block,
			prefixCls,
			children,
			type,
			className,
			htmlType,
			onClick,
			hollow,
			size,
			href,
			dashed,
			...attr
		} = this.props;

		const checkType = btnType => {
			return type.indexOf(btnType) !== -1;
		};

		const isDisabled = disabled || loading ? { disabled: true } : { onClick };

		const baseProps = {
			...attr,
			...isDisabled,
			type: htmlType,
			className: cls(
				prefixCls,
				{ "btn-primary": checkType("primary") },
				{ "btn-warning": checkType("warning") },
				{ "btn-success": checkType("success") },
				{ "btn-error": checkType("error") },
				{ "btn-default": checkType("default") },
				{ "btn-info": checkType("info") },
				{ "btn-disabled": disabled },
				{ "btn-loading": loading },
				{ "btn-block": block },
				{ "btn-hollow": hollow },
				{ "btn-large": size === "large" },
				{ "btn-small": size === "small" },
				{ "btn-dashed": dashed },
				className
			)
		};

		const content = (
			<Fragment>
				{loading && <LoadingIcon className="cuke-loading" />}
				<span>{children}</span>
			</Fragment>
		);
		if (href) {
			return (
				<a
					href={href}
					className={cls(`${prefixCls}-link`, className)}
					{...attr}
				>
					{content}
				</a>
			);
		}
		return <button {...baseProps}>{content}</button>;
	}
}
