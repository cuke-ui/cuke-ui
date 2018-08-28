import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { FiLoader } from 'react-icons/fi';
import './styles.less';

export default class Button extends PureComponent {
	static defaultProps = {
		prefixCls: 'cuke-button',
		type: 'default',
		htmlType: 'button',
		loading: false,
		block: false,
		disabled: false
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		block: PropTypes.bool,
		loading: PropTypes.bool,
		disabled: PropTypes.bool,
		htmlType: PropTypes.string,
		type: PropTypes.oneOf([
			'primary',
			'default',
			'warning',
			'success',
			'error',
			'info',
			'disabled'
		])
	};
	render() {
		const {
			loading,
			disabled,
			block,
			prefixCls,
			children,
			type,
			className,
			htmlType,
			onClick,
			...attr
		} = this.props;

		const checkType = btnType => {
			return type.indexOf(btnType) !== -1;
		};

		const isDisabled = disabled || loading ? { disabled: true } : { onClick };
		return (
			<button
				{...attr}
				{...isDisabled}
				type={htmlType}
				className={cls(
					prefixCls,
					{ 'btn-primary': checkType('primary') },
					{ 'btn-warning': checkType('warning') },
					{ 'btn-success': checkType('success') },
					{ 'btn-error': checkType('error') },
					{ 'btn-default': checkType('default') },
					{ 'btn-info': checkType('info') },
					{ 'btn-disabled': disabled },
					{ 'btn-loading': loading },
					{ 'btn-block': block },
					className
				)}
			>
				{loading ? <FiLoader className="cuke-loading" /> : undefined}
				<span>{children}</span>
			</button>
		);
	}
}
