import React from "react";
import Timeline from "../components/timeline";
import ReactMarkDown from "react-markdown";
import "./styles/changeLog.less";

const ChangeLog = () => (
  <Timeline>
    <Timeline.Item type="loading">
      <h2>
        <a>v1.3.0</a>
      </h2>
      <ul>
        <li> 优化 Button type,size 定义 @caojian123 </li>
        <li> 优化 Notification positions 定义</li>
        <li> 优化 Drawer 的 placements 定义 </li>
        <li> DatePicker 新增 position 属性, 支持 top 和 bottom 方向 </li>
        <li> 优化 DatePicker 组件 & 调整样式 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v1.2.2</a>
      </h2>
      <ul>
        <li>
          {" "}
          重构 Dropdown , 修复光标快速划过按钮范围经常出现菜单不会收缩的bug{" "}
        </li>
        <li> 修复 Button组件 虚线不显示的问题 </li>
        <li> 新增 cuke-ui 的背景介绍 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v1.2.1</a>
      </h2>
      <ul>
        <li> 修复 ToolTip, Popover, Popconfirm 边界情况异常滚动的情况 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v1.2.0</a>
      </h2>
      <ul>
        <li>
          {" "}
          新增 Card 组件 loading, cover, actions, showShadowWhenHover 属性,
          满足更多场景{" "}
        </li>
        <li> 新增 CityPicker 组件 defaultCityName cityName 属性</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v1.1.0</a>
      </h2>
      <ul>
        <li>
          {" "}
          新增 Tooltip, Popover, PopConfirm hiddenArrow 属性, 支持隐藏三角箭头{" "}
        </li>
        <li> 重构 Dropdown 和 Select 组件 </li>
        <li> 优化 CityPicker 面板 被遮挡 时 自动调整位置 </li>
        <li>
          {" "}
          新增 Select, Tooltip, Popover, PopConfirm, DropDown 的 resize 事件,
          自动调整位置{" "}
        </li>
        <li>
          {" "}
          修复 Select 组件 Option disabled 时 点击 会触发的 面板 关闭的 问题{" "}
        </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v1.0.1</a>
      </h2>
      <ul>
        <li> 优化 Button 组件 link 模式 disabled 的效果 </li>
        <li> 优化 Button 各种 type 下 disabled 的效果 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v1.0.0</a>
      </h2>
      <ul>
        <li> 修复 Radio 默认选择后 被重置的问题 </li>
        <li> 发布 正式版 !</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v1.0.0-beta.2</a>
      </h2>
      <ul>
        <li> 修复 CityPicker 选择城市后 onPanelVisibleChange 不触发的问题 </li>
        <li> 新增 Checkbox Radio size 属性 支持 large | default | small </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v1.0.0-beta.1</a>
      </h2>
      <ul>
        <li> 调整 DatePicker 样式 </li>
        <li> 修复 DatePicker 点击今天无效果的问题 </li>
        <li> 修复 DatePicker 默认值天数显示不正确的问题 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v1.0.0-beta.0</a>
      </h2>
      <ul>
        <li> 新增 Radio Button 模式 </li>
        <li> 新增 Checkbox Button 模式 </li>
        <li> 新增 Form 组件 </li>
        <li> 优化 Checkbox 样式 </li>
        <li> 修复已知 bug </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.42</a>
      </h2>
      <ul>
        <li> 新增 PopConfirm 组件 </li>
        <li> 调整 Modal.xx() 默认显示 模板, 设置 showMask = false 手动关闭 </li>
        <li> 调整 Tooltip 和 Popover light 模式下 title 无阴影 </li>
        <li> 取消 Button hollow 模式下的文字阴影 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.41</a>
      </h2>
      <ul>
        <li> 修复 Popover 组件 position left 位置不对 </li>
        <li> 新增 Tooltip trigger 属性 支持 hover 和 click 两种触发方式 </li>
        <li> 优化 Tooltip 和 Popover 的体验 </li>
        <li> 修复 ToolTip 和 Popover onPanelVisibleChange 会触发多次的问题 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.40</a>
      </h2>
      <ul>
        <li> 修复 WordPad 只能清空一次画布的问题 </li>
        <li> 优化 Calendar 的视觉效果 </li>
        <li>
          {" "}
          调整 Calendar dateCellRender 的返回值 , 现在返回 当前是哪一天
          (currentDate) 和当前日期(date){" "}
        </li>
        <li> 修复 Collapse 手风琴 展开后不能收起的问题 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.39</a>
      </h2>
      <ul>
        <li> 新增 Tooltip visible 属性 控制默认是否显示 </li>
        <li> 新增 Tooltip theme 属性 支持 dark | light (默认 dark)</li>
        <li> 新增 Popover 组件 </li>
        <li> 修复 DatePicker 日期显示有边框 </li>
        <li>
          {" "}
          新增 DatePicker showPrevDay showNextDay 选项 控制
          是否显示上一月和下一月的 日期
        </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.38</a>
      </h2>
      <ul>
        <li> 修复 Tooltip createRef 的问题</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.37</a>
      </h2>
      <ul>
        <li> 重构 Tooltip 组件, 修复位置计算错误的问题 感谢 @licc 同学</li>
        <li> 增加 Tooltip 的显示动画 </li>
        <li>
          {" "}
          增加官网主页{" "}
          <a href="https://cuke-ui.github.io/cuke-ui-landing/">
            (cuke-ui-landing)
          </a>
        </li>
        <li> 修复已知问题 </li>
        <li> 提高测试覆盖率 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.36</a>
      </h2>
      <ul>
        <li> 修复 Upload 文件名过长 显示问题 </li>
        <li> 修复 DatePicker 组件 onPanelVisibleChange 状态错误 </li>
        <li> 修复 DatePicker 默认值更新 selectedDate 错误的问题 </li>
        <li> 修复 DatePicker 有扩展 今天 文字没对齐 </li>
        <li> 修改 DatePicker 非当前月 日期 颜色</li>
        <li> 新增 Calendar 组件</li>
        <li> 修复 Grid gutter 不生效的问题 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.35</a>
      </h2>
      <ul>
        <li> 优化 Modal, Drawer 的 生命周期处理 </li>
        <li> 增加 Upload 组件</li>
        <li> Drawer 增加 阴影 & 无蒙版模式 </li>
        <li> 修复 Button 组件 disabled 还有 active 效果的 bug</li>
        <li> 优化 Modal 和 Drawer 的一些 less 变量定义</li>
        <li> 修复 Modal 和 Drawer title 过长 会导致换行的 bug</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.34</a>
      </h2>
      <ul>
        <li> 修复 Modal.xx() 关闭时无动画的问题 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.32 - v0.0.33</a>
      </h2>
      <ul>
        <li> 优化 Collapse 过渡效果 </li>
        <li>
          {" "}
          修复 Collapse 手风琴模式 点击 当前展开的面板后 再次点击 不能收回
        </li>
        <li> Collapse 增加 rightArrow 箭头在右边显示</li>
        <li> Collapse 增加 icon 支持自定义图标 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.31</a>
      </h2>
      <ul>
        <li> 调整 主色调 </li>
        <li> Steps 组件增加 content 模式 </li>
        <li> 发布 npm 时 移除 单元测试 </li>
        <li> CityPicker 增加 loading 属性 </li>
        <li> 修改 Modal 和 Message 的动画弧度, 让其看起来更柔和 </li>
        <li> 升级 storybook 版本 </li>
        <li> 修复 Breadcrumb 为 链接时 颜色不对</li>
        <li> 修复 Notification 组件 点击 关闭图标 会触发 onClick 的 问题</li>
        <li> Notification 组件 新增 四个方向 </li>
        <li> Tag 组件 增加 circle 属性</li>
        <li> Tag 组件 增加 删除动画 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.30</a>
      </h2>
      <ul>
        <li> 优化 Button 组件 样式 </li>
        <li> 新增 Steps 组件 </li>
        <li> 修复 Pagination 组件 onChange 会触发两次的bug </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.29</a>
      </h2>
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
        <li> DatePicker 增加 allowClear 选项 支持清除 </li>
        <li> 修复 Collapse 圆角溢出 问题</li>
        <li> 修复 CityPicker 没有圆角的问题</li>
        <li> 修复 BackTop 组件 第一次会触发动画的 bug </li>
        <li> 修复 BackTop 组件 onClick 事件 会触发两次的 bug </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.27 - v0.0.28</a>
      </h2>
      <ul>
        <li> 修复 Modal.prompt() 获取不到 value 的问题</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.26</a>
      </h2>
      <ul>
        <li> 修复 CityPicker classNames 样式被覆盖的问题</li>
        <li> 完善单元测试 提升覆盖率 </li>
        <li> 修复 Message 组件 偶尔卸载失败的问题</li>
        <li> 文档增加 WordPad 的 清除示例 </li>
        <li> 去除 所有组件多余的 onChange 事件</li>
        <li> 修复 Modal 组件 content 为 Input 的 bug</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.25</a>
      </h2>
      <ul>
        <li> 新增 NumberInput 组件 </li>
        <li> Input 组件 增加 addonClassName 属性</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.24</a>
      </h2>
      <ul>
        <li> 调整 DatePicker 组件 宽高 </li>
        <li> 修改 Notification 组件 的弹出行为 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.23</a>
      </h2>
      <ul>
        <li> Modal 组件 footer 属性 支持 React.Fragment </li>
        <li> 增加 Modal.prompt() api </li>
        <li> Modal.xx() 新增 iconType 属性 自定义图标类型 </li>
        <li> 增加 TurnTable 示例</li>
        <li> 修改 手机端响应式断点为576px </li>
        <li> 修复 Modal 组件 在手机端时 没居中 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.22</a>
      </h2>
      <ul>
        <li> Modal 组件 增加 okButtonProps 和 cancelButtonProps 属性</li>
        <li>
          {" "}
          Modal 组件 增加 confirm, info, success, error, warning, loading 静态
          方法
        </li>
        <li> Modal, Message, Notification 统一 增加 xx.destroy() 的引用</li>
        <li> 优化项目代码细节 </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.21</a>
      </h2>
      <ul>
        <li>
          {" "}
          组件生命周期 componentWillReceiveProps => getDerivedStateFromProps
        </li>
        <li> 修复 Radio onChange 触发两次</li>
        <li> 修复 Checkbox onChange 触发两次</li>
        <li> 优化 webpack moment 打包体积</li>
        <li> 修复 Notification 组件 淡出动画异常</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.20</a>
      </h2>
      <ul>
        <li> 新增 Notification 组件</li>
        <li> 完善 文档</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.19</a>
      </h2>
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
      <h2>
        <a>v0.0.18</a>
      </h2>
      <ul>
        <li>优化 DropDown, Select, CityPicker, DatePicker 的体验</li>
        <li>
          <ReactMarkDown
            source={`格式化代码 [#f353c23](https://github.com/cuke-ui/cuke-ui/pull/2/commits/f353c23bc79440c03b0897fa1bb193932e3a2180)([Caraws](https://github.com/Caraws))`}
          />
        </li>
        <li>优化示例</li>
        <li>CityPicker 增加 panelVisibleChange 方法</li>
        <li>Modal 和 Drawer 组件 target 方法 替换成 getPopupContainer</li>
        <li>增加 Modal 组件 自定义 footer 的示例</li>
        <li>增加 Select, CityPicker, DatePicker 的关闭动画</li>
        <li>DataPicker 增加 loading 属性</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.17</a>
      </h2>
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
      <h2>
        <a>v0.0.2 - v0.0.16</a>
      </h2>
      <ul>
        <li>下班有空更新迭代</li>
        <li>修复发布到 npm 遇到的各种问题</li>
        <li>增加 webpack umd 和 babel 两种打包方式</li>
        <li>增加 各种组件的 demo 演示</li>
        <li>优化已有组件</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item>
      <h2>
        <a>v0.0.1</a>
      </h2>
      <ul>
        <li>年底的一个目标,做一个组件库</li>
        <li>搭建项目结构</li>
        <li>添加 storybook</li>
        <li>集成之前写好的组件</li>
      </ul>
    </Timeline.Item>
  </Timeline>
);

export default ChangeLog;
