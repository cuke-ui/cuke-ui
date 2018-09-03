<h1 align="center">
cuke-ui
</h1>

<h4 align="center">
黄瓜 ui : 一个即插即用的 React UI 库 (**施工中,请勿用于生产环境...**)
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/cuke-ui" title="npm">
    <img src="https://img.shields.io/npm/dm/cuke-ui.svg?style=flat-square" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/cuke-ui" title="npm">
    <img src="https://img.shields.io/npm/l/cuke-ui.svg?style=flat-square" alt="npm"/>
  </a>
   <a href="https://badge.fury.io/js/cuke-ui" title="npm">
    <img src="https://img.shields.io/npm/v/cuke-ui.svg?style=flat-square" alt="npm version"/>
  </a>
   <a href="https://coveralls.io/github/cuke-ui/cuke-ui?branch=master" title="Coverage Status">
    <img src="https://coveralls.io/repos/github/cuke-ui/cuke-ui/badge.svg?branch=master" alt="Coverage Status"/>
  </a>
  <a href="https://isitmaintained.com/project/cuke-ui/cuke-ui">
    <img src="http://isitmaintained.com/badge/open/cuke-ui/cuke-ui.svg"/>
  <a>
</p>

### 名字由来
cuke(黄瓜), 常见的一种蔬菜, 希望这个项目也成为常见的一个依赖(虽然这是不可能的), 其实 黄瓜也符合 这个组件库的 宗旨 : 即插即用
主题色 采用 黄瓜绿, 清新又可爱, 组件借鉴(抄袭)了 有牌面的  Ant Design, 抱着学习的目的,开发了这个组件库, 所以建议不要用于生产环境,可能心情不好就不维护了

### 在线演示

