import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { ArrowRightIcon } from "../icon";

export default class CollapseItem extends React.PureComponent {
	state = {
		visible: false
	};
	static defaultProps = {
		prefixCls: "cuke-collapse-item"
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired
	};
	toggleContentPanel = () => {
		this.setState({
			visible: !this.state.visible
		});
	};
	render() {
		const { title, children, className, prefixCls, ...attr } = this.props;
		const { visible } = this.state;
		return (
			<div className={cls(prefixCls, className)} {...attr}>
				<div
					className={cls(`${prefixCls}-header`)}
					onClick={this.toggleContentPanel}
				>
					<span
						className={cls(`${prefixCls}-arrow`, {
							[`${prefixCls}-arrow-active`]: visible
						})}
					>
						<ArrowRightIcon />
					</span>
					{title}
				</div>
				<div
					className={cls(`${prefixCls}-content`, {
						[`${prefixCls}-hide`]: !visible
					})}
				>
					{children}
				</div>
			</div>
		);
	}
}
