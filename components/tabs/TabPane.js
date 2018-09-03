import React, { PureComponent } from "react";
import cls from "classnames";

class BreadcrumbItem extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-tabs-panel"
	};

	render() {
		const { prefixCls, className, children, visible, ...attr } = this.props;
		if (!visible) {
			return null;
		}
		return (
			<div className={cls(prefixCls, className)} {...attr}>
				{children}
			</div>
		);
	}
}

export default BreadcrumbItem;
