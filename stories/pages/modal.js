import React, { Component } from 'react';
import Modal from '../../components/modal';
import message from '../../components/message';
import Button from '../../components/button';
import Col from '../../components/col';
import Row from '../../components/row';

export default class ModalPage extends Component {
	state = {
		visible: false
	};
	onCancel = visible => {
		this.setState({
			[visible]: false
		});
	};
	onShow = (visible = 'visible') => {
		this.setState({
			[visible]: true
		});
	};
	render() {
		return (
			<div>
				<Row>
					<Col span={6}>
						<h2>基本使用</h2>
						<Button type="primary" onClick={() => this.onShow('visible')}>
							打开
						</Button>
					</Col>
					<Col span={6}>
						<h2>自定义文案</h2>
						<Button type="primary" onClick={() => this.onShow('visible2')}>
							打开
						</Button>
					</Col>
					<Col span={6}>
						<h2>异步加载</h2>
						<Button type="primary" onClick={() => this.onShow('visible3')}>
							打开
						</Button>
					</Col>
				</Row>
				<Row>
					<Col span={6}>
						<h2>无 footer</h2>
						<Button type="primary" onClick={() => this.onShow('visible4')}>
							打开
						</Button>
					</Col>
					<Col span={6}>
						<h2>居中显示</h2>
						<Button type="primary" onClick={() => this.onShow('visible5')}>
							打开
						</Button>
					</Col>
					<Col span={6}>
						<h2>点击蒙版不关闭</h2>
						<Button type="info" onClick={() => this.onShow('visible6')}>
							打开
						</Button>
					</Col>
				</Row>
				<Row>
					<Col span={6}>
						<h2>不显示关闭按钮</h2>
						<Button type="warning" onClick={() => this.onShow('visible7')}>
							打开
						</Button>
					</Col>
					<Col span={6}>
						<h2>确认框</h2>
						<Button
							onClick={() =>
								Modal.confirm({
									title: '确认领钱?',
									content: '请于2020年前往高老庄领取1个比特币',
									onOk(){
										console.log('ok!')
										message.success('你点击了确定')
									},
									onCancel(){
										message.info('你点击了取消')
									}
								})
							}
						>
							Modal.confirm()
						</Button>
					</Col>
					<Col span={6} />
				</Row>
				<Modal
					title="基本使用"
					visible={this.state.visible}
					onCancel={() => this.onCancel('visible')}
					onOk={() => this.onCancel('visible')}
				>
					<span> 其实我是高仿 ant-design 的 </span>
				</Modal>

				<Modal
					title="自定义"
					visible={this.state.visible2}
					okText="哈哈哈"
					cancelText="嘻嘻嘻"
					onCancel={() => this.onCancel('visible2')}
					onOk={() => this.onCancel('visible')}
				>
					<span>自定义文字</span>
				</Modal>

				<Modal
					title="异步加载"
					visible={this.state.visible3}
					confirmLoading={this.state.loading}
					onCancel={() => this.onCancel('visible3')}
					onOk={() =>
						this.setState({ loading: true }, () =>
							setTimeout(
								() => this.setState({ loading: false, visible3: false }),
								2000
							)
						)
					}
				>
					<span>点击确定</span>
				</Modal>

				<Modal
					title="没有footer"
					visible={this.state.visible4}
					footer={null}
					onCancel={() => this.onCancel('visible4')}
					onOk={() => this.onCancel('visible4')}
				>
					<span>自定义文字</span>
				</Modal>

				<Modal
					title="居中"
					visible={this.state.visible5}
					centered
					onCancel={() => this.onCancel('visible5')}
					onOk={() => this.onCancel('visible5')}
				>
					<span>自定义文字</span>
				</Modal>

				<Modal
					title="点击蒙版不关闭"
					visible={this.state.visible6}
					maskClosable={false}
					onCancel={() => this.onCancel('visible6')}
					onOk={() => this.onCancel('visible6')}
				>
					<span>自定义文字</span>
				</Modal>

				<Modal
					title="不显示关闭按钮"
					visible={this.state.visible7}
					closable={false}
					onCancel={() => this.onCancel('visible7')}
					onOk={() => this.onCancel('visible7')}
				>
					<span>自定义文字</span>
				</Modal>
			</div>
		);
	}
}
