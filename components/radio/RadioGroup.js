import React, { PureComponent } from 'react';
import Radio from './Radio';
import PropTypes from 'prop-types';
import cls from 'classnames';

export default class RadioGroup extends PureComponent {
	state = {
		value: this.props.value || this.props.defaultValue
	};
	static defaultProps = {
		prefixCls: 'cuke-radio-group',
		onChange: () => {}
	};

	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		onChange: PropTypes.func
	};

	constructor(props) {
		super(props);
	}

	onRadioChange(e) {
		this.setState({
			value: e.target.value
		});
		this.props.onChange(e);
	}

	componentWillReceiveProps({ value }) {
		//当传入的 value 值改变时 重置下 value 值
		this.setState({
			value
		});
	}

	render() {
		const { children, prefixCls, className, ...attr } = this.props;
		const { value } = this.state;

		// 变量子节点 对比当前value 和  子节点 value 是否相同
		const radios = React.Children.map(children, radio => {
			return (
				<Radio
					{...radio.props}
					onChange={e => this.onRadioChange(e)}
					checked={value === radio.props.value}
				/>
			);
		});

		return (
			<div className={cls(prefixCls, className)} {...attr}>
				{radios}
			</div>
		);
	}
}
