import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Collapse extends React.PureComponent {
	static defaultProps = {
		prefixCls: "cuke-collapse"
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired
	};
	render() {
		const { className, prefixCls, children, ...attr } = this.props;

		const items = React.Children.map(children, (element, index) => {
			return React.cloneElement(element, {
				key: index
			});
		});

		return (
			<div className={cls(prefixCls, className)} {...attr}>
				{items}
			</div>
		);
	}
}
