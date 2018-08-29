import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import "./styles.less";

export default class Tooltip extends PureComponent {
	state = {
		visible: false,
		left: 0,
		top: 0
	};
	static defaultProps = {
		prefixCls: "cuke-tooltip",
		position: "top",
		title: ""
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		position: PropTypes.oneOf(["top", "right", "left", "bottom"])
	};

	getBounding = () => {
		const {
			width,
			height,
			top,
			left
		} = this.triggerWrapper.getBoundingClientRect();
		const { height: wrapperHeight } = this.wrapper.getBoundingClientRect();
		const { scrollX, scrollY } = window;
		const positions = {
			top: { top: top + scrollY - wrapperHeight, left: left + scrollX },
			bottom: {
				top: top + height + scrollY,
				left: left + scrollX
			},
			left: {
				top: top + scrollY - wrapperHeight / 2,
				left: left + scrollX
			},
			right: {
				top: top + scrollY - wrapperHeight / 2,
				left: left + scrollX + width
			}
		};
		return positions[this.props.position];
	};
	onMouseEnter = () => {
		this.setState({ visible: true }, () => {
			const { left, top } = this.getBounding();
			this.setState({ left, top });
		});
	};
	onMouseLeave = () => {
		this.setState({ visible: false });
	};

	render() {
		const { prefixCls, className, title, position, ...attr } = this.props;
		const { visible, left, top } = this.state;

		return (
			<div
				className={cls(prefixCls, className)}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				{...attr}
			>
				{visible ? (
					<div
						className={cls(`${prefixCls}-wrapper`, `position-${position}`)}
						ref={node => (this.wrapper = node)}
						style={{
							left,
							top
						}}
					>
						{title}
					</div>
				) : (
					undefined
				)}
				<span
					ref={node => (this.triggerWrapper = node)}
					className={cls(`${prefixCls}-trigger-wrapper`)}
				>
					{this.props.children}
				</span>
			</div>
		);
	}
}
