import React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip from "../components/tooltip";
import Button from "../components/button";
import Tabs from "../components/tabs";
import Badge from "../components/badge";
import Row from "../components/row";
import Col from "../components/col";
import Timeline from "../components/timeline";
import Tag from "../components/tag";
import CityPicker from "../components/cityPicker";
import { SuccessIcon, InfoIcon } from "../components/icon";
import { withInfo } from "@storybook/addon-info";
import Collapse from "../components/collapse";

import "../components/tooltip/styles.less";
import "../components/button/styles.less";
import "../components/tabs/styles.less";
import "../components/timeline/styles.less";
import "../components/tag/styles.less";
import "../components/cityPicker/styles.less";
import "../components/collapse/styles.less";
import "./styles/dataDisplay.less";
import "./styles/tag.less";

const cityList = [
	{
		group: "热门",
		resources: [
			{
				id: 1,
				name: "成都"
			}
		]
	},
	{
		group: "ABCDE",
		resources: [
			{
				id: 1,
				name: "成都"
			},
			{
				id: 2,
				name: "资阳"
			}
		]
	},
	{
		group: "FGHIJ",
		resources: [
			{
				id: 3,
				name: "上海"
			},
			{
				id: 4,
				name: "乐至"
			}
		]
	},
	{
		group: "KLMNO",
		resources: [
			{
				id: 5,
				name: "自贡"
			},
			{
				id: 6,
				name: "北京"
			},
			{
				id: 7,
				name: "香港"
			},
			{
				id: 8,
				name: "南京"
			},
			{
				id: 9,
				name: "简阳"
			}
		]
	},
	{
		group: "PQRST",
		resources: [
			{
				id: 10,
				name: "广州"
			}
		]
	},
	{
		group: "UVWXYZ",
		resources: [
			{
				id: 11,
				name: "西安"
			}
		]
	}
];

