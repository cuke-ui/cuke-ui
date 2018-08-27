import React, { PureComponent } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

//TODO: 输入框组件
export default class Input extends PureComponent {
	static defaultProps = {
		prefix: 'cuke-input',
	};

	static propTypes = {
		separator: PropTypes.oneOfType([
			PropTypes.string.isRequired,
			PropTypes.object.isRequired,
		])
	};

	render() {
    const {
      prefix,
      className,
      ...attr
    } = this.props
		return (
			<div
				className={cls(
					prefix,
					className
				)}
				{...attr}
			>
				<input type="text"/>
			</div>
		);
	}
}
