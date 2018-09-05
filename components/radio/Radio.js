import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Radio extends PureComponent {
	state = {
		checked: this.props.checked || this.props.defaultChecked
	};
	static defaultProps = {
		prefixCls: "cuke-radio",
		defaultChecked: false,
		checked: false,
		disabled: false
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		onChange: PropTypes.func,
		disabled: PropTypes.bool,
		checked: PropTypes.bool,
		defaultChecked: PropTypes.bool
	};

	constructor(props) {
		super(props);
	}

	//TODO: onChange 会触发两次
	onChange = e => {
		this.setState({
			checked: true
		});
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	};

	componentWillReceiveProps({ checked }) {
		//当 RadioGroup 像父元素传值时 改变当前选中状态
		this.setState({
			checked
		});
	}

	render() {
		const {
			prefixCls,
			value,
			className,
			children,
			disabled,
			...attr
		} = this.props;

		const { checked } = this.state;

		return (
			<label className={cls(`${prefixCls}-wrapper`)}>
				<span
					className={cls(prefixCls, className, {
						[`${prefixCls}-checked`]: checked,
						[`${prefixCls}-disabled`]: disabled
					})}
					{...attr}
				>
					<input
						type="radio"
						value={value}
						checked={checked}
						className={cls(`${prefixCls}-input`)}
						onChange={e => this.onChange(e)}
						disabled={disabled}
					/>
					<span className={cls(`${prefixCls}-inner`)} />
				</span>
				<span>{children}</span>
			</label>
		);
	}
}
