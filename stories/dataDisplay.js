import moment from "moment";
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
import CityPicker from "../components/city-picker";
import Table from "../components/table";
import CountDown from "../components/count-down";
import { SuccessIcon, InfoIcon, ErrorIcon, UserIcon } from "../components/icon";
import Collapse from "../components/collapse";

import "../components/tooltip/styles.less";
import "../components/button/styles.less";
import "../components/tabs/styles.less";
import "../components/timeline/styles.less";
import "../components/tag/styles.less";
import "../components/city-picker/styles.less";
import "../components/avatar/styles.less";
import "../components/collapse/styles.less";
import "../components/calendar/styles.less";
import "../components/popover/styles.less";
import "../components/popconfirm/styles.less";
import "../components/card/styles.less";
import "../components/empty/styles.less";
import "../components/badge/styles.less";
import "../components/table/styles.less";
import "../components/count-down/styles.less";
import "./styles/dataDisplay.less";
import "./styles/tag.less";
import { Calendar, Popconfirm, Empty, Divider, Input } from "../components";
import Popover from "../components/popover";
import PopoverPage from "./pages/popover";
import Card from "../components/card";
import Avatar from "../components/avatar";
import Message from "../components/message";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "名字",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "数量",
    dataIndex: "count",
    key: "count"
  },
  {
    title: "操作",
    dataIndex: "setting",
    key: "setting",
    render: (value, data, index) => (
      <>
        <a onClick={() => Message.info("编辑")}>编辑</a>
        <Divider type="vertical" />
        <Popconfirm
          title="确认删除吗?"
          onOk={() => Message.error(`ID: ${data.id}`)}
        >
          <a>删除</a>
        </Popconfirm>
      </>
    )
  }
];

