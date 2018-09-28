import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Breadcrumb extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-breadcrumb",
		separator: "/"
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		separator: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.string,
			PropTypes.object
		])
	};

	render() {
		const { prefixCls, className, separator, children, ...attr } = this.props;

		const items = React.Children.map(children, (element, index) => {
			return cloneElement(element, {
				separator,
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
