import React from "react"
import Timeline from "../components/timeline";
import ReactMarkDown from "react-markdown"


const ChangeLog = () => (
  <Timeline type="info">
    <Timeline.Item type="loading">
      <h3><a>v1.0.0</a></h3>
      <ul>
        <li>开发中</li>
        <li>完成剩余未完成组件</li>
        <li>修复已知 bug</li>
        <li>计划年底发布</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h3><a>v0.0.20</a></h3>
      <ul>
        <li> 新增 Notification 组件</li>
        <li> 完善 文档</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h3><a>v0.0.19</a></h3>
      <ul>
        <li> DatePicker 组件 切换月份 无反应</li>
        <li> Select 组件 disabled 状态时点击 panel 可以关闭</li>
        <li> babelrc format </li>
        <li> DataPicker 增加 scroll-into-view-if-needed </li>
        <li> deploy moment </li>
        <li> 优化 storybook </li>
        <li> 优化组件通用样式 </li>
        <li> 修复 Message 组件卸载时报错</li>
        <li> Drawer 组件增加 height 参数</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h3><a>v0.0.18</a></h3>
      <ul>
        <li>优化 DropDown, Select, CityPicker, DatePicker 的体验</li>
        <li>
          <ReactMarkDown source={
            `格式化代码 [#f353c23](https://github.com/cuke-ui/cuke-ui/pull/2/commits/f353c23bc79440c03b0897fa1bb193932e3a2180)([Caraws](https://github.com/Caraws))`
          }
          />
        </li>
        <li>优化示例</li>
        <li>CityPicker 增加 panelVisibleChange 方法</li>
        <li>Modal 和 Drawer 组件 target 方法 替换成 getTarget</li>
        <li>增加 Modal 组件 自定义 footer 的示例</li>
        <li>增加 Select, CityPicker, DatePicker 的关闭动画</li>
        <li>DataPicker 增加 loading 属性</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h3><a>v0.0.17</a></h3>
      <ul>
        <li>增加各种组件,完善列表</li>
        <li>修复超多 bug</li>
        <li>完善文档</li>
        <li>升级到webpack4, babel7</li>
        <li>升级到 storybook4</li>
        <li>优化打包流程</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h3><a>v0.0.2 - v0.0.16</a></h3>
      <ul>
        <li>下班有空更新迭代</li>
        <li>修复发布到 npm 遇到的各种问题</li>
        <li>增加 webpack umd 和 babel 两种打包方式</li>
        <li>增加 各种组件的 demo 演示</li>
        <li>优化已有组件</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h3><a>v0.0.1</a></h3>
      <ul>
        <li>年底的一个目标,做一个组件库</li>
        <li>搭建项目结构</li>
        <li>添加 storybook</li>
        <li>集成之前写好的组件</li>
      </ul>
    </Timeline.Item>
  </Timeline>
)

export default ChangeLog