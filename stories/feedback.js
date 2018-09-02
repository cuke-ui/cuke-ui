import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import message from '../components/message';
import Button from '../components/button';
import Alert from '../components/alert';
import Modal from '../components/modal';
import ModalPage from './pages/modal';
import ProgressPage from './pages/progress';
import Spin from '../components/spin';
import Progress from '../components/progress';

import { SuccessIcon } from '../components/icon';
import './styles/feedback.less';
import "../components/message/styles.less";
import "../components/button/styles.less";
import "../components/alert/styles.less";
import "../components/modal/styles.less";
import "../components/spin/styles.less";
import "../components/progress/styles.less";

storiesOf('操作反馈', module)
	.add(
		'Message 消息提示',
		withInfo(
			`
    基本使用 
    ~~~js
    message.success(content,duration(秒), callback, isDarkTheme)
    message.error(content,duration, callback, isDarkTheme)
    message.loading(content,duration, callback, isDarkTheme)
    message.warning(content,duration, callback, isDarkTheme)
    message.info(content,duration, callback, isDarkTheme)
    ~~~
  `
		)(() => (
			<div className="message-example">
				<h2>基本使用</h2>
				<Button type="primary" onClick={() => message.success('我是渣渣辉!')}>
					成功
				</Button>
				<Button type="error" onClick={() => message.error('我是渣渣辉!')}>
					错误
				</Button>
				<Button type="warning" onClick={() => message.warning('真香警告!')}>
					警告
				</Button>
				<Button type="info" onClick={() => message.info('黄瓜 ui!')}>
					信息
				</Button>
				<Button type="primary" onClick={() => message.loading('我是渣渣辉!')}>
					加载中
				</Button>

				<h2>自定义延时</h2>
				<Button
					type="primary"
					onClick={() => message.loading('10秒后关闭', 10)}
				>
					10秒过后关闭
				</Button>

				<h2>回调函数</h2>
				<Button
					type="primary"
					onClick={() =>
						message.loading('领取中...', 3, () => message.success('领取成功'))
					}
				>
					屠龙宝刀点击就送
				</Button>

				<h2>两种主题</h2>
				<Button type="primary" onClick={() => message.info('你永远不懂我伤悲')}>
					白天
				</Button>
				<Button
					type="primary"
					onClick={() => message.info('像白天不懂夜的黑', 2, undefined, true)}
				>
					黑夜
				</Button>
			</div>
		))
	)
	.add(
		'Alert 警告提示',
		withInfo()(() => (
			<div style={{ width: '50%' }}>
				<h2>基本使用</h2>
				<Alert type="success" message="恭喜你获得5元兰博基尼购车优惠券" />

				<h2>多种类型</h2>
				<Alert type="success" message="黄瓜 ui 开发中" />
				<Alert type="info" message="恭喜你获得充气女友一个" />
				<Alert type="error" message="网费不足,请立即充值,不要坑队友" />
				<Alert type="warning" message="有电危险" />

				<h2>描述</h2>
				<Alert
					type="success"
					message="一等奖"
					description="获得5元兰博基尼购车优惠券"
				/>
				<Alert
					type="info"
					message="通知"
					description="请李时珍的皮同学赶快回家,你妈在找你"
				/>
				<Alert type="error" message="错误" description="发生了未知的错误" />
				<Alert
					type="warning"
					message="警告"
					description="不要在写代码了,快要猝死了"
				/>

				<h2>显示图标</h2>
				<Alert
					type="success"
					showIcon
					message="恭喜你获得5元兰博基尼购车优惠券"
				/>
				<Alert type="info" showIcon message="恭喜你获得5元兰博基尼购车优惠券" />
				<Alert
					type="error"
					showIcon
					message="恭喜你获得5元兰博基尼购车优惠券"
				/>
				<Alert
					type="warning"
					showIcon
					message="大哥"
					description="求求你不要在秀了"
				/>

				<h2>可关闭的</h2>
				<Alert type="success" showIcon closable message="有本事关掉我?" />

				<h2>自定义关闭文字</h2>
				<Alert
					type="error"
					showIcon
					closable
					closeText="忽略"
					message="有一个 bug?"
				/>

				<h2>关闭回调</h2>
				<Alert
					type="error"
					showIcon
					closable
					message="有一个 bug?"
					onClose={() => console.log('关闭了')}
				/>
			</div>
		))
	)
	.add(
		'Modal 对话框',
		withInfo(
			`
			使用
			~~~js
			<Modal
				title="哈哈"
				visible={true}
				okText="确定"
				cancelText="取消"
				closable={true}
				maskClosable={true}
				centered={true}
				footer={null}
				targetAtNode={document.body}
				onCancel={() => {}}
				onOk={() => {}}
		>
			<span>自定义文字</span>
		</Modal>
		~~~
			`
		)(() => (
			<div>
				<Modal visible={false} />
				<ModalPage />
			</div>
		))
	)
	.add(
		'Spin 加载中',
		withInfo()(() => (
			<div>
				<h2>基本使用</h2>
				<Spin />

				<h2>三种尺寸</h2>
				<Spin size="small" />
				<Spin style={{ margin: '0 10px' }} />
				<Spin size="large" />

				<h2>在容器中显示</h2>
				<Spin tip="拼了老命加载中...">
					<Alert
						style={{margin:0}}
						message="通知"
						description={
							<div>
								<p> 系统错误,正在重新尝试,请稍后</p>
								<p> 请各部门做好准备</p>
							</div>
						}
						type="warning"
					/>
				</Spin>

				<h2>自定义加载图标</h2>
				<Spin indicator={<SuccessIcon />} />
			</div>
		))
	)
	.add(
		'Progress 进度条',
		withInfo()(() => (
			<div className="progress-example">
				<h2>基本使用</h2>
				<Progress percent={70}/>

				<Progress percent={70} animation={false}/>

				<h2>5种状态</h2>
				<Progress percent={20} type="default"/>
				<Progress percent={30} type="success"/>
				<Progress percent={40} type="info"/>
				<Progress percent={50} type="warning"/>
				<Progress percent={60} type="error"/>

				<Progress percent={20} type="default" animation={false}/>
				<Progress percent={30} type="success" animation={false}/>
				<Progress percent={40} type="info" animation={false}/>
				<Progress percent={50} type="warning" animation={false}/>
				<Progress percent={60} type="error" animation={false}/>

				<h2>动态改变</h2>
				<ProgressPage/>
			</div>
		))
	);
