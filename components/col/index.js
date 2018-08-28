import React, { PureComponent } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import './styles.less';

export default class Col extends PureComponent {
	static defaultProps = {
		prefixCls: 'cuke-col'
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	};

	render() {
		const { gutter, prefixCls, className, style,span,offset, ...attr } = this.props;

		const colStyle = {
			paddingLeft: `${-gutter / 2}px`,
			paddingRight: `${-gutter / 2}px`
		};
		return (
			<div
				className={cls(
					prefixCls, 
					{[`${prefixCls}-${span}`]: span},
					{[`${prefixCls}-offset-${offset}`]: offset},
					className
				)}
				style={{
					...style,
					...colStyle
				}}
				{...attr}
			>
				{this.props.children}
			</div>
		);
	}
}
