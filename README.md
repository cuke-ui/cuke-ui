<p align="center">
<img src="https://cdn.lijinke.cn/logo.png" width="100"/>
</p>

<h1 align="center">
cuke-ui
</h1>

<h4 align="center">
黄瓜 UI : 一个即插即用的 React UI 库
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/cuke-ui" title="npm">
    <img src="https://img.shields.io/npm/dm/cuke-ui.svg?style=for-the-badge" alt="npm"/>
  </a>
   <a href="https://badge.fury.io/js/cuke-ui" title="npm">
    <img src="https://img.shields.io/npm/v/cuke-ui.svg?style=for-the-badge" alt="npm version"/>
  </a>
  <a href="https://isitmaintained.com/project/cuke-ui/cuke-ui">
    <img src="https://img.shields.io/github/issues/cuke-ui/cuke-ui.svg?style=for-the-badge"/>
  </a>
  <a href="https://github.com/cuke-ui/cuke-ui">
    <img src="https://img.shields.io/github/stars/cuke-ui/cuke-ui.svg?style=for-the-badge" />
  </a>
</p>

<p align="center">
   <a href="https://travis-ci.com/cuke-ui/cuke-ui" title="npm">
    <img src="https://travis-ci.com/cuke-ui/cuke-ui.svg?branch=master" alt="travis"/>
  </a>
   <a href="https://coveralls.io/github/cuke-ui/cuke-ui?branch=master?style=for-the-badge" title="Coverage Status">
    <img src="https://coveralls.io/repos/github/cuke-ui/cuke-ui/badge.svg?branch=master" alt="Coverage Status"/>
  </a>
  <a href="https://david-dm.org/cuke-ui/cuke-ui" title="dependencies status">
    <img src="https://david-dm.org/cuke-ui/cuke-ui/status.svg"/>
  </a>
</p>

## :guitar: 名字由来
cuke(黄瓜), 常见的一种蔬菜, 希望这个项目也成为常见的一个依赖(虽然这是不可能的), 
其中黄瓜也符合 这个组件库的 宗旨 : 即插即用
其次 cuke 谐音 (cool ke) 很酷的李金珂的 意思
主题色 采用 黄瓜绿, 清新又可爱, 组件借鉴(抄袭)了 有牌面的  Ant Design, 抱着学习的目的,开发了这个组件库

## :metal: 在线演示

[https://cuke-ui.github.io/cuke-ui/](https://cuke-ui.github.io/cuke-ui/)

[![Edit nn6yr2m94](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nn6yr2m94?autoresize=1&expanddevtools=1&hidenavigation=1)

## :zap: 安装
> 使用 npm 
```
npm i cuke-ui --save
```

> 使用 yarn
```
yarn add cuke-ui
```

> 使用 cdn

```html
<link rel="stylesheet" href="https://unpkg.com/cuke-ui@latest/dist/cuke-ui.min.css">
<script type="text/javascript" src="https://unpkg.com/cuke-ui@latest/dist/cuke-ui.min.js"></script>
```


## :book: 如何使用

> 1. 全部引入

```jsx
import React from "react"
import { Button } from "cuke-ui"
import "cuke-ui/dist/cuke-ui.min.css"

class Page extends React.Component {
  render(){
    return (
      <Button type="primary">黄瓜ui</Button>
    )
 }
}
```

> 2 .按需引入

```js
import Button from 'cuke-ui/lib/button';
import 'cuke-ui/lib/button/style';
```

> 3. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```js
// .babelrc.js
module.exports = {
  plugins: [
    ["babel-plugin-import", {
      "libraryName": "cuke-ui",
      "libraryDirectory": "es",
      "style": true
    },'cuke-ui'], 
  ]
}

// 多个组件库
module.exports = {
  plugins: [
    ["babel-plugin-import", {
      "libraryName": "cuke-ui",
      "libraryDirectory": "es",
      "style": true
    },'cuke-ui'], 
    
    ["babel-plugin-import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    },'antd'], 
  ]
}


```

<!-- ### 测试版本
![next](https://img.shields.io/npm/v/cuke-ui/next.svg?style=for-the-badge) -->


## :pencil: 更新日志

[CHANGELOG](https://github.com/cuke-ui/cuke-ui/blob/master/CHANGELOG.md)

## :sparkling_heart: 感谢

- [@Yuhan zhong](https://github.com/duuliy)
- [@Caraws](https://github.com/Caraws)
- [@CanvasCao](https://github.com/CanvasCao)
- [@licc](https://github.com/cc616)


## :unamused: 设计规范

高仿 Ant-Design

## :dancers: 谁在使用

- 勇敢的人
- 我自己
- [李金珂的小屋](https://www.lijinke.cn)

## :package: 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)
- [gulu](https://github.com/FrankFang/gulu)
- [dragon-ui](https://github.com/JeromeLin/dragon-ui)


##  :wrench: 本地开发
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
                - `style.js`     // 按需加载需要用到
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


## :page_facing_up: License

[MIT](https://github.com/cuke-ui/cuke-ui/blob/master/LICENSE)

