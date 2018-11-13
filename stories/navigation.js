import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Breadcrumb from '../components/breadcrumb';
import Button from '../components/button';
import Pagination from '../components/pagination';
import Dropdown from '../components/dropdown';
import Affix from '../components/affix';
import Row from '../components/row';
import Col from '../components/col';

import { DownIcon } from '../components/icon';

import '../components/breadcrumb/styles.less';
import '../components/pagination/styles.less';
import '../components/dropdown/styles.less';
import '../components/affix/styles.less';
import './styles/navigation.less';

const overlay = (
  <ul className="example-dropdown-list">
    <li> 红烧牛肉 </li>
    <li> 麻辣干锅 </li>
    <li> 仔姜肉丝 </li>
  </ul>
);

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
        <Pagination current={1} total={10} separator="|" />

        <h2>回调</h2>
        <Pagination
          current={1}
          total={10}
          onChange={(type, pageIndex) => console.log(type, pageIndex)}
        />
      </div>
    ))
  )
  .add(
    'Dropdown 下拉菜单',
    withInfo(`
		const overlay = (
			<ul className="example-dropdown-list">
				<li> 红烧牛肉 </li>
				<li> 麻辣干锅 </li>
				<li> 仔姜肉丝 </li>
			</ul>
		)
		<Dropdown overlay={overlay}>
			<a href="#">今日菜单</a> 
			<DownIcon/>
		</Dropdown>
		`)(() => (
        <div className="example-drapdown" style={{ paddingBottom: 200 }}>
          <h2>基本使用</h2>

          <Row>
            <Col span={5}>
              <Dropdown overlay={overlay}>
                <a href="#">今日菜单(有动画)</a>
                <DownIcon />
              </Dropdown>
            </Col>
            <Col span={5}>
              <Dropdown overlay={overlay} animate={false}>
                <a href="#">今日菜单(无动画)</a>
                <DownIcon />
              </Dropdown>
            </Col>
            <Col span={5}>
              <Dropdown overlay={overlay}>
                <Button>
                  今日菜单 <DownIcon />
                </Button>
              </Dropdown>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <h2>状态改变回调</h2>
              <Dropdown overlay={overlay} onVisibleChange={(value) => console.log(value)}>
                <Button>
                  今日菜单 <DownIcon />
                </Button>
              </Dropdown>
            </Col>

            <Col span={5} offset={2}>
              <h2>禁用</h2>
              <Dropdown overlay={overlay} disabled>
                <Button>
                  今日菜单 <DownIcon />
                </Button>
              </Dropdown>
            </Col>
          </Row>

          <h2>触发方式</h2>
          <Row>
            <Col span={8}>
              <Dropdown overlay={overlay} trigger="click">
                <Button type="primary">
                  click 触发 <DownIcon />
                </Button>
              </Dropdown>
            </Col>

            <Col span={5} offset={2}>
              <Dropdown overlay={overlay} trigger="hover">
                <Button type="primary">
                  hover 触发 <DownIcon />
                </Button>
              </Dropdown>
            </Col>
          </Row>

          <h2>内置动画</h2>
          <Row>
            <Col span={4}>
              <Dropdown overlay={overlay} animate="slideUp">
                <Button type="primary">
                  sliderUp
							</Button>
              </Dropdown>
            </Col>

            <Col span={4}>
              <Dropdown overlay={overlay} animate="slideDown">
                <Button type="primary">
                  sliderDown
							</Button>
              </Dropdown>
            </Col>
            <Col span={4}>
              <Dropdown overlay={overlay} animate="slideRight">
                <Button type="primary">
                  slideRight
							</Button>
              </Dropdown>
            </Col>
            <Col span={4}>
              <Dropdown overlay={overlay} animate="slideLeft">
                <Button type="primary">
                  sliderLeft
							</Button>
              </Dropdown>
            </Col>
            <Col span={4}>
              <Dropdown overlay={overlay} animate={false}>
                <Button type="primary">
                  无动画
							</Button>
              </Dropdown>
            </Col>
          </Row>
        </div>
      ))
  )
  .add(
    'Affix 固钉',
    withInfo()(() => (
      <div style={{ minHeight: 1000 }}>
        <h2>基本使用</h2>
        <Affix>
          <Button type="primary">top</Button>
        </Affix>

        <h2>设置偏移量</h2>
        <Affix offsetTop={120}>
          <Button type="primary">距离顶部20px触发</Button>
        </Affix>

        <h2>状态改变回调</h2>
        <Affix style={{ marginLeft: 200 }} offsetTop={100} onChange={(fixed) => console.log('change:', fixed)}>
          <Button type="primary">状态改变回调</Button>
        </Affix>
      </div>
    ))
  )
  .add(
    'Steps 步骤条',
    withInfo()(() => (
      <div>
        <h2>基本使用</h2>
        // TODO: 
      </div>
    ))
  )
