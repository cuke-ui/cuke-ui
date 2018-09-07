import React from 'react';
import { storiesOf } from '@storybook/react';
import { name,repository } from '../package.json';
import Alert from '../components/alert';
import Button from '../components/button';
import {FaGithub} from "react-icons/fa"

storiesOf('快速上手', module).add('在项目中使用', () => (
	<article style={{ padding: 20 }}>
		<h1 style={{ fontSize: 40,padding:0,margin:0 }}>
		{name}

		<a href={repository} target="_blank" style={{marginLeft:20}}><FaGithub style={{fontSize:30,color:"#444"}}/></a>
		</h1>
		<p>
			<a href="https://www.npmjs.com/package/cuke-ui" title="npm">
				<img
					src="https://img.shields.io/npm/dm/cuke-ui.svg?style=flat-square"
					alt="npm"
				/>
			</a>
			{"  "}
			<a href="https://www.npmjs.com/package/cuke-ui" title="npm">
				<img
					src="https://img.shields.io/npm/l/cuke-ui.svg?style=flat-square"
					alt="npm"
				/>
			</a>
			{"  "}
			<a
				href="https://travis-ci.org/cuke-ui/cuke-ui.svg?branch=master"
				title="npm"
			>
				<img
					src="https://travis-ci.org/cuke-ui/cuke-ui.svg?branch=master"
					alt="travis"
				/>
			</a>
			{"  "}
			<a
				href="https://coveralls.io/github/cuke-ui/cuke-ui?branch=master"
				title="Coverage Status"
			>
				<img
					src="https://coveralls.io/repos/github/cuke-ui/cuke-ui/badge.svg?branch=master"
					alt="Coverage Status"
				/>
			</a>
			{"  "}
			<a href="https://isitmaintained.com/project/cuke-ui/cuke-ui">
				<img src="http://isitmaintained.com/badge/open/cuke-ui/cuke-ui.svg" />
			</a>
		</p>
		<p>即插即用的一个 React UI 库</p>

		<h2>名字由来</h2>
		<p>
			cuke(黄瓜), 常见的一种蔬菜,
			希望这个项目也成为常见的一个依赖(虽然这是不可能的), 其中黄瓜也符合
			这个组件库的 宗旨 : 即插即用 其次 cuke 谐音 (cool ke) 很酷的李金珂的 意思
			主题色 采用 黄瓜绿, 清新又可爱, 组件借鉴(抄袭)了 有牌面的 Ant Design,
			抱着学习的目的,开发了这个组件库,
			所以建议不要用于生产环境,可能心情不好就不维护了
		</p>
		<h2>当前版本</h2>
		<p>
			<a href="https://badge.fury.io/js/cuke-ui" title="npm">
				<img
					src="https://img.shields.io/npm/v/cuke-ui.svg?style=flat-square"
					alt="npm version"
				/>
			</a>
		</p>
		<Alert
			showIcon
			type="warning"
			message="警告"
			description={
				<div>
					<p>
						如果你看到了这里,说明你是一个勇敢的人, 这是一个凭个人兴趣撸的一个{' '}
						<strong>React UI</strong>库
					</p>
					<p>
						以我的技术实力组件质量可想而知, 所以 <strong>不建议</strong> 在{' '}
						<strong> 生产环境</strong> 中 使用, 说不定哪天我不开心了,
						代码就不维护了
					</p>
				</div>
			}
		/>

		<h2>安装</h2>

		<Alert
			showIcon
			type="info"
			message={
				<span>
					请按照{' '}
					<a href="https://github.com/cuke-ui/cuke-ui/blob/master/README.md">
						README
					</a>{' '}
					文档使用
				</span>
			}
			description={
				<div>
					<p>使用 npm : </p>
					<strong>npm i cuke-ui --save</strong>

					<p>使用 yarn : </p>
					<strong>yarn add cuke-ui</strong>
				</div>
			}
		/>

		<h2>设计规范</h2>
		<p>高仿 Ant-Design : )</p>

		<h2>谁在使用</h2>
		<ul>
			<li> - 我自己 </li>
			<li> - 勇敢的人 </li>
		</ul>

		<h2>预览</h2>
		<Alert
			showIcon
			type="info"
			message={
				<span>
					请按照{' '}
					<a href="https://github.com/cuke-ui/cuke-ui/blob/master/README.md">
						README
					</a>{' '}
					文档使用
				</span>
			}
			description={
				<div>
					<p>← 左边是组件的列表,你可以点击预览效果</p>
					<p>
						点击右上角 ↗ 的{' '}
						<Button type="info" size="small">
							Show Info
						</Button>{' '}
						按钮可以看到 示例源码 和 参数列表
					</p>
				</div>
			}
		/>

		<h2>参考轮子</h2>
		<ul>
			<li>
				<a href="https://github.com/ant-design/ant-design">Ant-Design</a>
			</li>
			<li>
				<a href="https://github.com/FrankFang/gulu">gulu</a>
			</li>
			<li>
				<a href="https://github.com/JeromeLin/dragon-ui">dragon-ui</a>
			</li>
		</ul>
	</article>
));
