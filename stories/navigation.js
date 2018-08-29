import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Breadcrumb from '../components/breadcrumb';
import Pagination from '../components/pagination';

storiesOf('导航', module)
	.add(
		'Breadcrumb 面包屑',
		withInfo()(() => (
			<div>
				<h2>默认导航</h2>
				<Breadcrumb>
					<Breadcrumb.Item>黄瓜 ui</Breadcrumb.Item>
					<Breadcrumb.Item>面包屑</Breadcrumb.Item>
					<Breadcrumb.Item>导航</Breadcrumb.Item>
				</Breadcrumb>

				<h2>自定义分隔符</h2>

				<Breadcrumb separator=">">
					<Breadcrumb.Item>黄瓜 ui</Breadcrumb.Item>
					<Breadcrumb.Item>面包屑</Breadcrumb.Item>
					<Breadcrumb.Item>
						<a href="#">链接</a>
					</Breadcrumb.Item>
					<Breadcrumb.Item>导航</Breadcrumb.Item>
				</Breadcrumb>
			</div>
		))
	)
	.add(
		'Pagination 分页器',
		withInfo()(() => (
			<div>
				<h2>默认分页</h2>
				<Pagination current={1} total={10} />

				<h2>自定义文案</h2>
				<Pagination
					current={1}
					total={10}
					locale={{ prevText: '后退', nextText: '前进' }}
				/>

				<h2>自定义分隔符</h2>
				<Pagination
					current={1}
					total={10}
					separator="|"
				/>

				<h2>回调</h2>
				<Pagination current={1} total={10} onChange={(type,pageIndex)=> console.log(type,pageIndex)}/>
			</div>
		))
	);
