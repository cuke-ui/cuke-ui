import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../components/tooltip';
import Button from '../components/button';
import { withInfo } from '@storybook/addon-info';

storiesOf('数据展示', module).add(
	'Tooltip',
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
);
