import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../components/breadcrumb';

storiesOf('导航', module).add('Breadcrumb 面包屑', () => (
	<div>
		<h3>默认导航</h3>
		<Breadcrumb>
			<Breadcrumb.Item>黄瓜 ui</Breadcrumb.Item>
			<Breadcrumb.Item>面包屑</Breadcrumb.Item>
			<Breadcrumb.Item>导航</Breadcrumb.Item>
		</Breadcrumb>

		<h3>自定义分隔符</h3>

		<Breadcrumb separator=">">
			<Breadcrumb.Item>黄瓜 ui</Breadcrumb.Item>
			<Breadcrumb.Item>面包屑</Breadcrumb.Item>
			<Breadcrumb.Item>
				<a href="#">链接</a>
			</Breadcrumb.Item>
			<Breadcrumb.Item>导航</Breadcrumb.Item>
		</Breadcrumb>
	</div>
));
