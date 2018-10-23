# 快速上手

## Install 安装

> 使用 yarn

```bash
yarn add cuke-ui
```

> 使用 npm

```bash
npm i cuke-ui --save
```

> 使用 cdn

```html
<link rel="stylesheet" href="https://unpkg.com/cuke-ui@latest/dist/cuke-ui.min.css">
<script type="text/javascript" src="https://unpkg.com/cuke-ui@latest/dist/cuke-ui.min.js"></script>
```

## Usage 使用

### 如何使用
> 1. 全部引入

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

> 2. 按需引入
```js
import Button from 'cuke-ui/lib/Button';
import 'cuke-ui/lib/Button/style.less';
```

> 3. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```js
//webpack.config.js
module.exports = {
...
 module: {
    rules: [
      ...
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              plugins: [
                ["import",{
                  "libraryName":"cuke-ui",
                  "style" : name => `${name}/style.less`
                }],
	            ]
            },
          },
  	    }
     ]
   }	  
}


```

## 不会搭项目?

> 使用 [Dawdler](https://github.com/lijinke666/dawdler)

```bash
yarn global add dawdler

$ dl init
? Project name dawdler
? Select project type REACT

Start generating the project. Please waiting ...

√ generator completed!

cd dawdler
yarn
yarn start
```