import React, { PureComponent } from 'react';
import Checkbox from '../../components/checkbox';

export default class CheckboxPage extends PureComponent {
	onChange = e => {
		console.log(e.target.value, e.target.checked);
	};
	onGroupChange = value => {
		console.log('选中:',value);
	};
	render() {
		return (
			<div>
				<h2>基本使用</h2>
				<Checkbox onChange={this.onChange}>黄瓜 ui</Checkbox>

				<h2>默认选中</h2>
				<Checkbox checked onChange={this.onChange}>黄瓜 ui</Checkbox>

				<h2>禁用</h2>
				<Checkbox disabled onChange={this.onChange}>
					黄瓜 ui
				</Checkbox>
				<Checkbox disabled checked style={{marginLeft:20}}>
					黄瓜 ui
				</Checkbox>

				<h2>不确定</h2>
				<Checkbox checked indeterminate>
					黄瓜 ui
				</Checkbox>
				
				<h2>组合</h2>
				<Checkbox.Group onChange={this.onGroupChange}>
					<Checkbox value="黄瓜">黄瓜</Checkbox>
					<Checkbox value="茄子">茄子</Checkbox>
					<Checkbox value="玉米">玉米</Checkbox>
					<Checkbox value="番茄" disabled>番茄</Checkbox>
				</Checkbox.Group>

				<h2>全部禁用</h2>
				<Checkbox.Group disabled>
					<Checkbox defaultChecked>黄瓜 ui</Checkbox>
					<Checkbox>黄瓜 ui</Checkbox>
					<Checkbox>黄瓜 ui</Checkbox>
					<Checkbox>黄瓜 ui</Checkbox>
				</Checkbox.Group>
			</div>
		);
	}
}
