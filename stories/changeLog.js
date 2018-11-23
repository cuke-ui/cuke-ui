import React from "react"
import Timeline from "../components/timeline";
import ReactMarkDown from "react-markdown"
import "./styles/changeLog.less"


const ChangeLog = () => (
  <Timeline>
    <Timeline.Item type="loading">
      <h2><a>v1.0.0</a></h2>
      <ul>
        <li>开发中</li>
        <li>完成剩余未完成组件</li>
        <li>修复已知 bug</li>
        <li>计划年底发布</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.34</a></h2>
      <ul>
        <li> 修复 Modal.xx() 关闭时无动画的问题 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.32 - v0.0.33</a></h2>
      <ul>
        <li> 优化 Collapse 过渡效果 </li>
        <li> 修复 Collapse 手风琴模式 点击 当前展开的面板后 再次点击 不能收回</li>
        <li> Collapse 增加 rightArrow 箭头在右边显示</li>
        <li> Collapse 增加 icon 支持自定义图标 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.31</a></h2>
      <ul>
        <li> 调整 主色调 </li>
        <li> Steps 组件增加 content 模式 </li>
        <li> 发布 npm 时 移除 单元测试 </li>
        <li> CityPicker 增加 loading 属性 </li>
        <li> 修改 Modal 和 Message 的动画弧度, 让其看起来更柔和 </li>
        <li> 升级 storybook 版本 </li>
        <li> 修复 Breadcrumb 为 链接时  颜色不对</li>
        <li> 修复 Notification 组件 点击 关闭图标 会触发 onClick 的 问题</li>
        <li> Notification 组件 新增 四个方向 </li>
        <li> Tag 组件 增加 circle 属性</li>
        <li> Tag 组件 增加 删除动画 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.30</a></h2>
      <ul>
        <li> 优化 Button 组件 样式 </li>
        <li> 新增 Steps 组件 </li>
        <li> 修复 Pagination 组件 onChange 会触发两次的bug </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.29</a></h2>
      <ul>
        <li> Drawer 组件 增加 footer 属性 </li>
        <li> Button 组件 增加 circle 圆形按钮属性 </li>
        <li> Button 组件增加阴影 </li>
        <li> 修改全局阴影为 0 4px 22px 0 rgba(15, 35, 95, 0.12)</li>
        <li> 全局 loading 时间 修改为 1s => 1.5s </li>
        <li> 修复 Button 组件 link 模式下 disabled 无效</li>
        <li> 修复 NumberInput value 值 string 警告</li>
        <li> NumberInput stepper 模式 新增 disabled</li>
        <li> 修复 WordPad 生命周期触发两次的问题</li>
        <li> 修复 Tabs 非卡片模式 active 的样式问题 和 动画效果</li>
        <li> DatePicker 日历样式美化 更好看了 </li>
        <li> DatePicker loading 效果 使用 Spin 组件 </li>
        <li> DatePicker 增加 showClear 选项 支持清除 </li>
        <li> 修复 Collapse 圆角溢出 问题</li>
        <li> 修复 CityPicker 没有圆角的问题</li>
        <li> 修复 BackTop 组件 第一次会触发动画的 bug </li>
        <li> 修复 BackTop 组件 onClick 事件 会触发两次的 bug </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.27 - v0.0.28</a></h2>
      <ul>
        <li> 修复 Modal.prompt() 获取不到 value 的问题</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.26</a></h2>
      <ul>
        <li> 修复 CityPicker classNames 样式被覆盖的问题</li>
        <li> 完善单元测试 提升覆盖率 </li>
        <li> 修复 Message 组件 偶尔卸载失败的问题</li>
        <li> 文档增加 WordPad 的 清除示例 </li>
        <li> 去除 所有组件多余的 onChange 事件</li>
        <li> 修复 Modal 组件  content 为  Input 的 bug</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.25</a></h2>
      <ul>
        <li> 新增  NumberInput 组件 </li>
        <li> Input 组件 增加 addonClassName 属性</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.24</a></h2>
      <ul>
        <li> 调整 DatePicker 组件 宽高 </li>
        <li> 修改 Notification 组件 的弹出行为 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.23</a></h2>
      <ul>
        <li> Modal 组件 footer 属性 支持  React.Fragment </li>
        <li> 增加 Modal.prompt() api </li>
        <li> Modal.xx() 新增  iconType 属性 自定义图标类型 </li>
        <li> 增加 TurnTable 示例</li>
        <li> 修改 手机端响应式断点为576px </li>
        <li> 修复 Modal 组件 在手机端时 没居中 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.22</a></h2>
      <ul>
        <li> Modal 组件 增加 okButtonProps 和 cancelButtonProps 属性</li>
        <li> Modal 组件 增加 confirm, info, success, error, warning, loading 静态 方法</li>
        <li> Modal, Message, Notification 统一 增加 xx.destroy() 的引用</li>
        <li> 优化项目代码细节 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.21</a></h2>
      <ul>
        <li> 组件生命周期 componentWillReceiveProps => getDerivedStateFromProps</li>
        <li> 修复 Radio onChange 触发两次</li>
        <li> 修复 Checkbox onChange 触发两次</li>
        <li> 优化 webpack moment 打包体积</li>
        <li> 修复 Notification 组件 淡出动画异常</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.20</a></h2>
      <ul>
        <li> 新增 Notification 组件</li>
        <li> 完善 文档</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.19</a></h2>
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
      <h2><a>v0.0.18</a></h2>
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
      <h2><a>v0.0.17</a></h2>
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
      <h2><a>v0.0.2 - v0.0.16</a></h2>
      <ul>
        <li>下班有空更新迭代</li>
        <li>修复发布到 npm 遇到的各种问题</li>
        <li>增加 webpack umd 和 babel 两种打包方式</li>
        <li>增加 各种组件的 demo 演示</li>
        <li>优化已有组件</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2><a>v0.0.1</a></h2>
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