import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import cls from "classnames";

import {
	FiVolume2 as InfoIcon,
	FiLoader as LoadingIcon,
	FiCheckCircle as SuccessIcon,
	FiXCircle as ErrorIcon,
	FiAlertCircle as WarningIcon
} from "react-icons/fi";

import "./styles.less";

export default class Message extends PureComponent {
	state = {
		visible: true
	};
	animationTime = 500;
	_container;
	_dom;
	constructor(props) {
		super(props);
		this.typeConfig = {
			info: "info",
			success: "success",
			error: "error",
			warning: "warning",
			loading: "loading"
		};
	}
	static propTypes = {
		title: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		darkTheme: PropTypes.bool,
		onClose: PropTypes.func
	};
	static defaultProps = {
		prefixCls: "cuke-message",
		duration: 2,
		darkTheme: false,
		onClose: () => {}
	};
	createContainer() {
		const { prefixCls } = this.props;
		if (!this.div) {
			this.div = document.createElement("div");
			this.div.className = prefixCls;
			document.body.appendChild(this.div);
		}
	}
	componentDidMount() {
		const { duration, onClose } = this.props;

		this.timer = setTimeout(() => {
			this.setState({ visible: false }, () => {
				setTimeout(() => {
					this.removeNode();
				}, this.animationTime);
				onClose();
			});
		}, duration * 1000);
	}
	removeNode = () => {
		ReactDOM.unmountComponentAtNode(this._container);
		this._dom.remove();
	};
	static renderElement = (type, title, duration, onClose, darkTheme) => {
		let div = document.createElement("div");
		document.body.appendChild(div);
		let _message = ReactDOM.render(
			<Message
				type={type}
				title={title}
				darkTheme={darkTheme}
				duration={duration}
				onClose={onClose}
			/>,
			div
		);
		_message._container = div;
		_message._dom = div;
	};
	static error(title, duration, onClose, darkTheme) {
		this.renderElement("error", title, duration, onClose, darkTheme);
	}
	static info(title, duration, onClose, darkTheme) {
		this.renderElement("info", title, duration, onClose, darkTheme);
	}
	static success(title, duration, onClose, darkTheme) {
		this.renderElement("success", title, duration, onClose, darkTheme);
	}
	static warning(title, duration, onClose, darkTheme) {
		this.renderElement("warning", title, duration, onClose, darkTheme);
	}
	static loading(title, duration, onClose, darkTheme) {
		this.renderElement("loading", title, duration, onClose, darkTheme);
	}
	render() {
		const {
			prefixCls,
			darkTheme,
			type,
			title,
			className,
			duration,
			...attr
		} = this.props;

		const { visible } = this.state;

		const typeConfig = this.typeConfig;

		return (
			<div
				key="message"
				className={cls(
					prefixCls,
					className,
					{ "theme-dark": darkTheme },
					{ open: visible && duration },
					{ close: !visible }
				)}
				{...attr}
			>
				<div
					className={cls(
						`${prefixCls}-title-custom`,
						`message-${typeConfig[type]}`
					)}
				>
					<p className="icon">
						{type === typeConfig["info"] ? <InfoIcon /> : undefined}
						{type === typeConfig["success"] ? <SuccessIcon /> : undefined}
						{type === typeConfig["error"] ? <ErrorIcon /> : undefined}
						{type === typeConfig["warning"] ? <WarningIcon /> : undefined}
						{type === typeConfig["loading"] ? <LoadingIcon /> : undefined}
					</p>

					<p className="text">
						<span className="title">{title}</span>
					</p>
				</div>
			</div>
		);
	}
}
