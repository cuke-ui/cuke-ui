<a name="1.11.0"></a>
# [1.11.0](https://github.com/cuke-ui/cuke-ui/compare/v1.10.3...v1.11.0) (2019-07-29)


### Features

* **Turntable:** suport custom  action ([cda1d5d](https://github.com/cuke-ui/cuke-ui/commit/cda1d5d))

### Bug Fixes

* **MusicPlayer:** fix restart playing when click anywhere in mobile mode
* **MusicPlayer:** support audio play time more than 1 hour text format


# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.10.3"></a>
# [1.10.3](https://github.com/cuke-ui/cuke-ui/compare/v1.10.2...v1.10.3) (2019-06-03)


### Bug Fixes

* **drawer:** 修复Drawer 组件 box-shadow 丢失的问题 ([f9b96d0](https://github.com/cuke-ui/cuke-ui/commit/f9b96d0))


<a name="1.10.2"></a>
# [1.10.2](https://github.com/cuke-ui/cuke-ui/compare/v1.9.0...v1.10.2) (2019-05-31)


### Bug Fixes

* **drawer:** 修复开启抽屉会显示 横向滚动条的 Bug ([61f133b](https://github.com/cuke-ui/cuke-ui/commit/61f133b))
* **modal:** 优化弹框内容超长时不能滚动的 Bug ([3f382af](https://github.com/cuke-ui/cuke-ui/commit/3f382af))




<a name="1.10.0"></a>
# [1.10.0](https://github.com/cuke-ui/cuke-ui/compare/v1.9.0...v1.10.0) (2019-05-29)


### Bug Fixes

* **table:** 修复 table rowSelection 禁用时 也会被选中的 bug ([b4f70b7](https://github.com/cuke-ui/cuke-ui/commit/b4f70b7))
* **table:** 修复 多页情况 已选中的 row 丢失 的问题 ([6edf13a](https://github.com/cuke-ui/cuke-ui/commit/6edf13a))
* removed repeated imports from package.json ([039277a](https://github.com/cuke-ui/cuke-ui/commit/039277a))
* **Tooltip:** 修复默认显示时点击其他地方还能关闭的 bug ([08f3410](https://github.com/cuke-ui/cuke-ui/commit/08f3410))


### Features

* 新增 InputPassword 密码输入框 ([411b915](https://github.com/cuke-ui/cuke-ui/commit/411b915))
* **countDown:** 新增 CountDown 测试 ([5e71003](https://github.com/cuke-ui/cuke-ui/commit/5e71003))
* **countDown:** 新增倒计时 countDown 组件 ([eed14c0](https://github.com/cuke-ui/cuke-ui/commit/eed14c0))
* **table:** 新增 斑马纹 stripe 属性 ([eb40cf7](https://github.com/cuke-ui/cuke-ui/commit/eb40cf7))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/cuke-ui/cuke-ui/compare/v1.8.0...v1.9.0) (2019-02-07)


### Bug Fixes

* 优化 divider ([fbf3f0b](https://github.com/cuke-ui/cuke-ui/commit/fbf3f0b))
* **table:** 增加 rowSelection.getCheckboxProps 属性 ([f7712a7](https://github.com/cuke-ui/cuke-ui/commit/f7712a7))


### Features

* **table:** 增加分页器和加载效果 ([fa4230e](https://github.com/cuke-ui/cuke-ui/commit/fa4230e))
* **table:** 新增 rowSelection ([fb3adf8](https://github.com/cuke-ui/cuke-ui/commit/fb3adf8))
* **table:** 新增 Table 组件 ([a890b38](https://github.com/cuke-ui/cuke-ui/commit/a890b38))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/cuke-ui/cuke-ui/compare/v1.7.0...v1.8.0) (2019-01-30)


### Bug Fixes

* 修复 MusicPlayer 文档 样式丢失 ([abfa7c2](https://github.com/cuke-ui/cuke-ui/commit/abfa7c2))
* 修复 Pagination pageSize 动态切换时 页码不对的 问题 ([a94b2f0](https://github.com/cuke-ui/cuke-ui/commit/a94b2f0))


### Features

* 新增Divider 组件 ([3272e73](https://github.com/cuke-ui/cuke-ui/commit/3272e73))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/cuke-ui/cuke-ui/compare/v1.6.2...v1.7.0) (2019-01-28)


### Features

* **pagination:** 全新的 pagination 组件 ([1c6e984](https://github.com/cuke-ui/cuke-ui/commit/1c6e984))
* **pagination:** 分页器 怎讲 quick jumper 支持快速跳转 ([7ecfab5](https://github.com/cuke-ui/cuke-ui/commit/7ecfab5))
* **select:** Select 新增 labelInValue 属性 ([6edf311](https://github.com/cuke-ui/cuke-ui/commit/6edf311))



<a name="1.6.2"></a>
## [1.6.2](https://github.com/cuke-ui/cuke-ui/compare/v1.6.0...v1.6.2) (2019-01-26)


### Bug Fixes

* 修复less 加载问题 ([cf81877](https://github.com/cuke-ui/cuke-ui/commit/cf81877))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/cuke-ui/cuke-ui/compare/v1.4.0...v1.6.0) (2019-01-26)


### Bug Fixes

* **avatar:** 优化 Avatar 组件 ([8037e4b](https://github.com/cuke-ui/cuke-ui/commit/8037e4b))
* 修复 Tooltip visible 默认是 true 时 会闪烁的问题 ([c278cb0](https://github.com/cuke-ui/cuke-ui/commit/c278cb0))
* 修复按需加载无法加载样式的问题 ([cda30ac](https://github.com/cuke-ui/cuke-ui/commit/cda30ac))


### Features

* cityPicker, datePicker, numberInput, select, input 增加 allowClear 属性 ([e93c666](https://github.com/cuke-ui/cuke-ui/commit/e93c666))
* **datePicker:** 新增 disabledDate 属性 ([a66e1a8](https://github.com/cuke-ui/cuke-ui/commit/a66e1a8))
* **empty:** 新增 Empty 组件 ([45f14ce](https://github.com/cuke-ui/cuke-ui/commit/45f14ce))
* **input:** 调整 删除图标的样式 ([6f40334](https://github.com/cuke-ui/cuke-ui/commit/6f40334))
* CityPicker, Drawer, Modal, Select 新增 wrapperClassName ([5eda0e6](https://github.com/cuke-ui/cuke-ui/commit/5eda0e6))
* 新增 Select, CityPicker 的 notFoundContent 属性 ([3602806](https://github.com/cuke-ui/cuke-ui/commit/3602806))
* 新增Avatar组件 ([463da17](https://github.com/cuke-ui/cuke-ui/commit/463da17))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/cuke-ui/cuke-ui/compare/v1.3.1...v1.4.0) (2019-01-08)


### Bug Fixes

* **datepicker:** 优化calendar,datePicker 的显示逻辑 ([671eb6d](https://github.com/cuke-ui/cuke-ui/commit/671eb6d))
* **input:** input 改为受控组件 ([4da998f](https://github.com/cuke-ui/cuke-ui/commit/4da998f))


### Features

* cityPicker, datePicker, input, numberInput, select 增加 size 属性 ([541ef0a](https://github.com/cuke-ui/cuke-ui/commit/541ef0a))
* **input:** Input 组件新增 prefix,suffix, allowClear 属性, 支持前后缀和 删除 ([bedec0c](https://github.com/cuke-ui/cuke-ui/commit/bedec0c))
* **progress:** Progress 新增 环形进度条, format 属性 ([b96cecf](https://github.com/cuke-ui/cuke-ui/commit/b96cecf))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/cuke-ui/cuke-ui/compare/v1.3.0...v1.3.1) (2019-01-02)


### Bug Fixes

* **datePicker:**  修复 DatePicker 日期星期几显示错误的bug, 调整星期文案为中文 ([3a934c7](https://github.com/cuke-ui/cuke-ui/commit/3a934c7))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/cuke-ui/cuke-ui/compare/v1.2.2...v1.3.0) (2019-01-02)


### Bug Fixes

* calendar test ([67752ec](https://github.com/cuke-ui/cuke-ui/commit/67752ec))
* notification multiple existence ([bf83cc2](https://github.com/cuke-ui/cuke-ui/commit/bf83cc2))
* 优化 Button type,size 定义 ([8982d52](https://github.com/cuke-ui/cuke-ui/commit/8982d52))
* 优化 DatePicker 组件 & 调整样式 ([104f6b8](https://github.com/cuke-ui/cuke-ui/commit/104f6b8))
* 优化 Drawer 的 placements 定义 ([6d7eb6f](https://github.com/cuke-ui/cuke-ui/commit/6d7eb6f))
* 优化 Notification positions 定义 ([3a209ac](https://github.com/cuke-ui/cuke-ui/commit/3a209ac))
* 修复 DatePicker 选择 今天日期不对 ([d7ba35a](https://github.com/cuke-ui/cuke-ui/commit/d7ba35a))
* **calendar:** 有默认值 时不能切换月份 ([1d3a744](https://github.com/cuke-ui/cuke-ui/commit/1d3a744))
* **datepicker:** 修复 DatePicker 切换月份导致选中的月份改变的bug ([7d41765](https://github.com/cuke-ui/cuke-ui/commit/7d41765))


### Features

* DatePicker 新增 position 属性, 支持top 和 bottom 方向 ([8d352d2](https://github.com/cuke-ui/cuke-ui/commit/8d352d2))
* **calendar:** Calendar 新增 miniMode 属性 ([298e843](https://github.com/cuke-ui/cuke-ui/commit/298e843))
* **calendar:** 增加 Calendar 上一个月和下一个月的点击效果 ([26b8edd](https://github.com/cuke-ui/cuke-ui/commit/26b8edd))


### Performance Improvements

* button classnames ([d8e69f6](https://github.com/cuke-ui/cuke-ui/commit/d8e69f6))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/cuke-ui/cuke-ui/compare/v1.2.1...v1.2.2) (2018-12-27)


### Bug Fixes

* 修复 Button 组件 虚线看不见的 问题 ([f0e451e](https://github.com/cuke-ui/cuke-ui/commit/f0e451e))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/cuke-ui/cuke-ui/compare/v1.2.0...v1.2.1) (2018-12-25)


### Bug Fixes

* 修复 tooltip hover 异常滚动的问题 ([940faf7](https://github.com/cuke-ui/cuke-ui/commit/940faf7))


### Features

* 更新文档 ([e7f9358](https://github.com/cuke-ui/cuke-ui/commit/e7f9358))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/cuke-ui/cuke-ui/compare/v1.1.0...v1.2.0) (2018-12-25)


### Features

* Card 新增 loading, cover, showShadowWhenHover 属性 ([7b8d878](https://github.com/cuke-ui/cuke-ui/commit/7b8d878))
* CityPicker 新增 defaultCityName ([b0772ef](https://github.com/cuke-ui/cuke-ui/commit/b0772ef))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/cuke-ui/cuke-ui/compare/v1.0.1...v1.1.0) (2018-12-11)


### Features

* popover tooltip popconfirm 增加 getPopupContainer 属性 ([7583f00](https://github.com/cuke-ui/cuke-ui/commit/7583f00))
* 新增 dropdown cityPicker, select, tooltip 的 resize ([6243386](https://github.com/cuke-ui/cuke-ui/commit/6243386))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/cuke-ui/cuke-ui/compare/v1.0.0...v1.0.1) (2018-12-06)


### Bug Fixes

* 优化 Button disabled 效果 ([efab886](https://github.com/cuke-ui/cuke-ui/commit/efab886))
* 优化 Button disabled 效果 ([282788a](https://github.com/cuke-ui/cuke-ui/commit/282788a))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/cuke-ui/cuke-ui/compare/v1.0.0-alpha.2...v1.0.0) (2018-12-05)


### Bug Fixes

* 默认单选选择后值被重置 ([85b744f](https://github.com/cuke-ui/cuke-ui/commit/85b744f))


### Features

* CheckBox 和 Radio 新增 size 属性 ([1e21e53](https://github.com/cuke-ui/cuke-ui/commit/1e21e53))
* 增加 Checbox size 测试 ([9541ba8](https://github.com/cuke-ui/cuke-ui/commit/9541ba8))
* 增加 Checbox size 测试 ([2368cec](https://github.com/cuke-ui/cuke-ui/commit/2368cec))



<a name="1.0.0-alpha.1"></a>
# [1.0.0-alpha.1](https://github.com/cuke-ui/cuke-ui/compare/v1.0.0-beta-0...v1.0.0-alpha.1) (2018-12-04)


### Bug Fixes

* DatePicker 点击今天无效果和 默认值天数显示不正确的问题 ([4e4573f](https://github.com/cuke-ui/cuke-ui/commit/4e4573f))



<a name="1.0.0-beta-0"></a>
# [1.0.0-beta-0](https://github.com/cuke-ui/cuke-ui/compare/235ca41...v1.0.0-beta-0) (2018-12-03)


### Bug Fixes

* babelrc format ([bc2c810](https://github.com/cuke-ui/cuke-ui/commit/bc2c810))
* collapse stylelint ([77e0424](https://github.com/cuke-ui/cuke-ui/commit/77e0424))
* DataPicker 增加 scroll-into-view-if-needed ([963d8cc](https://github.com/cuke-ui/cuke-ui/commit/963d8cc))
* deloy moment ([b11ef20](https://github.com/cuke-ui/cuke-ui/commit/b11ef20))
* faild test ([eb3e12c](https://github.com/cuke-ui/cuke-ui/commit/eb3e12c))
* Modal 组件没居中 ([0fe28aa](https://github.com/cuke-ui/cuke-ui/commit/0fe28aa))
* pre commit hook ([fc1afc2](https://github.com/cuke-ui/cuke-ui/commit/fc1afc2))
* Tooltip createRef bug ([0adc7fa](https://github.com/cuke-ui/cuke-ui/commit/0adc7fa))
* tooltip position left ([c8adb29](https://github.com/cuke-ui/cuke-ui/commit/c8adb29))
* 优化 storybook ([3d58e46](https://github.com/cuke-ui/cuke-ui/commit/3d58e46))
* 优化 storybook ([d85bbd9](https://github.com/cuke-ui/cuke-ui/commit/d85bbd9))
* 优化组件通用样式 ([8894814](https://github.com/cuke-ui/cuke-ui/commit/8894814))
* 修复  Modal 组件 出现 Input 的 bug ([f7e3f61](https://github.com/cuke-ui/cuke-ui/commit/f7e3f61))
* 修复  NumberInput stepper 模式 无 disabled 效果 ([b80b973](https://github.com/cuke-ui/cuke-ui/commit/b80b973))
* 修复  Proptypes ([1ac4bdf](https://github.com/cuke-ui/cuke-ui/commit/1ac4bdf))
* 修复 BackTop 组件 onClick 事件 会触发两次的 bug ([e90cc96](https://github.com/cuke-ui/cuke-ui/commit/e90cc96))
* 修复 Button 组件 link 模式下 disabled 无效 ([7ef4bc8](https://github.com/cuke-ui/cuke-ui/commit/7ef4bc8))
* 修复 DatePicker 不能切换月份 ([e5dbe7f](https://github.com/cuke-ui/cuke-ui/commit/e5dbe7f))
* 修复 DatePicker 有扩展 今天 文字没对齐 ([a50d894](https://github.com/cuke-ui/cuke-ui/commit/a50d894))
* 修复 Message 组件卸载时报错 ([9cb76dd](https://github.com/cuke-ui/cuke-ui/commit/9cb76dd))
* 修复 Modal 关闭无动画的问题 ([ca57dee](https://github.com/cuke-ui/cuke-ui/commit/ca57dee))
* 修复 Modal 无法关闭 ([a11cf2f](https://github.com/cuke-ui/cuke-ui/commit/a11cf2f))
* 修复 Modal.prompt 获取不到 value 的问题 ([92445df](https://github.com/cuke-ui/cuke-ui/commit/92445df))
* 修复 Notification 动画 ([f3d4b53](https://github.com/cuke-ui/cuke-ui/commit/f3d4b53))
* 修复 Process 组件 ([c83558d](https://github.com/cuke-ui/cuke-ui/commit/c83558d))
* 修复 Radio Checkbox 组件 onChange 事件触发两次 ([d803460](https://github.com/cuke-ui/cuke-ui/commit/d803460))
* 修复 stroybook 发布问题 ([9c67fbe](https://github.com/cuke-ui/cuke-ui/commit/9c67fbe))
* 修复 ToolTip 和 Popover onPanelVisibleChange 会触发多次的问题 ([0c5b845](https://github.com/cuke-ui/cuke-ui/commit/0c5b845))
* 修复 WordPad 生命周期触发两次的问题 ([921aa83](https://github.com/cuke-ui/cuke-ui/commit/921aa83))
* 修复Select 组件 disabled 状态点击能关闭面板的问题 ([2dcb43e](https://github.com/cuke-ui/cuke-ui/commit/2dcb43e))
* 修复tooltip定位 ([262f372](https://github.com/cuke-ui/cuke-ui/commit/262f372))
* 删除无用引用 ([e63996f](https://github.com/cuke-ui/cuke-ui/commit/e63996f))
* 手误 ([5ba62b8](https://github.com/cuke-ui/cuke-ui/commit/5ba62b8))
* 自动更新文档 ([a2e9379](https://github.com/cuke-ui/cuke-ui/commit/a2e9379))


### Features

*  文档迁移 storybook => ydoc ([b66cbdd](https://github.com/cuke-ui/cuke-ui/commit/b66cbdd))
*  更新 README ([fbff5fb](https://github.com/cuke-ui/cuke-ui/commit/fbff5fb))
* Darwer 组件增加 height 参数 ([edbea70](https://github.com/cuke-ui/cuke-ui/commit/edbea70))
* DatePicker 增加 showToday 选项 ([daae1d4](https://github.com/cuke-ui/cuke-ui/commit/daae1d4))
* Drawer 增加 无蒙版 模式 ([bb61908](https://github.com/cuke-ui/cuke-ui/commit/bb61908))
* Drawer 组件 增加 footer 属性 ([19bd550](https://github.com/cuke-ui/cuke-ui/commit/19bd550))
* Input 组件增加readOnly 属性 ([9f08aff](https://github.com/cuke-ui/cuke-ui/commit/9f08aff))
* Modal Drawer 组件增加 无标题模式 ([de4c406](https://github.com/cuke-ui/cuke-ui/commit/de4c406))
* Modal 增加 cancelButtonProps 和 okButtonProps 属性 ([89cae97](https://github.com/cuke-ui/cuke-ui/commit/89cae97))
* Modal, Message, Noticifation 统一增加 destroy 引用 ([538294e](https://github.com/cuke-ui/cuke-ui/commit/538294e))
* relase ([36f3003](https://github.com/cuke-ui/cuke-ui/commit/36f3003))
* relase v0.0.31 ([443e3d3](https://github.com/cuke-ui/cuke-ui/commit/443e3d3))
* release v0.0.22 ([036d3a3](https://github.com/cuke-ui/cuke-ui/commit/036d3a3))
* Steps 新增 content 模式 ([4792f6d](https://github.com/cuke-ui/cuke-ui/commit/4792f6d))
* ToolTip 新增 theme 模式 ([858425c](https://github.com/cuke-ui/cuke-ui/commit/858425c))
* Tooltip 新增 trigger 属性 ([4d79893](https://github.com/cuke-ui/cuke-ui/commit/4d79893))
* 优化 calendar 视觉效果 ([858ee2b](https://github.com/cuke-ui/cuke-ui/commit/858ee2b))
* 优化 DatePicker, Select, CityPiker 动画效果 ([25a6517](https://github.com/cuke-ui/cuke-ui/commit/25a6517))
* 优化 Modal 和 Drawer 的生命周期处理 ([2141761](https://github.com/cuke-ui/cuke-ui/commit/2141761))
* 修复 moment webpack 体积 ([64f0bc8](https://github.com/cuke-ui/cuke-ui/commit/64f0bc8))
* 修改 手机端响应式断点为576px ([7ca4646](https://github.com/cuke-ui/cuke-ui/commit/7ca4646))
* 修改全局风格, Button 增加 circle 属性 ([8ca4e8d](https://github.com/cuke-ui/cuke-ui/commit/8ca4e8d))
* 发布  NumberInput 组件 ([4a27ce8](https://github.com/cuke-ui/cuke-ui/commit/4a27ce8))
* 增加  Upload 组件 图片列表读取 ([d0bfc2d](https://github.com/cuke-ui/cuke-ui/commit/d0bfc2d))
* 增加 Affix 测试 ([94140ab](https://github.com/cuke-ui/cuke-ui/commit/94140ab))
* 增加 Calendar 组件 ([d4b8066](https://github.com/cuke-ui/cuke-ui/commit/d4b8066))
* 增加 CityPicker 组件 ([c77e261](https://github.com/cuke-ui/cuke-ui/commit/c77e261))
* 增加 Form 组件 基本架构 ([f6514f1](https://github.com/cuke-ui/cuke-ui/commit/f6514f1))
* 增加 less 工具函数 ([496396f](https://github.com/cuke-ui/cuke-ui/commit/496396f))
* 增加 markdown 解析 ([3cf92fa](https://github.com/cuke-ui/cuke-ui/commit/3cf92fa))
* 增加 message , Col 组件的单元测试 ([85f6e6b](https://github.com/cuke-ui/cuke-ui/commit/85f6e6b))
* 增加 Modal, Drawer, Message,Notification 测试 ([73f853e](https://github.com/cuke-ui/cuke-ui/commit/73f853e))
* 增加 Notification 组件 ([41d163d](https://github.com/cuke-ui/cuke-ui/commit/41d163d))
* 增加 NumberInput 组件 ([2c4729f](https://github.com/cuke-ui/cuke-ui/commit/2c4729f))
* 增加 Popover 组件 ([e0442ca](https://github.com/cuke-ui/cuke-ui/commit/e0442ca))
* 增加 Progress, BackTop 入口 ([f89a263](https://github.com/cuke-ui/cuke-ui/commit/f89a263))
* 增加 Radio.Button 组件 ([0bc2ce5](https://github.com/cuke-ui/cuke-ui/commit/0bc2ce5))
* 增加 Select 组件 ([bed843d](https://github.com/cuke-ui/cuke-ui/commit/bed843d))
* 增加 Select 组件 arrow 动画 ([2801585](https://github.com/cuke-ui/cuke-ui/commit/2801585))
* 增加 Steps 组件 (未完成) ([61a7b5a](https://github.com/cuke-ui/cuke-ui/commit/61a7b5a))
* 增加 storybook addon ([f261555](https://github.com/cuke-ui/cuke-ui/commit/f261555))
* 增加 tag 组件 ([bff7924](https://github.com/cuke-ui/cuke-ui/commit/bff7924))
* 增加 TurnTable 示例 ([cabcb3b](https://github.com/cuke-ui/cuke-ui/commit/cabcb3b))
* 增加 Uplaod 组件 ([4d0c863](https://github.com/cuke-ui/cuke-ui/commit/4d0c863))
* 增加 upload 测试 ([d7ed16d](https://github.com/cuke-ui/cuke-ui/commit/d7ed16d))
* 增加 upload 组件 ([23f0d19](https://github.com/cuke-ui/cuke-ui/commit/23f0d19))
* 增加Drawer  抽屉组件, 优化 Modal 组件 ([f139bb6](https://github.com/cuke-ui/cuke-ui/commit/f139bb6))
* 增加写字板组件 ([5328e4a](https://github.com/cuke-ui/cuke-ui/commit/5328e4a))
* 完善  Notification 组件 ([f32f938](https://github.com/cuke-ui/cuke-ui/commit/f32f938))
* 完善 CityPicker ([9af9f79](https://github.com/cuke-ui/cuke-ui/commit/9af9f79))
* 完善 DatePicker 组件 ([43a816c](https://github.com/cuke-ui/cuke-ui/commit/43a816c))
* 完善NumberInput 组件 ([bdc594e](https://github.com/cuke-ui/cuke-ui/commit/bdc594e))
* 完善测试 ([2eb37dc](https://github.com/cuke-ui/cuke-ui/commit/2eb37dc))
* 新增  Card 组件 ([191e8e9](https://github.com/cuke-ui/cuke-ui/commit/191e8e9))
* 新增 <Collapse> 折叠面板组件 ([ce98d42](https://github.com/cuke-ui/cuke-ui/commit/ce98d42))
* 新增 <DatePicker> 组件 ([c83b5ba](https://github.com/cuke-ui/cuke-ui/commit/c83b5ba))
* 新增 CheckboxButton ([253ed68](https://github.com/cuke-ui/cuke-ui/commit/253ed68))
* 新增 Modal.prompt api ([1b1fefd](https://github.com/cuke-ui/cuke-ui/commit/1b1fefd))
* 新增 Popconfirm 组件 ([f24bcab](https://github.com/cuke-ui/cuke-ui/commit/f24bcab))
* 新增 Steps 组件 ([f2da7ca](https://github.com/cuke-ui/cuke-ui/commit/f2da7ca))
* 新增大量测试 ([bf7a620](https://github.com/cuke-ui/cuke-ui/commit/bf7a620))
* 更新 change log ([ef1efff](https://github.com/cuke-ui/cuke-ui/commit/ef1efff))
* 更新 README ([01ce27c](https://github.com/cuke-ui/cuke-ui/commit/01ce27c))
* 更新文档 ([2092ab8](https://github.com/cuke-ui/cuke-ui/commit/2092ab8))
* 更新文档 ([235ca41](https://github.com/cuke-ui/cuke-ui/commit/235ca41))
* 添加 Notification 不显示关闭按钮 ([2559d8f](https://github.com/cuke-ui/cuke-ui/commit/2559d8f))
* 移除 CityPicker 控制台警告 ([cdaf67e](https://github.com/cuke-ui/cuke-ui/commit/cdaf67e))
* 重构 Tooltip 组件 ([2bc7fc5](https://github.com/cuke-ui/cuke-ui/commit/2bc7fc5))
