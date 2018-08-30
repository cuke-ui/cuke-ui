import React, { PureComponent, Fragment } from 'react';
import propTypes from 'prop-types';
import { createPortal } from 'react-dom'; //传送门 将节点挂载在root 节点之外
import cls from 'classnames';
import Button from '../button';
import { CloseIcon } from '../icon';
import './styles.less';

export default class Modal extends PureComponent {
	static defaultProps = {
		prefixCls: 'cuke-modal',
		visible: false,
		targetAtNode: document.body,
		title: '',
		onOk: () => {},
		onCancel: () => {},
		okText: '确定',
		cancelText: '取消',
		footer: [],
		content: null,
		confirmLoading: false,
		maskClosable: true,
		centered: false,
		closable: true
	};
	static propTypes = {
		onCancel: propTypes.func,
		onOk: propTypes.func,
		title: propTypes.oneOfType([propTypes.string, propTypes.object]),
		okText: propTypes.oneOfType([propTypes.string, propTypes.object]),
		cancelText: propTypes.oneOfType([propTypes.string, propTypes.object]),
		content: propTypes.oneOfType([propTypes.string, propTypes.object]),
		confirmLoading: propTypes.bool,
		visible: propTypes.bool,
		centered: propTypes.bool,
		closable: propTypes.bool,
		maskClosable: propTypes.bool,
		footer: propTypes.oneOfType([
			//footer 不需要设置为 footer={null}
			propTypes.array,
			propTypes.bool,
			propTypes.object
		])
	};
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
			targetAtNode,
			centered,
			closable,
			maskClosable,
			...attr
		} = this.props;

		const maskClickHandle = maskClosable ? { onClick: onCancel } : {};

		return createPortal(
			<Fragment>
				<div
					className={cls(
						`${prefixCls}-mask`,
						{ [`${prefixCls}-mask-show`]: visible },
						{ [`${prefixCls}-mask-hide`]: !visible }
					)}
					{...maskClickHandle}
				/>
				<div
					role="dialog"
					tabIndex="-1"
					className={cls(`${prefixCls}-wrap`, {
						[`${prefixCls}-centered`]: centered
					})}
				>
					<div
						className={cls(
							prefixCls,
							className,
							{ [`${prefixCls}-open`]: visible },
							{ [`${prefixCls}-close`]: !visible }
						)}
						ref={node => (this.modal = node)}
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
			targetAtNode
		);
	}
}
