import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import WordPad from '../components/wordPad';
import Button from '../components/button';
import Input from '../components/input';
import { withInfo } from '@storybook/addon-info';
import { IoIosAddCircleOutline } from "react-icons/io";

import "../components/input/styles.less";

storiesOf('数据录入', module)
	.add('WordPad 写字板', withInfo()(() => (
		<div>
			<h2>用鼠标在上面写字</h2>
			<WordPad
				width={300}
				height={300}
				style={{
					border: '1px solid #444',
					margin: '10px 0'
				}}
				getCanvas={(canvas, ctx) => action(canvas, ctx)}
			/>
			<Button type="primary">获取文字</Button>

			<h2>自定义画笔</h2>
			<WordPad
				width={200}
				height={200}
				strokeColor="#396"
				strokeWidth={3}
				style={{
					border: '1px solid #444',
					margin: '10px 0'
				}}
			/>
		</div>
	)))
	.add('Input 输入框', withInfo()(() => (
		<div style={{ width: 400 }}>
			<h2>基本使用</h2>
			<Input placeholder="请输入" onChange={(e)=> console.log(e.target.value)}/>
			<Input
				type="password"
				placeholder="请输入密码"
				style={{ margin: '10px 0' }}
			/>
			<Input type="number" placeholder="请输入数字" />
			<Input placeholder="请输入" defaultValue={'默认值'} style={{ margin: '10px 0' }}/>
			<Input disabled placeholder="禁用"  />

			<h2>前置/后置标签</h2>
			<Input addonBefore={<IoIosAddCircleOutline/>} placeholder="请输入" />
			<Input addonAfter={'.com'} placeholder="填写网址" style={{ margin: '10px 0' }}/>
			<Input addonBefore={"https://"} addonAfter={'.cn'} placeholder="www.lijinke" />
		</div>
	)))
