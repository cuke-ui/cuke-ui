import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import "./styles.less";

export default class Input extends PureComponent {
	static defaultProps = {
		prefixCls: "cuke-input",
		isDisabled: false,
		placeholder: "",
		type: "text",
		onChange: () => {}
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		isDisabled: PropTypes.bool,
		type: PropTypes.oneOf([
			"text",
			"password",
			"range",
			"date",
			"number",
			"color",
			"email"
		]),
		value: PropTypes.string,
		defaultValue: PropTypes.string,
		onChange: PropTypes.func
	};

	onChange = e => {
		if (!this.props.disabled) {
			this.props.onChange(e.target.value);
		}
	};

	render() {
		const {
			type,
			placeholder,
			prefixCls,
			className,
			disabled,
			addonBefore,
			addonAfter,
			...attr
		} = this.props;
		const isDisabled = disabled ? { disabled: true } : {};

		const inputEle = (
			<input
				type={type}
				className={cls(prefixCls, className, {
					[`${prefixCls}-disabled`]: disabled
				})}
				placeholder={placeholder}
				onChange={this.onChange}
				{...attr}
				{...isDisabled}
			/>
		);

		if (addonBefore || addonAfter) {
			return (
				<span
					className={cls(
						`${prefixCls}-group`,
						{ [`${prefixCls}-group-addon-before`]: !!addonBefore },
						{ [`${prefixCls}-group-addon-after`]: !!addonAfter },
						{ [`${prefixCls}-group-addon-all`]: !!addonAfter && !!addonBefore }
					)}
				>
					{addonBefore ? (
						<span className={`${prefixCls}-group-addon`}>{addonBefore}</span>
					) : (
						undefined
					)}
					{inputEle}
					{addonAfter ? (
						<span className={`${prefixCls}-group-addon`}>{addonAfter}</span>
					) : (
						undefined
					)}
				</span>
			);
		}
		return inputEle;
	}
}
