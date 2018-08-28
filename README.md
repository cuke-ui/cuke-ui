# cuke-ui

[![Build Status](https://travis-ci.com/cuke-ui/cuke-ui.svg?branch=master)](https://travis-ci.com/cuke-ui/cuke-ui)

(施工中...)


### 开发
> 请首先安装 npm i -g yarn

1. 安装依赖
> 如果无法科学上网 可 使用 淘宝镜像 
> yarn config set registry https://registry.npm.taobao.org


```
yarn
```

2. 启动开发服务器
> 基于  storybook [什么是storybook](https://storybook.js.org/basics/introduction/)

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

### 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)
- [gulu](https://github.com/FrankFang/gulu)
- [dragon-ui](https://github.com/JeromeLin/dragon-ui)

