import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

const cardType = "card";

export default class Tabs extends PureComponent {
	state = {
		actionKey: "1",
		lineWidth: 0,
		lineOffsetLeft: 0
	};
	static defaultProps = {
		prefixCls: "cuke-tabs",
		defaultActiveKey: "1",
		onChange: () => {}
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		type: PropTypes.oneOf([cardType]),
		tabBarExtraContent: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
			PropTypes.object
		]),
		onChange: PropTypes.func
	};
	componentWillMount() {
		const { defaultActiveKey } = this.props;
		this.setState({
			actionKey: ~~defaultActiveKey
		});
	}
	componentDidMount() {
		if (this.props.type !== cardType) {
			setTimeout(() => {
				this.setActiveLineStyle();
			}, 0);
		}
	}

	setActiveLineStyle = () => {
		const activeElement = this.activeTab;
		const { width, left } = activeElement.getBoundingClientRect();
		const { left: headerOffset } = this.tabsHeader.getBoundingClientRect();
		this.setState({
			lineWidth: width,
			lineOffsetLeft: left - headerOffset
		});
	};
	onTabChange = key => {
		this.setState({ actionKey: key }, () => {
			if (this.props.type !== cardType) {
				this.setActiveLineStyle();
			}
		});
		this.props.onChange(key);
	};

	render() {
		const {
			prefixCls,
			className,
			type,
			tabBarExtraContent,
			children,
			...attr
		} = this.props;

		const { actionKey, lineWidth, lineOffsetLeft } = this.state;

		const content = React.Children.map(children, (element, index) => {
			const key = (index + 1) >> 0;
			return cloneElement(element, {
				actionKey,
				visible: actionKey === key,
				key: index
			});
		});

		const header = React.Children.map(
			children,
			({ props: { tab, disabled } }, index) => {
				const key = (index + 1) >> 0;
				const bindActiveRef =
					actionKey === key ? { ref: node => (this[`activeTab`] = node) } : {};
				return (
					<div
						key={index}
						role="tab"
						aria-disabled={false}
						aria-selected={true}
						className={cls(`${prefixCls}-tab`, {
							[`${prefixCls}-tab-active`]: actionKey === key,
							[`${prefixCls}-tab-disabled`]: !!disabled
						})}
						{...bindActiveRef}
						onClick={() => !disabled && this.onTabChange(key)}
					>
						{tab}
					</div>
				);
			}
		);

		const isCardType = type === cardType;
		return (
			<div className={cls(prefixCls, className)} {...attr}>
				<div
					className={cls(`${prefixCls}-header`, {
						[`${prefixCls}-card`]: isCardType
					})}
					ref={node => (this.tabsHeader = node)}
				>
					{header}
					{!isCardType ? (
						<div
							className={cls(`${prefixCls}-line`)}
							style={{
								width: lineWidth,
								transform: `translate3d(${lineOffsetLeft}px,0,0)`
							}}
						/>
					) : (
						undefined
					)}
					{tabBarExtraContent ? (
						<div className={cls(`${prefixCls}-extra`)}>
							{tabBarExtraContent}
						</div>
					) : (
						undefined
					)}
				</div>
				<div className={cls(`${prefixCls}-content`)}>{content}</div>
			</div>
		);
	}
}
