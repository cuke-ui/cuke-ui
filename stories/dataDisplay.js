import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../components/tooltip';
import Button from '../components/button';
import Tabs from '../components/tabs';
import {
	SuccessIcon,
	InfoIcon
} from "../components/icon"
import { withInfo } from '@storybook/addon-info';

import "../components/tooltip/styles.less";
import "../components/button/styles.less";
import "../components/tabs/styles.less";

storiesOf('数据展示', module)
.add(
	'Tooltip 文字提示',
	withInfo()(() => (
		<div>
			<h2>基本使用</h2>

			<Tooltip title="黄瓜ui">
				<span> 鼠标放上来 </span>
			</Tooltip>

			<h2>配合按钮使用</h2>
			<Tooltip title="黄瓜ui">
				<Button type="primary"> 鼠标放上来 </Button>
			</Tooltip>

			<h2>四个方向</h2>
			<Tooltip title="黄瓜ui" position="top">
				<Button>上</Button>
			</Tooltip>
			<Tooltip title="黄瓜ui" position="bottom" style={{margin:"0 10px"}}>
				<Button>下</Button>
			</Tooltip>
			<Tooltip title="黄瓜ui" position="left" style={{margin:"0 10px"}}>
				<Button>左</Button>
			</Tooltip>
			<Tooltip title="黄瓜ui" position="right">
				<Button>右</Button>
			</Tooltip>
		</div>
	))
)
.add(
	'Tabs 选项卡',
	withInfo(`
	
	<Tabs defaultActiveKey="1" onChange={(key)=> console.log(key)}>
		<Tabs.TabPane tab="选项1" key="1">1</Tabs.TabPane>
		<Tabs.TabPane tab="选项2" key="2">2</Tabs.TabPane>
		<Tabs.TabPane tab="选项3" key="3">3</Tabs.TabPane>
	</Tabs>

	`)(() => (
		<div>
			<h2>基本使用</h2>

			<Tabs defaultActiveKey="1" onChange={(key)=> console.log(key)}>
				<Tabs.TabPane tab="选项1" key="1">1</Tabs.TabPane>
				<Tabs.TabPane tab="选项2" key="2">2</Tabs.TabPane>
				<Tabs.TabPane tab="选项3" key="3">3</Tabs.TabPane>
			</Tabs>

			<h2>默认选中</h2>
			<Tabs defaultActiveKey="2">
				<Tabs.TabPane tab="选项1" key="1">1</Tabs.TabPane>
				<Tabs.TabPane tab="选项2" key="2">2</Tabs.TabPane>
				<Tabs.TabPane tab="选项3" key="3">3</Tabs.TabPane>
			</Tabs>

			<h2>禁用某一项</h2>
			<Tabs defaultActiveKey="1">
				<Tabs.TabPane tab="选项1" key="1">1</Tabs.TabPane>
				<Tabs.TabPane tab="选项2" key="2" disabled>2</Tabs.TabPane>
				<Tabs.TabPane tab="选项3" key="3">3</Tabs.TabPane>
			</Tabs>

			<h2>自定义标题</h2>
			<Tabs defaultActiveKey="1">
				<Tabs.TabPane tab={<SuccessIcon/>} key="1">已完成</Tabs.TabPane>
				<Tabs.TabPane tab={<InfoIcon/>}key="2">待完成</Tabs.TabPane>
			</Tabs>

			<h2>扩展内容</h2>
			<Tabs defaultActiveKey="1" tabBarExtraContent={<Button>更多</Button>}>
				<Tabs.TabPane tab={<SuccessIcon/>} key="1">已完成</Tabs.TabPane>
				<Tabs.TabPane tab={<InfoIcon/>}key="2">待完成</Tabs.TabPane>
			</Tabs>

			<h2>卡片风格</h2>
			<Tabs defaultActiveKey="1" type="card">
				<Tabs.TabPane tab="选项1" key="1">1</Tabs.TabPane>
				<Tabs.TabPane tab="选项2" key="2" disabled>2</Tabs.TabPane>
				<Tabs.TabPane tab="选项3" key="3">3</Tabs.TabPane>
			</Tabs>
		</div>
	))
);