storiesOf("数据展示", module)
	.add(
		"Tooltip 文字提示",
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
				<Tooltip title="黄瓜ui" position="bottom" style={{ margin: "0 10px" }}>
					<Button>下</Button>
				</Tooltip>
				<Tooltip title="黄瓜ui" position="left" style={{ margin: "0 10px" }}>
					<Button>左</Button>
				</Tooltip>
				<Tooltip title="黄瓜ui" position="right">
					<Button>右</Button>
				</Tooltip>
			</div>
		))
	)
	.add(
		"Tabs 选项卡",
		withInfo(`
	
	<Tabs defaultActiveKey="1" onChange={(key)=> console.log(key)}>
		<Tabs.TabPane tab="选项1" key="1">1</Tabs.TabPane>
		<Tabs.TabPane tab="选项2" key="2">2</Tabs.TabPane>
		<Tabs.TabPane tab="选项3" key="3">3</Tabs.TabPane>
	</Tabs>

	`)(() => (
			<div>
				<h2>基本使用</h2>

				<Tabs defaultActiveKey="1" onChange={key => console.log(key)}>
					<Tabs.TabPane tab="选项1" key="1">
						1
					</Tabs.TabPane>
					<Tabs.TabPane tab="选项2" key="2">
						2
					</Tabs.TabPane>
					<Tabs.TabPane tab="选项3" key="3">
						3
					</Tabs.TabPane>
					<Tabs.TabPane tab="第4个选项" key="4">
						动态计算宽度
					</Tabs.TabPane>
				</Tabs>

				<h2>默认选中</h2>
				<Tabs defaultActiveKey="2">
					<Tabs.TabPane tab="选项1" key="1">
						1
					</Tabs.TabPane>
					<Tabs.TabPane tab="选项2" key="2">
						2
					</Tabs.TabPane>
					<Tabs.TabPane tab="选项3" key="3">
						3
					</Tabs.TabPane>
				</Tabs>

				<h2>禁用某一项</h2>
				<Tabs activeKey="1">
					<Tabs.TabPane tab="选项1" key="1">
						1
					</Tabs.TabPane>
					<Tabs.TabPane tab="选项2" key="2" disabled>
						2
					</Tabs.TabPane>
					<Tabs.TabPane tab="选项3" key="3">
						3
					</Tabs.TabPane>
				</Tabs>

				<h2>自定义标题</h2>
				<Tabs defaultActiveKey="1">
					<Tabs.TabPane tab={<SuccessIcon />} key="1">
						已完成
					</Tabs.TabPane>
					<Tabs.TabPane tab={<InfoIcon />} key="2">
						待完成
					</Tabs.TabPane>
				</Tabs>

				<h2>扩展内容</h2>
				<Tabs defaultActiveKey="1" tabBarExtraContent={<Button>更多</Button>}>
					<Tabs.TabPane tab={<SuccessIcon />} key="1">
						已完成
					</Tabs.TabPane>
					<Tabs.TabPane tab={<InfoIcon />} key="2">
						待完成
					</Tabs.TabPane>
				</Tabs>

				<h2>卡片风格</h2>
				<Tabs defaultActiveKey="1" type="card">
					<Tabs.TabPane tab="选项1" key="1">
						1
					</Tabs.TabPane>
					<Tabs.TabPane tab="选项2" key="2">
						2
					</Tabs.TabPane>
					<Tabs.TabPane tab="选项3" key="3">
						3
					</Tabs.TabPane>
					<Tabs.TabPane tab="选项4" key="4" disabled>
						4
					</Tabs.TabPane>
				</Tabs>
			</div>
		))
	)
	.add(
		"Badge 徽标数",
		withInfo()(() => (
			<div>
				<h2>基本使用</h2>

				<Badge count={5} onClick={() => console.log("badge clicked")}>
					<Button>购物车</Button>
				</Badge>

				<Badge count={0}>
					<Button>购物车数量为0</Button>
				</Badge>

				<Badge count={0} showZero>
					<InfoIcon style={{ fontSize: 30 }} />
				</Badge>

				<h2>上限</h2>

				<Badge count={1000}>
					<SuccessIcon style={{ fontSize: 30 }} />
				</Badge>

				<Badge count={2000}>
					<SuccessIcon style={{ fontSize: 30 }} />
				</Badge>

				<Badge count={2000} overflowCount={100}>
					<Button type="info">你的购物车已经有100个魅族16了</Button>
				</Badge>

				<h2>自定义样式</h2>

				<Badge count={1000} style={{ backgroundColor: "#396" }}>
					<SuccessIcon style={{ fontSize: 30 }} />
				</Badge>

				<Badge count={1000} style={{ backgroundColor: "#f87" }}>
					<SuccessIcon style={{ fontSize: 30 }} />
				</Badge>

				<Badge count={1000} style={{ backgroundColor: "#04a" }}>
					<SuccessIcon style={{ fontSize: 30 }} />
				</Badge>

				<h2>小红点</h2>

				<Badge count={29} dot>
					<SuccessIcon style={{ fontSize: 30 }} />
				</Badge>

				<Badge count={1000} dot>
					即插即用的黄瓜 ui
				</Badge>

				<Badge count={20} dot>
					<Button>购物车</Button>
				</Badge>

				<Badge count={0} dot>
					<InfoIcon style={{ fontSize: 30 }} />
				</Badge>
			</div>
		))
	)
	.add(
		"Timeline 时间轴",
		withInfo()(() => (
			<div>
				<Row>
					<Col span={7}>
						<h2>基本使用</h2>
						<Timeline>
							<Timeline.Item>三天前 lol 中国队亚运会夺冠</Timeline.Item>
							<Timeline.Item>目前已回到国内备战s8</Timeline.Item>
							<Timeline.Item>接下来是LPL 季后赛</Timeline.Item>
							<Timeline.Item>目前 RNG, RW, IG 最后可能进入 S8</Timeline.Item>
						</Timeline>
					</Col>

					<Col span={8}>
						<h2>自定义状态</h2>
						<Timeline>
							<Timeline.Item type="info">信息</Timeline.Item>
							<Timeline.Item type="error">错误</Timeline.Item>
							<Timeline.Item type="warning">警告</Timeline.Item>
							<Timeline.Item type="disabled">禁用</Timeline.Item>
							<Timeline.Item type="loading">
								EDG.Clearlove9 正在连接...
							</Timeline.Item>
						</Timeline>
					</Col>
					<Col span={7}>
						<h2>自定义颜色</h2>
						<Timeline>
							<Timeline.Item color="#654">
								三天前 lol 中国队亚运会夺冠
							</Timeline.Item>
							<Timeline.Item color="yellow">目前已回到国内备战s8</Timeline.Item>
							<Timeline.Item color="green">接下来是LPL 季后赛</Timeline.Item>
							<Timeline.Item color="#f63">
								目前 RNG, RW, IG 最后可能进入 S8
							</Timeline.Item>
						</Timeline>
					</Col>
				</Row>
				<Row>
					<Col span={4}>
						<h2>动画1</h2>
						<Timeline animate="slideRight">
							<Timeline.Item>slideRight</Timeline.Item>
							<Timeline.Item>slideRight</Timeline.Item>
							<Timeline.Item>slideRight</Timeline.Item>
							<Timeline.Item>slideRight</Timeline.Item>
							<Timeline.Item>slideRight</Timeline.Item>
						</Timeline>
					</Col>
					<Col span={4}>
						<h2>动画2</h2>
						<Timeline animate="slideLeft">
							<Timeline.Item>slideLeft</Timeline.Item>
							<Timeline.Item>slideLeft</Timeline.Item>
							<Timeline.Item>slideLeft</Timeline.Item>
							<Timeline.Item>slideLeft</Timeline.Item>
							<Timeline.Item>slideLeft</Timeline.Item>
						</Timeline>
					</Col>
					<Col span={4}>
						<h2>动画3</h2>
						<Timeline animate="slideUp">
							<Timeline.Item>slideUp</Timeline.Item>
							<Timeline.Item>slideUp</Timeline.Item>
							<Timeline.Item>slideUp</Timeline.Item>
							<Timeline.Item>slideUp</Timeline.Item>
							<Timeline.Item>slideUp</Timeline.Item>
						</Timeline>
					</Col>
					<Col span={4}>
						<h2>动画4</h2>
						<Timeline animate="slideDown">
							<Timeline.Item>slideDown</Timeline.Item>
							<Timeline.Item>slideDown</Timeline.Item>
							<Timeline.Item>slideDown</Timeline.Item>
							<Timeline.Item>slideDown</Timeline.Item>
							<Timeline.Item>slideDown</Timeline.Item>
						</Timeline>
					</Col>
					<Col span={4}>
						<h2>自定义延时 (500ms)</h2>
						<Timeline animate="slideRight" duration={500}>
							<Timeline.Item>哈哈</Timeline.Item>
							<Timeline.Item>信息</Timeline.Item>
							<Timeline.Item>错误</Timeline.Item>
							<Timeline.Item>警告</Timeline.Item>
							<Timeline.Item>禁用</Timeline.Item>
						</Timeline>
					</Col>
				</Row>
			</div>
		))
	)
	.add(
		"Tag 标签",
		withInfo()(() => (
			<div>
				<h2>基本使用</h2>
				<Tag>黄瓜 ui</Tag>
				<Tag type="primary">黄瓜 ui</Tag>
				<Tag type="info">黄瓜 ui</Tag>
				<Tag type="success">黄瓜 ui</Tag>
				<Tag type="error">黄瓜 ui</Tag>
				<Tag type="warning">黄瓜 ui</Tag>
				<Tag disabled>黄瓜 ui</Tag>

				<h2>镂空</h2>
				<Tag>黄瓜 ui</Tag>
				<Tag type="primary" hollow>
					黄瓜 ui
				</Tag>
				<Tag type="info" hollow>
					黄瓜 ui
				</Tag>
				<Tag type="success" hollow>
					黄瓜 ui
				</Tag>
				<Tag type="error" hollow>
					黄瓜 ui
				</Tag>
				<Tag type="warning" hollow>
					黄瓜 ui
				</Tag>
				<Tag disabled hollow>
					黄瓜 ui
				</Tag>

				<h2>虚线</h2>
				<Tag dashed>黄瓜 ui</Tag>
				<Tag type="primary" hollow dashed>
					黄瓜 ui
				</Tag>
				<Tag type="info" hollow dashed>
					黄瓜 ui
				</Tag>
				<Tag type="success" hollow dashed>
					黄瓜 ui
				</Tag>
				<Tag type="error" hollow dashed>
					黄瓜 ui
				</Tag>
				<Tag type="warning" hollow dashed>
					黄瓜 ui
				</Tag>
				<Tag disabled hollow dashed>
					黄瓜 ui
				</Tag>

				<h2>可关闭</h2>
				<Tag type="primary" closable onClose={() => console.log("关闭")}>
					点击关闭
				</Tag>

				<h2>三种大小</h2>
				<Tag size="small">小 small</Tag>
				<Tag>中 default</Tag>
				<Tag size="large">大 large</Tag>

				<h2>自定义颜色</h2>
				<Tag color="#666">黄瓜 ui</Tag>
				<Tag color="pink">黄瓜 ui</Tag>
				<Tag color="#f63">黄瓜 ui</Tag>
			</div>
		))
	)
	.add(
		"Collapse 折叠面板",
		withInfo()(() => (
			<div>
				<h2>基本使用</h2>
				<Collapse>
					<Collapse.Item title="黄瓜ui">内容1xxxxxxxxxxxxx</Collapse.Item>
					<Collapse.Item title="即插即用">内容2xxxxxxxxxxx</Collapse.Item>
					<Collapse.Item title="标题3">内容3</Collapse.Item>
				</Collapse>
			</div>
		))
	)
	.add(
		"CityPicker 城市选择框",
		withInfo(`
		#### cityList 数据结构
		[
			{
				group:"热门",
				resources:[{
					id:1,
					name:'成都'
				}]
			},
			{
				group:"ABCDE",
				resources:[{
					id:2,
					name:'成都'
				}]
			}
		]
		`)(() => (
			<div>
				<h2>基本使用</h2>
				<CityPicker
					onCityChange={city => console.log("selected city:", city)}
					onCityGroupChange={(cityGroup,index) =>
						console.log("selected cityGroup:", cityGroup, index)
					}
					cityList={cityList}
				/>

				<h2>默认选中分组</h2>
				<CityPicker defaultActiveGroup={1} cityList={cityList} />

				<h2>禁用</h2>
				<CityPicker disabled cityList={cityList} />

				<h2>禁用分组</h2>
				<CityPicker cityList={cityList} disabledGroups={[1,2,3]}/>

				<h2>自定义占位符</h2>
				<CityPicker placeholder="请选择城市" cityList={cityList} />


				<h2>在任意容器中单独使用 picker</h2>
				<CityPicker.CityPickerCore cityList={cityList} />
			</div>
		))
	);
