import React, { PureComponent } from 'react';
import cls from 'classnames';

class BreadcrumbItem extends PureComponent {
	static defaultProps = {
		prefix: 'cuke-breadcrumb-item',
		separator: '/'
	};

	render() {
		const { prefix, className, separator, children, ...attr } = this.props;
		return (
			<span className={cls(prefix, className)} {...attr}>
				<span className={`${prefix}-text`}>{children}</span>
				<span className={`${prefix}-separator`}>{separator}</span>
			</span>
		);
	}
}

export default BreadcrumbItem;