[https://cuke-ui.github.io/cuke-ui/](https://cuke-ui.github.io/cuke-ui/)

### 安装
> 使用 npm 
```
npm i cuke-ui --save
```

> 使用 yarn
```
yarn add cuke-ui
```

### 如何使用

> 1.全部引入

```jsx
import { Button, message } from "cuke-ui"
import "cuke-ui/dist/cuke-ui.min.css"

class Text extends React.Component {
  render(){
    return (
      <Button onClick={()=> message.success('即插即用的react UI库')}>黄瓜ui</Button>
    )
 }
}
```

> 2.按需引入

```js
import Button from 'cuke-ui/lib/Button';
import 'cuke-ui/lib/Button/style.less';
```

### 计划开发的组件
> 计划2018年底完成,给自己一个交代

- [x] [Button 按钮](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%99%AE%E9%80%9A&selectedStory=Button%20%E6%8C%89%E9%92%AE&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Alert  警告提示](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%93%8D%E4%BD%9C%E5%8F%8D%E9%A6%88&selectedStory=Alert%20%E8%AD%A6%E5%91%8A%E6%8F%90%E7%A4%BA&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Breadcrumb 面包屑](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E5%AF%BC%E8%88%AA&selectedStory=Breadcrumb%20%E9%9D%A2%E5%8C%85%E5%B1%91&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Grid 网格布局](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E5%B8%83%E5%B1%80&selectedStory=Grid%20%E6%A0%85%E6%A0%8F&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Input 输入框](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%95%B0%E6%8D%AE%E5%BD%95%E5%85%A5&selectedStory=Input%20%E8%BE%93%E5%85%A5%E6%A1%86&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Message 消息提示](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%93%8D%E4%BD%9C%E5%8F%8D%E9%A6%88&selectedStory=Message%20%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Modal 对话框](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%93%8D%E4%BD%9C%E5%8F%8D%E9%A6%88&selectedStory=Modal%20%E5%AF%B9%E8%AF%9D%E6%A1%86&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Pagination 分页器](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E5%AF%BC%E8%88%AA&selectedStory=Pagination%20%E5%88%86%E9%A1%B5%E5%99%A8&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Tooltip 文字提示](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%95%B0%E6%8D%AE%E5%B1%95%E7%A4%BA&selectedStory=Tooltip&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [TurnTable 抽奖转盘](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E5%A8%B1%E4%B9%90&selectedStory=TurnTable%20%E6%8A%BD%E5%A5%96%E8%BD%AC%E7%9B%98&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [WordPad   手写输入板](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%95%B0%E6%8D%AE%E5%BD%95%E5%85%A5&selectedStory=WordPad%20%E5%86%99%E5%AD%97%E6%9D%BF&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [MusicPlayer 响应式音乐播放器](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E5%A8%B1%E4%B9%90&selectedStory=MusicPlayer%20%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Spin  加载中](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%93%8D%E4%BD%9C%E5%8F%8D%E9%A6%88&selectedStory=Spin%20%E5%8A%A0%E8%BD%BD%E4%B8%AD&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [BackTop 回到顶部](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E5%85%B6%E4%BB%96&selectedStory=BackTop%20%E5%9B%9E%E5%88%B0%E9%A1%B6%E9%83%A8&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Progress  进度条](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%93%8D%E4%BD%9C%E5%8F%8D%E9%A6%88&selectedStory=Progress%20%E8%BF%9B%E5%BA%A6%E6%9D%A1&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [x] [Tabs  选项卡](https://cuke-ui.github.io/cuke-ui/?selectedKind=%E6%95%B0%E6%8D%AE%E5%B1%95%E7%A4%BA&selectedStory=Tabs%20%E9%80%89%E9%A1%B9%E5%8D%A1&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
- [ ] Badge   徽标数 
- [ ] Dropdown 下拉菜单
- [ ] Checkbox  复选框
- [ ] Switch  选择器
- [ ] Radio   单选框  
- [ ] Select  下拉选择器  
- [ ] Upload  上传  
- [ ] Form    表单  
- [ ] Rate    评分  
- [ ] Collapse  折叠面板 

### 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)
- [gulu](https://github.com/FrankFang/gulu)
- [dragon-ui](https://github.com/JeromeLin/dragon-ui)


### 发布打包
> 基于webpack打包umd模块 , babel 打包es模块 , Gulp 打包css

```
yarn run build
```

输出 

- `dist`
	- `cuke-ui.js`
	- `cuke-ui.min.js`
	- `cuke-ui.css`
	- `cuke-ui.min.css`
- `lib`
	- `button`
	  - `index.js`
	  - `style.less`
	- `index.js`

###  本地开发
> 请首先安装 npm i -g yarn


1. 安装依赖
> 如果无法科学上网 可 使用 淘宝镜像 
> yarn config set registry https://registry.npm.taobao.org

```
git clone https://github.com/cuke-ui/cuke-ui.git
cd cuke-ui
yarn
```

2. 启动开发服务器
> 基于  storybook  [什么是storybook?](https://storybook.js.org/basics/introduction/)

```
yarn dev
```

3. 访问 [http://localhost:8080](http://localhost:8080)

4. 开发组件

> 参考 `components/button`

在 `components` 新建一个组件(组件名与文件名对应) 以 `button` 组件目录结构为例

- components
	- button           //组件文件夹
		- `__tests__`    //单元测试
			- `__snapshots__`  // ui 快照
			- `index.test.js`  //测试文件
		- `index.js`     //组件逻辑
		- `styles.less`  //组件样式
		
然后 在 `stories` 目录下 新建一个 `button.js`

- stories
	- `button.js`  // storybook 的文档文件
	

```jsx
//button.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/button';          //引入你的组件
import { withInfo } from '@storybook/addon-info';

storiesOf('示例标题', module)
 .add('Button 按钮', withInfo()(() => (         // 添加到页面上
   <Button type="primary">获取文字</Button>   // 这里写jsx
 )))
```


最后 将 写好的 storybook 文件 添加到 配置里面
> .storybook > config.js

```js


import { configure } from '@storybook/react';
function loadStories() {
  require('../stories/button');     //刚才写好的文件
}

configure(loadStories, module);
```

这样就完成了 `storybook` 会将你写好的组件 添加到页面上, 并且会自动生成说明文档 （其实本质上就是一个 webpack 的 dev-server）

最后的最后, 在 `components/index.js` 导出组件,以便于发布

```js
export { default as Button } from "./button";
```


### 测试相关
> 覆盖率

```
yarn coverage
```

> 单元测试

```
yarn test
```

> watch

```
yarn test -- --watch
```



### 文档相关

> 打包文档

```
yarn build:doc
```

> 发布文档
```
yarn pub:doc
```

