import React, { Component } from 'react'
import Modal from '../../components/modal';
import message from '../../components/message';
import Button from '../../components/button';

export default class ModalPage extends Component {
	state = {
		visible: false
	}
	onCancel = (visible)=>{
		this.setState({
			[visible]:false
		})
	}
	onShow = (visible = "visible")=>{
		this.setState({
			[visible]:true
		})
	}
  render() {
    return (
      <div>
				<h2>基本使用</h2>
        <Button type="primary" onClick={()=> this.onShow("visible")}>打开</Button>
				<Modal
					title="基本使用"
					visible={this.state.visible}
					onCancel={() => this.onCancel('visible')}
					onOk={() => message.success('确定')}
				>
					<p> 其实我是高仿 ant-design 的 </p>
				</Modal>

				<h2>自定义文案</h2>
				<Button type="primary" onClick={()=> this.onShow("visible2")}>打开</Button>
				<Modal
					title="自定义"
					visible={this.state.visible2}
					okText="哈哈哈"
					cancelText="嘻嘻嘻"
					onCancel={() => this.onCancel('visible2')}
					onOk={() => message.success('确定')}
				>
					<p>自定义文字</p>
				</Modal>

				<h2>异步加载</h2>
				<Button type="primary" onClick={()=> this.onShow("visible3")}>打开</Button>
				<Modal
					title="异步加载"
					visible={this.state.visible3}
					confirmLoading={this.state.loading}
					okText="哈哈哈"
					cancelText="嘻嘻嘻"
					onCancel={() => this.onCancel('visible3')}
					onOk={() => this.setState({loading:true})}
				>
					<p>自定义文字</p>
				</Modal>

				<h2>无 footer</h2>
				<Button type="primary" onClick={()=> this.onShow("visible4")}>打开</Button>
				<Modal
					title="没有footer"
					visible={this.state.visible4}
					footer={null}
					onCancel={() => this.onCancel('visible4')}
					onOk={() => message.success('确定')}
				>
					<p>自定义文字</p>
				</Modal>

				<h2>居中显示</h2>
				<Button type="primary" onClick={()=> this.onShow("visible5")}>打开</Button>
				<Modal
					title="居中"
					visible={this.state.visible5}
					centered
					onCancel={() => this.onCancel('visible5')}
					onOk={() => message.success('确定')}
				>
					<p>自定义文字</p>
				</Modal>

				<h2>点击蒙版不关闭</h2>
				<Button type="info" onClick={()=> this.onShow("visible6")}>打开</Button>
				<Modal
					title="点击蒙版不关闭"
					visible={this.state.visible6}
					maskClosable={false}
					onCancel={() => this.onCancel('visible6')}
					onOk={() => message.success('确定')}
				>
					<p>自定义文字</p>
				</Modal>

				<h2>不显示关闭按钮</h2>
				<Button type="warning" onClick={()=> this.onShow("visible7")}>打开</Button>
				<Modal
					title="不显示关闭按钮"
					visible={this.state.visible7}
					closable={false}
					onCancel={() => this.onCancel('visible7')}
					onOk={() => message.success('确定')}
				>
					<p>自定义文字</p>
				</Modal>
      </div>
    )
  }
}
