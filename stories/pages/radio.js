import React, { PureComponent } from 'react';
import Radio from '../../components/radio';

export default class RadioPage extends PureComponent {
	state = {
		value: '小红'
	};
	onChange = e => {
    console.log(e.target.value);
		this.setState({ value: e.target.value });
	};
	render() {
		return (
			<div>
				<h2>基本使用</h2>
				<Radio value="666" onChange={(e)=> console.log(e.target.value)}>
					黄瓜 ui
				</Radio>
				<br />
				<Radio defaultChecked={true}>默认选中</Radio> <br />
				<h2>禁用</h2>
				<Radio disabled>黄瓜 ui</Radio> <br />
				<Radio checked disabled>
					黄瓜 ui
				</Radio>
				<h2>老板需要几号技师</h2>
				<p> 选中 : {this.state.value} </p>
				<Radio.Group value={this.state.value} onChange={this.onChange}>
					<Radio value="小红">小红</Radio>
					<Radio value="小明">小明</Radio>
					<Radio value="小美">小美</Radio>
					<Radio value="小芳">小芳</Radio>
					<Radio value="小黑" disabled>
						小黑
					</Radio>
				</Radio.Group>
			</div>
		);
	}
}
