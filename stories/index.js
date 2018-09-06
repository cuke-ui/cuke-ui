import React from 'react';
import { storiesOf } from '@storybook/react';
import version from '../components/version';
import Alert from '../components/alert';
import Button from '../components/button';
import {InfoIcon} from '../components/icon';


storiesOf('快速上手', module).add('在项目中使用', () => (
	<article>
		<h2>在项目中使用</h2>
		<p>
			{' '}
			当前版本: <Button size="small" type="primary">v{version}</Button>
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

		<h2>我不管我就要用</h2>
		<p>牛批!</p>
		<Alert
			showIcon
			type="info"
			message={ <span>请按照 <a href="https://github.com/cuke-ui/cuke-ui/blob/master/README.md">README</a> 文档使用</span>}
			description={
				<div>
					<p>
            ← 左边是组件的列表,你可以点击预览效果
					</p>
					<p>
            点击右上角 ↗ 的 <Button type="info" size="small">Show Info</Button> 按钮可以看到 示例源码 和 参数列表 
					</p>
				</div>
			}
		/>
	</article>
));
