import React, { PureComponent, cloneElement } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

export default class Breadcrumb extends PureComponent {
	static defaultProps = {
		prefix: 'cuke-breadcrumb',
		separator: '/'
	};

	static propTypes = {
		separator: PropTypes.oneOfType([
			PropTypes.string.isRequired,
			PropTypes.object.isRequired,
		])
	};

	render() {
		const { prefix, className, separator, children, ...attr } = this.props;

		const items = React.Children.map(children, (element, index) => {
			return cloneElement(element, {
				separator,
				key: index
			});
		});

		return (
			<div
				className={cls(
					prefix,
					className
				)}
				{...attr}
			>
				{items}
			</div>
		);
	}
}
