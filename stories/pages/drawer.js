import React, { Component } from 'react';
import Drawer from '../../components/drawer';
import Button from '../../components/button';
import Col from '../../components/col';
import Row from '../../components/row';

export default class DrawerPage extends Component {
	state = {
		visible: false,
		placement:"right"
	};
	onClose = visible => {
		this.setState({
			[visible]: false
		});
	};
	onShow = (visible = 'visible') => {
		this.setState({
			[visible]: true
		});
	};
	onPlacementChange = (e)=>{
		this.setState({
			placement:e.target.value
		})
	}
	render() {
		return (
			<div>
				<Row>
					<Col span={6}>
						<h2>基本使用</h2>
						<Button type="primary" onClick={() => this.onShow('visible')}>
							偷偷打开家长的抽屉
						</Button>
					</Col>
					<Col span={6}>
						<h2>点击蒙版不关闭</h2>
						<Button type="info" onClick={() => this.onShow('visible10')}>
							打开
						</Button>
					</Col>
					<Col span={6}>
						<h2>不显示关闭按钮</h2>
						<Button type="info" onClick={() => this.onShow('visible11')}>
							打开
						</Button>
					</Col>
					<Col span={6}>
						<h2>自定义宽度和zIndex</h2>
						<Button type="info" onClick={() => this.onShow('visible12')}>
							打开
						</Button>
					</Col>
				</Row>

				<h2>四个方向</h2>
				//TODO: 后期 完成了 Select 组件 替换
				<p>
					<select onChange={this.onPlacementChange} style={{width:200}}>
						<option value="right">右</option>
						<option value="left">左</option>
						<option value="top">上</option>
						<option value="bottom">下</option>
					</select>
				</p>
				<Row>
					<Col span={6}>
						<Button type="primary" onClick={() => this.onShow('visible2')}>
							偷偷打开家长的抽屉
						</Button>
					</Col>
				</Row>
				<Drawer
					title="基本使用"
					visible={this.state.visible}
					onClose={() => this.onClose('visible')}
				>
					<span>孩子别翻了,没钱</span>
				</Drawer>

				<Drawer
					title="点击蒙版不关闭"
					visible={this.state.visible10}
					maskClosable={false}
					onClose={() => this.onClose('visible10')}
				>
					<span>自定义文字</span>
				</Drawer>

				<Drawer
					title={this.state.placement}
					placement={this.state.placement}
					visible={this.state.visible2}
					onClose={() => this.onClose('visible2')}
				>
					<span>{this.state.placement}</span>
				</Drawer>

				<Drawer
					title="不显示关闭按钮"
					visible={this.state.visible11}
					closable={false}
					onClose={() => this.onClose('visible11')}
				>
					<Button type="primary" block onClick={() => this.onClose('visible11')}>关闭</Button>
				</Drawer>


				<Drawer
					width={500}
					zIndex={888}
					title={this.state.placement}
					placement={this.state.placement}
					visible={this.state.visible12}
					onClose={() => this.onClose('visible12')}
				>
					<span>宽度500px</span>
					<span>z-index:888</span>
				</Drawer>
			</div>
		);
	}
}
