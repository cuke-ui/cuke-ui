import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { createPortal, render } from "react-dom"; //传送门 将节点挂载在root 节点之外
import cls from "classnames";
import Button from "../button";
import { CloseIcon } from "../icon";

export default class Modal extends PureComponent {
	state = {
		init: false
	};
	static defaultProps = {
		prefixCls: "cuke-modal",
		visible: false,
		target: () => document.body,
		width: 520,
		title: "",
		onOk: () => {},
		onCancel: () => {},
		okText: "确定",
		cancelText: "取消",
		footer: [],
		content: "",
		confirmLoading: false,
		maskClosable: true,
		centered: false,
		closable: true,
		showMask: true,
		zIndex: 999
	};
	static propTypes = {
		onCancel: PropTypes.func,
		onOk: PropTypes.func,
		title: PropTypes.element,
		okText: PropTypes.element,
		cancelText: PropTypes.element,
		content: PropTypes.element,
		confirmLoading: PropTypes.bool,
		visible: PropTypes.bool,
		centered: PropTypes.bool,
		closable: PropTypes.bool,
		maskClosable: PropTypes.bool,
		showMask: PropTypes.bool,
		target: PropTypes.func,
		zIndex: PropTypes.element,
		width: PropTypes.element,
		footer: PropTypes.oneOfType([
			//footer 不需要设置为 footer={null}
			PropTypes.array,
			PropTypes.bool,
			PropTypes.object
		])
	};
	constructor(props) {
		super(props);
	}
	static confirm = options => {
		render(
			<Modal
				className="cuke-modal-confirm"
				showMask={false}
				closable={false}
				visible
				{...options}
			/>,
			document.getElementById("root")
		);
	};
	disableScroll = () => {
		document.body.style.overflow = "hidden";
		//滚动条的宽度 防止鬼畜
		document.body.style.paddingRight = "15px";
	};
	enableScroll = () => {
		document.body.style.overflow = "";
		document.body.style.paddingRight = 0;
	};
	componentWillReceiveProps({ visible }) {
		if (visible === true) {
			this.disableScroll();
			this.setState({
				init: true
			});
		} else {
			this.enableScroll();
		}
	}
	render() {
		const {
			prefixCls,
			children,
			content,
			title,
			visible,
			onCancel,
			onOk,
			className,
			footer,
			okText,
			cancelText,
			confirmLoading,
			target,
			centered,
			closable,
			maskClosable,
			showMask,
			style,
			width,
			zIndex,
			...attr
		} = this.props;

		const { init } = this.state;

		const initModalAnimate = init
			? { [`${prefixCls}-open`]: visible, [`${prefixCls}-close`]: !visible }
			: { [`${prefixCls}-open`]: visible };

		/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
		const initMaskAnimate = init
			? {
					[`${prefixCls}-mask-show`]: visible,
					[`${prefixCls}-mask-hide`]: !visible
			  }
			: { [`${prefixCls}-mask-show`]: visible };

		const maskClickHandle = maskClosable ? { onClick: onCancel } : {};

		return createPortal(
			<Fragment>
				{showMask ? (
					<div
						className={cls(`${prefixCls}-mask`, initMaskAnimate)}
						{...maskClickHandle}
					/>
				) : (
					undefined
				)}
				<div
					role="dialog"
					tabIndex="-1"
					className={cls(`${prefixCls}-wrap`, {
						[`${prefixCls}-centered`]: centered
					})}
				>
					<div
						className={cls(prefixCls, className, initModalAnimate)}
						ref={node => (this.modal = node)}
						style={{
							...style,
							width,
							zIndex
						}}
						{...attr}
					>
						<section className={`${prefixCls}-header`}>
							<h2 className={`${prefixCls}-title`}>{title}</h2>
							{closable ? (
								<CloseIcon
									className={`${prefixCls}-close`}
									onClick={onCancel}
								/>
							) : (
								undefined
							)}
						</section>
						<section className={`${prefixCls}-content`}>
							{content || children}
						</section>
						{footer && footer.length >= 1 ? (
							<section className={`${prefixCls}-footer`}>
								{footer.map(buttonGroup => buttonGroup)}
							</section>
						) : footer instanceof Array ? (
							<section className={`${prefixCls}-footer`}>
								<Button onClick={onCancel}>{cancelText}</Button>
								<Button type="primary" loading={confirmLoading} onClick={onOk}>
									{okText}
								</Button>
							</section>
						) : (
							undefined
						)}
					</div>
				</div>
			</Fragment>,
			target()
		);
	}
}
