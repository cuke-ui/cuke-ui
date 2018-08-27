import React, { PureComponent } from 'react';
import cls from 'classnames';

class BreadcrumbItem extends PureComponent {
	static defaultProps = {
		prefixCls: 'cuke-breadcrumb-item',
		separator: '/'
	};

	render() {
		const { prefixCls, className, separator, children, ...attr } = this.props;
		return (
			<span className={cls(prefixCls, className)} {...attr}>
				<span className={`${prefixCls}-text`}>{children}</span>
				<span className={`${prefixCls}-separator`}>{separator}</span>
			</span>
		);
	}
}

export default BreadcrumbItem;
