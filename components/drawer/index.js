import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom"; //传送门 将节点挂载在root 节点之外
import cls from "classnames";
import { CloseIcon } from "../icon";

const placements = ["right", "top", "bottom", "left"];
export default class Drawer extends PureComponent {
	state = {
		init: false
	};
	static defaultProps = {
		prefixCls: "cuke-drawer",
		visible: false,
		target: () => document.body,
		title: "",
		onClose: () => {},
		maskClosable: true,
		closable: true,
		showMask: true,
		width: 300,
		zIndex: 999,
		placement: placements[0]
	};
	static propTypes = {
		title: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.string,
			PropTypes.object
		]),
		content: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.string,
			PropTypes.object
		]),
		confirmLoading: PropTypes.bool,
		visible: PropTypes.bool,
		closable: PropTypes.bool,
		maskClosable: PropTypes.bool,
		showMask: PropTypes.bool,
		zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		placement: PropTypes.oneOf(placements),
		target: PropTypes.func,
		onClose: PropTypes.func
	};
	constructor(props) {
		super(props);
	}
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
			title,
			visible,
			onClose,
			className,
			target,
			closable,
			maskClosable,
			showMask,
			width,
			zIndex,
			placement,
			style,
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

		const maskClickHandle = maskClosable ? { onClick: onClose } : {};

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
				<div role="dialog" tabIndex="-1" className={cls(`${prefixCls}-wrap`)}>
					<div
						className={cls(
							prefixCls,
							className,
							initModalAnimate,
							`${prefixCls}-${placement}`,
							{"no-title": !title}
						)}
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
								<CloseIcon className={`${prefixCls}-close`} onClick={onClose} />
							) : (
								undefined
							)}
						</section>
						<section className={`${prefixCls}-content`}>{children}</section>
					</div>
				</div>
			</Fragment>,
			target()
		);
	}
}
