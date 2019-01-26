# 快速上手
---

## 安装

使用 npm 
```
npm i cuke-ui --save
```

使用 yarn
```
yarn add cuke-ui
```

使用 CDN
```
<link rel="stylesheet" href="https://unpkg.com/cuke-ui@latest/dist/cuke-ui.min.css">
<script type="text/javascript" src="https://unpkg.com/cuke-ui@latest/dist/cuke-ui.min.js"></script>
```

## 如何使用

1. 全部引入

```js
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

2. 按需引入

```js
import Button from 'cuke-ui/lib/button';
import 'cuke-ui/lib/button/style.less';
```

3. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

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

## 不会搭项目?

使用 [dawdler](https://github.com/lijinke666/dawdler) 一键生成

```
npm install dawdler -g
# 或者
yarn global add dawdler
```

```
$ dl init
? Project name dawdler        输入项目名称
? Select project type REACT   输入项目类型

Start generating the project. Please waiting ...

√ generator completed!

cd dawdler
npm install | yarn
npm start
```
