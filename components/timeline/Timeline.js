import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Timeline extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-timeline",
		duration: 100
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		animate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
	};

	render() {
		const {
			prefixCls,
			className,
			separator,
			children,
			animate,
			duration,
			...attr
		} = this.props;

		const items = React.Children.map(children, (element, index) => {
			return cloneElement(element, {
				separator,
				key: index,
				style: {
					animationDelay: `${(index * duration) / 1000}s`
				}
			});
		});

		return (
			<ul
				className={cls(prefixCls, className, {
					[`${prefixCls}-animated`]: !!animate,
					[`${prefixCls}-${animate}`]: !!animate
				})}
				{...attr}
			>
				{items}
			</ul>
		);
	}
}