const dataSource = [
  {
    name: "黄瓜",
    count: 1,
    id: 1
  },
  {
    name: "西瓜",
    count: 344,
    id: 2
  },
  {
    name: "香蕉",
    count: 199,
    id: 3
  }
];
const emptyCityList = [
  {
    group: "热门",
    resources: []
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
    resources: []
  },
  {
    group: "PQRST",
    resources: []
  },
  {
    group: "UVWXYZ",
    resources: []
  }
];
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
  .add("Tooltip 文字提示", () => (
    <div>
      <h2>基本使用</h2>

      <Tooltip title="黄瓜ui">
        <span> 鼠标放上来 </span>
      </Tooltip>

      <h2>配合按钮使用</h2>
      <Tooltip title="黄瓜ui">
        <Button type="primary"> 鼠标放上来 </Button>
      </Tooltip>

      <h2>两种触发方式</h2>
      <Tooltip title="黄瓜ui" trigger="hover">
        <Button type="primary">hover</Button>
      </Tooltip>
      <Tooltip title="黄瓜ui" trigger="click" style={{ margin: "0 10px" }}>
        <Button type="primary">click</Button>
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

      <h2>默认显示</h2>
      <Tooltip title="黄瓜ui" visible={true} position="right">
        鼠标放上来
      </Tooltip>

      <h2>隐藏箭头</h2>
      <Tooltip title="黄瓜ui" hiddenArrow>
        <Button>hiddenArrow</Button>
      </Tooltip>

      <h2>改变回调</h2>
      <Tooltip
        title="黄瓜ui"
        style={{ marginRight: 10 }}
        onVisibleChange={visible => console.log("visible", visible)}
      >
        <Button type="primary" hollow>
          鼠标放上来
        </Button>
      </Tooltip>
      <Tooltip
        title="黄瓜ui"
        trigger="click"
        onVisibleChange={visible => console.log("visible", visible)}
      >
        <Button type="primary" hollow>
          点击
        </Button>
      </Tooltip>

      <h2>两种主题</h2>
      <Tooltip title="light" theme="light" style={{ marginRight: 10 }}>
        <Button>Light</Button>
      </Tooltip>
      <Tooltip title="dark" theme="dark">
        <Button>Dark</Button>
      </Tooltip>
    </div>
  ))
  .add("Popover 气泡卡片", () => (
    <div>
      <h2>基本使用</h2>

      <Popover title="黄瓜ui" content="即插即用" position="right">
        <span> 鼠标放上来 </span>
      </Popover>

      <h2>配合按钮使用</h2>
      <Popover
        title="黄瓜ui"
        content={
          <Button size="small" type="primary" hollow block>
            任意内容
          </Button>
        }
      >
        <Button type="primary"> 鼠标放上来 </Button>
      </Popover>

      <h2>两种触发方式</h2>
      <Popover
        title="黄瓜ui"
        content="即插即用"
        position="bottom"
        trigger="hover"
      >
        <Button type="primary"> hover </Button>
      </Popover>
      <Popover
        title="黄瓜ui"
        content="即插即用"
        position="top"
        trigger="click"
        style={{ margin: "0 10px" }}
      >
        <Button type="primary"> click </Button>
      </Popover>

      <h2>四个方向</h2>
      <Popover title="黄瓜ui" position="top" content="即插即用的 React UI 库">
        <Button>上</Button>
      </Popover>
      <Popover
        title="黄瓜ui"
        position="bottom"
        style={{ margin: "0 10px" }}
        content="即插即用的 React UI 库"
      >
        <Button>下</Button>
      </Popover>
      <Popover
        title="黄瓜ui"
        position="left"
        style={{ margin: "0 10px" }}
        content="即插即用的 React UI 库"
      >
        <Button>左</Button>
      </Popover>
      <Popover title="黄瓜ui" position="right" content="即插即用的 React UI 库">
        <Button>右</Button>
      </Popover>

      <h2>改变回调</h2>
      <Popover
        title="黄瓜ui"
        position="right"
        content="即插即用的 React UI 库"
        onVisibleChange={visible => console.log("visible", visible)}
      >
        <Button type="primary" hollow>
          hover
        </Button>
      </Popover>
      <Popover
        title="黄瓜ui"
        position="left"
        style={{ margin: "0 10px" }}
        position="top"
        trigger="click"
        content="即插即用的 React UI 库"
        onVisibleChange={visible => console.log("visible", visible)}
      >
        <Button type="primary" hollow>
          click
        </Button>
      </Popover>

      <h2>默认显示</h2>
      <Popover
        title="黄瓜ui"
        content="即插即用"
        visible={true}
        position="right"
      >
        鼠标放上来
      </Popover>

      <h2>隐藏箭头</h2>
      <Popover title="黄瓜ui" content="即插即用" position="right" hiddenArrow>
        <span> 鼠标放上来 </span>
      </Popover>

      <h2>手动控制关闭</h2>
      <PopoverPage />
    </div>
  ))
  .add("Popconfirm 气泡确认框", () => (
    <div>
      <h2>基本使用</h2>
      <Popconfirm
        title="确认领取可口美味的黄瓜吗?"
        position="right"
        onOk={() => console.log("ok")}
        onCancel={() => console.log("cancel")}
      >
        <Button type="primary"> 点击领取 🥒 </Button>
      </Popconfirm>

      <h2>自定义文案</h2>
      <Popconfirm
        title="确认领取可口美味的黄瓜吗?"
        position="top"
        okText="不想要"
        cancelText="再想想"
      >
        <Button type="primary"> 点击领取 🥒 </Button>
      </Popconfirm>

      <h2>四个方向</h2>
      <Popconfirm title="确认领取可口美味的黄瓜吗?" position="top">
        <Button type="primary">上</Button>
      </Popconfirm>
      <Popconfirm
        title="确认领取可口美味的黄瓜吗?"
        position="bottom"
        style={{ marginLeft: "10px" }}
      >
        <Button type="primary">下</Button>
      </Popconfirm>
      <Popconfirm
        title="确认领取可口美味的黄瓜吗?"
        position="left"
        style={{ margin: "0 10px" }}
      >
        <Button type="primary">左</Button>
      </Popconfirm>
      <Popconfirm title="确认领取可口美味的黄瓜吗?" position="right">
        <Button type="primary">右</Button>
      </Popconfirm>

      <h2>两种触发方式</h2>
      <Popconfirm
        title="确认领取可口美味的黄瓜吗?"
        position="bottom"
        trigger="hover"
      >
        <Button type="primary" hollow>
          {" "}
          hover{" "}
        </Button>
      </Popconfirm>
      <Popconfirm
        title="确认领取可口美味的黄瓜吗?"
        position="top"
        trigger="click"
        style={{ margin: "0 10px" }}
      >
        <Button type="primary" hollow>
          {" "}
          click{" "}
        </Button>
      </Popconfirm>

      <h2>自定义图标</h2>
      <Popconfirm
        title="确认领取可口美味的黄瓜吗?"
        position="top"
        icon={<SuccessIcon />}
      >
        <Button type="primary"> 点击领取 🥒 </Button>
      </Popconfirm>

      <h2>自定义按钮属性</h2>
      <Popconfirm
        title="确认领取可口美味的黄瓜吗?"
        position="top"
        okButtonProps={{ loading: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <Button type="primary"> 点击领取 🥒 </Button>
      </Popconfirm>

      <h2>改变回调</h2>
      <Popconfirm
        title="确认领取可口美味的黄瓜吗?"
        position="top"
        onVisibleChange={visible => console.log("visible", visible)}
      >
        <Button type="primary"> 点击领取 🥒 </Button>
      </Popconfirm>

      <h2>隐藏箭头</h2>
      <Popconfirm title="确认领取可口美味的黄瓜吗?" position="top" hiddenArrow>
        <Button type="primary"> 点击领取 🥒 </Button>
      </Popconfirm>
    </div>
  ))
  .add("Tabs 选项卡", () => (
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
  .add("Badge 徽标数", () => (
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
  .add("Timeline 时间轴", () => (
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
  .add("Tag 标签", () => (
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

      <h2>圆形</h2>
      <Tag circle>特</Tag>
      <Tag type="primary" circle>
        皮
      </Tag>
      <Tag type="error" circle>
        惨
      </Tag>
      <Tag type="info" circle>
        李
      </Tag>
      <Tag type="warning" circle>
        哈
      </Tag>
      <Tag type="info" hollow circle>
        逗
      </Tag>
      <Tag type="primary" hollow circle>
        逗
      </Tag>
      <Tag type="error" hollow circle>
        逗
      </Tag>
      <Tag type="warning" hollow circle>
        逗
      </Tag>
      <Tag type="primary" disabled circle>
        倍
      </Tag>
      <Tag type="primary" size="small" circle>
        小
      </Tag>
      <Tag type="primary" circle>
        中
      </Tag>
      <Tag type="primary" size="large" circle>
        大
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
  .add("Collapse 折叠面板", () => (
    <div>
      <h2>基本使用</h2>
      <Collapse>
        <Collapse.Item title="黄瓜ui">内容1xxxxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="即插即用">内容2xxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="标题3">内容3</Collapse.Item>
      </Collapse>

      <h2>禁用</h2>
      <Collapse>
        <Collapse.Item title="黄瓜ui" disabled>
          内容1xxxxxxxxxxxxx
        </Collapse.Item>
        <Collapse.Item title="即插即用">内容2xxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="标题3">内容3</Collapse.Item>
      </Collapse>

      <Collapse disabled>
        <Collapse.Item title="全部禁用">内容1xxxxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="全部禁用">内容2xxxxxxxxxxx</Collapse.Item>
      </Collapse>

      <h2>默认展开</h2>
      <Collapse defaultActiveKey={[0, 1]}>
        <Collapse.Item title="黄瓜ui">内容1xxxxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="即插即用">内容2xxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="标题3">内容3</Collapse.Item>
      </Collapse>

      <h2>箭头显示在右边</h2>
      <Collapse rightArrow>
        <Collapse.Item title="黄瓜ui">内容1xxxxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="即插即用">内容2xxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="标题3">内容3</Collapse.Item>
      </Collapse>

      <h2>隐藏箭头</h2>
      <Collapse>
        <Collapse.Item title="黄瓜ui" hideArrow>
          内容1xxxxxxxxxxxxx
        </Collapse.Item>
        <Collapse.Item title="即插即用">内容2xxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="标题3">内容3</Collapse.Item>
      </Collapse>

      <Collapse hideArrow>
        <Collapse.Item title="全部隐藏">内容1xxxxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="全部隐藏">内容2xxxxxxxxxxx</Collapse.Item>
      </Collapse>

      <h2>手风琴</h2>
      <Collapse accordion>
        <Collapse.Item title="黄瓜ui">内容1xxxxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="即插即用">内容2xxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="标题3">内容3</Collapse.Item>
      </Collapse>

      <h2>自定义图标</h2>
      <Collapse icon={<SuccessIcon />}>
        <Collapse.Item title="黄瓜ui">内容1xxxxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="即插即用">内容2xxxxxxxxxxx</Collapse.Item>
      </Collapse>

      <Collapse>
        <Collapse.Item title="黄瓜ui" icon={<SuccessIcon />}>
          内容1xxxxxxxxxxxxx
        </Collapse.Item>
        <Collapse.Item title="即插即用" icon={<ErrorIcon />}>
          内容2xxxxxxxxxxx
        </Collapse.Item>
      </Collapse>

      <h2>回调函数</h2>
      <Collapse onChange={value => console.log("change:", value)}>
        <Collapse.Item title="黄瓜ui">内容1xxxxxxxxxxxxx</Collapse.Item>
        <Collapse.Item title="即插即用">内容2xxxxxxxxxxx</Collapse.Item>
      </Collapse>
    </div>
  ))
  .add(
    "CityPicker 城市选择框",
    () => (
      <div>
        <h2>基本使用</h2>
        <CityPicker
          onCityChange={city => console.log("selected city:", city)}
          onCityGroupChange={(cityGroup, index) =>
            console.log("selected cityGroup:", cityGroup, index)
          }
          cityList={cityList}
        />

        <h2>默认选中分组</h2>
        <CityPicker defaultActiveGroup={1} cityList={cityList} />

        <h2>默认选中城市</h2>
        <CityPicker
          defaultActiveGroup={1}
          cityList={cityList}
          defaultCityName="成都"
        />

        <h2>加载中</h2>
        <CityPicker cityList={cityList} loading />

        <h2>自定义加载文案</h2>
        <CityPicker cityList={cityList} loading tip="拼命加载中..." />

        <h2>禁用</h2>
        <CityPicker disabled cityList={cityList} />

        <h2>禁用分组</h2>
        <CityPicker cityList={cityList} disabledGroups={[1, 2, 3]} />

        <h2>自定义占位符</h2>
        <CityPicker placeholder="请选择城市" cityList={cityList} />

        <h2>面板改变回调</h2>
        <CityPicker
          placeholder="请选择城市"
          cityList={cityList}
          onPanelVisibleChange={visible => console.log("visible:", visible)}
        />

        <h2>三种大小</h2>
        <Row style={{ marginTop: "30px" }}>
          <CityPicker cityList={cityList} placeholder="small" size="small" />
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <CityPicker cityList={cityList} placeholder="default" />
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <CityPicker cityList={cityList} placeholder="large" size="large" />
        </Row>

        <h2>可以清除</h2>
        <CityPicker allowClear cityList={cityList} />

        <h2>空数据</h2>
        <CityPicker cityList={[]} style={{ marginRight: 10 }} />
        <CityPicker cityList={emptyCityList} />

        <h2>在任意容器中单独使用 picker</h2>
        <CityPicker.CityPickerCore cityList={cityList} />
      </div>
    ),
    {
      info: {
        text: `
        cityList 数据结构
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
        `
      }
    }
  )
  .add("Calendar 日历", () => (
    <div>
      <h2>基本使用</h2>
      <Calendar
        onChange={(currentDate, date) =>
          console.log(currentDate, date.format("YYYY-MM-DD"))
        }
        onMonthChange={date => console.log(date.format("YYYY-MM-DD"))}
      />

      <h2>自定义渲染内容</h2>
      <Calendar
        dateCellRender={(currentDate, date) => {
          if (currentDate <= 5) {
            return "唱歌";
          }
          return (
            <Badge count={20} dot>
              购物
            </Badge>
          );
        }}
      />

      <h2>默认日期</h2>
      <Calendar value={moment("1996-08-25")} />

      <h2>加载中</h2>
      <Calendar loading={true} tip="加载中..." />

      <h2>mini 模式</h2>
      <Calendar miniMode />
    </div>
  ))
  .add("Card 卡片", () => (
    <div>
      <h2>基本使用</h2>
      <Card title="黄瓜 ui" extra={<Button href="#">更多</Button>}>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <Card title="黄瓜 ui">
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <h2>超长显示</h2>
      <Card title={"我要换行".repeat(7)} extra={<Button href="#">更多</Button>}>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <Card
        title={"我不换行".repeat(7)}
        extra={<Button href="#">更多</Button>}
        titleOverflowHidden={false}
      >
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <h2>无阴影</h2>
      <Card
        title="黄瓜 ui"
        extra={<Button href="#">更多</Button>}
        shadow={false}
      >
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <h2>鼠标悬浮显示阴影</h2>
      <Card title="黄瓜 ui" showShadowWhenHover>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <h2>无标题</h2>
      <Card extra={<Button href="#">更多</Button>}>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
      <Card>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <h2>配合图片使用</h2>

      <Card
        title="黄瓜 ui"
        showShadowWhenHover
        style={{ width: 300 }}
        cover="https://dummyimage.com/300x200/396/fff"
      >
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <h2>加载中</h2>

      <Card title="黄瓜 ui" loading tip="加载中">
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <h2>底部的扩展 action</h2>
      <Card
        title="Action"
        actions={[
          <SuccessIcon key="1" />,
          <InfoIcon key="2" />,
          <ErrorIcon key="3" />
        ]}
      >
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>

      <h2>组合排列</h2>
      <Row>
        <Col span={8}>
          <Card
            title="黄瓜 ui"
            extra={<Button href="#">更多</Button>}
            style={{ width: 300 }}
          >
            <div> 内容 1</div>
            <div> 内容 1</div>
            <div> 内容 1</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="黄瓜 ui"
            extra={<Button href="#">更多</Button>}
            style={{ width: 300 }}
          >
            <div> 内容 1</div>
            <div> 内容 1</div>
            <div> 内容 1</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="黄瓜 ui"
            extra={<Button href="#">更多</Button>}
            style={{ width: 300 }}
          >
            <div> 内容 1</div>
            <div> 内容 1</div>
            <div> 内容 1</div>
          </Card>
        </Col>
      </Row>
    </div>
  ))
  .add("Empty 空状态", () => (
    <div className="empty-example">
      <h2>基本使用</h2>
      <Empty />

      <h2>自定义高度</h2>
      <Empty height={120} />

      <h2>自定义图标和描述</h2>
      <Empty icon={<ErrorIcon />} description="这里空空如也" />

      <h2>自定义附属内容</h2>
      <Empty icon={"🥒"} description="这里没有黄瓜">
        <Button type="primary">点击购买</Button>
      </Empty>
    </div>
  ))
  .add("Avatar 头像", () => (
    <div className="cuke-avatar-example">
      <h2>基本使用</h2>
      <div>
        <Avatar icon={<UserIcon />} />
        <Avatar
          icon={<UserIcon />}
          style={{ backgroundColor: "#31c27c", color: "#fff" }}
        />
      </div>
      <h2>两种形状、三种基本大小</h2>
      <div>
        <Avatar icon={<UserIcon />} size="large" />
        <Avatar icon={<UserIcon />} />
        <Avatar icon={<UserIcon />} size="small" />
        <Avatar icon={<UserIcon />} shape="square" size="large" />
        <Avatar icon={<UserIcon />} shape="square" />
        <Avatar icon={<UserIcon />} shape="square" size="small" />
      </div>
      <h2>三种类型：图片、icon、文字</h2>
      <Avatar src="https://cdn.lijinke.cn/1387583682387727.jpg" />
      <Avatar icon={<UserIcon />} />
      <Avatar text="黄瓜ui" />
      <h2>带徽标的头像</h2>
      <Badge count={1}>
        <Avatar icon={<UserIcon />} shape="square" />
      </Badge>
      <Badge count={1} dot>
        <Avatar icon={<UserIcon />} shape="square" />
      </Badge>
      <Badge count={999}>
        <Avatar icon={<UserIcon />} />
      </Badge>
    </div>
  ))
  .add("Table 表格", () => (
    <div>
      <h2>基本使用</h2>

      <Table columns={columns} dataSource={dataSource} />

      <h2>自定义 render</h2>

      <Table
        columns={[
          {
            title: "ID",
            dataIndex: "id",
            key: "id"
          },
          {
            title: "名字",
            dataIndex: "name",
            key: "name",
            render: name => <Input defaultValue={name} style={{ width: 100 }} />
          },
          {
            title: "数量",
            dataIndex: "count",
            key: "count",
            render: count => (
              <Tag type="info" circle>
                {count}
              </Tag>
            )
          },
          {
            title: "操作",
            dataIndex: "setting",
            key: "setting",
            render: () => (
              <Button type="error" size="small">
                删除
              </Button>
            )
          }
        ]}
        dataSource={dataSource}
      />

      <h2>分页</h2>
      <Table
        columns={columns}
        pagination={{
          pageIndex: 1,
          pageSize: 5,
          showTotal: total => `共${total}条数据`,
          onChange: (page, pageSize) => console.log(page, pageSize)
        }}
        dataSource={new Array(30).fill().map((_, i) => ({
          name: `黄瓜${i + 1}`,
          count: i + 1,
          id: i + 1,
          key: i
        }))}
      />

      <h2>加载中</h2>

      <Table columns={columns} dataSource={dataSource} loading />

      <h2>可选择</h2>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          onChange(selectedRowKeys, selectedRows) {
            console.log("selectedRowKeys: ", selectedRowKeys);
            console.log("selectedRows: ", selectedRows);
          }
          // getCheckboxProps(record) {
          //   return {
          //     disabled: record.name === "黄瓜1"
          //   };
          // }
        }}
        pagination={{
          pageIndex: 1,
          pageSize: 5
        }}
        dataSource={new Array(30).fill().map((_, i) => ({
          name: `黄瓜${i}`,
          count: i,
          id: i,
          key: i
        }))}
      />

      <h2>空状态</h2>
      <Table columns={columns} dataSource={[]} />

      <h2>显示边框</h2>
      <Table columns={columns} dataSource={dataSource} bordered />

      <h2>斑马纹</h2>
      <Table columns={columns} dataSource={dataSource} stripe />

      <h2>不显示表头</h2>
      <Table columns={columns} dataSource={dataSource} showHeader={false} />
    </div>
  ))
  .add("CountDown 倒计时", () => (
    <div>
      <h2>基本使用</h2>
      <CountDown />

      <h2>自定义内容</h2>
      <CountDown>
        {
          (time, disabled) => (
            <Button disabled={disabled}>{disabled ? `${time} s 后重获` : '点击获取验证码'}</Button>
          )
        }
      </CountDown>

      <div style={{height: 20}}/>

      <CountDown autoStart>
        {
          (time) => (
            <Tag circle type="primary">{time}</Tag>
          )
        }
      </CountDown>

      <div style={{height: 20}}/>

      <CountDown autoStart>
        {
          (time) => (
            <Badge count={time}>
            <Button>
              购物车数量
            </Button>
            </Badge>
          )
        }
      </CountDown>



      <h2>自定义时长</h2>
      <CountDown defaultCountDown={20} />

      <h2>2s 改变一次</h2>
      <CountDown interval={2} />

      <h2>配合Tooltip 使用</h2>
      <CountDown autoStart>
        {
          (time,disabled) => (
            <Tooltip title={`${time} s 后重获`} visible position="right">
              <Button disabled={disabled}>获取验证码</Button>
            </Tooltip>
          )
        }
      </CountDown>

      <h2>回调</h2>
      <CountDown
        defaultCountDown={10}
        onStart={(time)=> console.log('onStart',time)}
        onEnd={(time)=> console.log('onEnd', time)}
        onChange={(time)=> console.log('onChange', time)}
      />

      <h2>时间倒计时</h2>
      <CountDown
        defaultCountDown={1559100698744}
        type="date"
      />
      <div style={{height: 20}}/>
      <CountDown
        defaultCountDown={"2029/5/30 18:45:06"}
        type="date"
      />

      <h2>自定义时间倒计时格式</h2>
      <CountDown
        defaultCountDown={1559100698744}
        type="date"
        autoStart
      >
       {
          (time) => (
            <div style={{color: '#444'}}>
            {time.d} <Tag type="primary">天</Tag>
            {time.h} <Tag type="primary">时</Tag>
            {time.m} <Tag type="primary">分</Tag>
            {time.s} <Tag type="primary">秒</Tag>
            </div>
          )
        }
      </CountDown>
    </div>
  ))
