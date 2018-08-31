import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import {
	InfoIcon,
	SuccessIcon,
	ErrorIcon,
	CloseIcon,
	WarningIcon
} from "../icon";


export default class Alert extends PureComponent {
	state = {
		visible: true
	};
	static defaultProps = {
		prefixCls: "cuke-alert",
		closeText: <CloseIcon />,
		type: "success",
		message: "",
		description: "",
		closable: false,
		showIcon: false,
		onClose: () => {}
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		closable: PropTypes.bool,
		showIcon: PropTypes.bool,
		onClose: PropTypes.func,
		type: PropTypes.oneOf(["warning", "success", "error", "info"])
	};
	constructor(props) {
		super(props);
		this.typeConfig = {
			info: "info",
			success: "success",
			error: "error",
			warning: "warning"
		};
	}
	onClose = () => {
		this.setState({ visible: false }, this.props.onClose);
	};
	renderIcon = type => {
		switch (type) {
			case "success":
				return <SuccessIcon />;
			case "error":
				return <ErrorIcon />;
			case "warning":
				return <WarningIcon />;
			case "info":
				return <InfoIcon />;
			default:
				return <SuccessIcon />;
		}
	};
	render() {
		const {
			prefixCls,
			type,
			message,
			description,
			closable,
			closeText,
			showIcon,
			className,
			...attr
		} = this.props;

		const { visible } = this.state;

		if (!visible) {
			return null;
		}
		return (
			<div
				className={cls(prefixCls, className, `${prefixCls}-${type}`, {
					"has-description": !!description
				})}
				{...attr}
			>
				<div className={`${prefixCls}-message`}>
					{showIcon ? (
						<span className={`${prefixCls}-icon`}>{this.renderIcon(type)}</span>
					) : (
						undefined
					)}
					<span>{message}</span>
					{closable ? (
						<span className={`${prefixCls}-close`} onClick={this.onClose}>
							{closeText}
						</span>
					) : (
						undefined
					)}
				</div>
				{description ? (
					<div className={`${prefixCls}-description`}>{description}</div>
				) : (
					undefined
				)}
			</div>
		);
	}
}
