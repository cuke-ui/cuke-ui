import React from "react";
import { storiesOf } from "@storybook/react";
import { name, repository, author } from "../package.json";
import Alert from "../components/alert";
import Tag from "../components/tag";
import { FaGithub } from "react-icons/fa";
import ReactMarkDown from "react-markdown";
import CodeBlock from "./codeBlock";
import "./styles/index.less";

const LOGO = `

              __                    _ 
  _______  __/ /_____        __  __(_)
 / ___/ / / / //_/ _ \\______/ / / / / 
/ /__/ /_/ / ,< /  __/_____/ /_/ / /  
\\___/\\__,_/_/|_|\\___/      \\__,_/_/   
                                      


`;
console.log("VGhhbmsgeW91IGZvciB1c2luZyBjdWtlIHVp");
console.log(LOGO);

storiesOf("综述", module)
  .add("介绍", () => (
    <article style={{ padding: 20 }} className="index-page">
      <h1 style={{ fontSize: 40, padding: 0, margin: 0 }}>
        {name}

        <a href={repository} target="_blank" style={{ marginLeft: 20 }}>
          <FaGithub style={{ fontSize: 30, color: "#444" }} />
        </a>
      </h1>
      <p>
        <img src="https://cdn.lijinke.cn/logo.png" width={120} />
      </p>
      <p>
        <a href="https://www.npmjs.com/package/cuke-ui" title="npm">
          <img
            src="https://img.shields.io/npm/dm/cuke-ui.svg?style=for-the-badge"
            alt="npm"
          />
        </a>
        {"  "}
        <a href="https://isitmaintained.com/project/cuke-ui/cuke-ui">
          <img src="https://img.shields.io/github/issues/cuke-ui/cuke-ui.svg?style=for-the-badge" />
        </a>
        {"  "}
        <a href="https://github.com/cuke-ui/cuke-ui">
          <img src="https://img.shields.io/github/stars/cuke-ui/cuke-ui.svg?style=for-the-badge" />
        </a>
      </p>
      <h3 className="description">🥒 黄瓜UI: 一个即插即用的React UI 库</h3>

      <h2>当前版本</h2>
      <p>
        <a href="https://badge.fury.io/js/cuke-ui" title="npm">
          <img
            src="https://img.shields.io/npm/v/cuke-ui.svg?style=for-the-badge"
            alt="npm version"
          />
        </a>
      </p>

      {/* <h2>测试版本</h2>
    <a href="https://badge.fury.io/js/cuke-ui" title="npm">
      <img
        src="https://img.shields.io/npm/v/cuke-ui/next.svg?style=for-the-badge"
        alt="npm version"
      />
    </a> */}

      <h2>在线示例</h2>
      <iframe
        src="https://codesandbox.io/embed/nn6yr2m94?autoresize=1&hidenavigation=1"
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden"
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h2>名字由来</h2>
      <p>
        cuke(黄瓜), 常见的一种蔬菜,
        希望这个项目也成为常见的一个依赖(虽然这是不可能的), 其中黄瓜也符合
        这个组件库的 宗旨 : 即插即用 其次 cuke 谐音 (cool ke) 很酷的李金珂的
        意思 主题色 采用 黄瓜绿, 清新又可爱, 组件借鉴(抄袭)了 有牌面的 Ant
        Design, 抱着学习的目的,开发了这个组件库,
        所以建议不要用于生产环境,可能心情不好就不维护了
      </p>

      <Alert
        showIcon
        type="warning"
        message="警告"
        style={{ margin: "10px 0" }}
        description={
          <div>
            <p>
              如果你看到了这里,说明你是一个勇敢的人, 这是一个凭个人兴趣撸的一个{" "}
              <strong>React UI</strong>库
            </p>
            <p>
              以我的技术实力组件质量可想而知, 所以 <strong>不建议</strong> 在{" "}
              <strong> 生产环境</strong> 中 使用, 说不定哪天我不开心了,
              代码就不维护了
            </p>
          </div>
        }
      />

      <h2>贡献</h2>
      <p>
        如果你在使用 <Tag type="primary">cuke-ui</Tag> 时遇到了问题,或者想骂我,
        欢迎 给我提
        <a href="https://github.com/cuke-ui/cuke-ui/issues"> Issue</a> 或{" "}
        <a href="https://github.com/cuke-ui/cuke-ui/pulls">Pull Request</a>
      </p>

      <h2>开发交流</h2>
      <p>{author}</p>

      <h2>设计规范</h2>
      <p>高仿 Ant-Design : )</p>

      <h2>谁在使用</h2>
      <ul>
        <li> - 我自己 </li>
        <li> - 勇敢的人 </li>
        <li>
          {" "}
          - <a href="https://www.lijinke.cn">李金珂的小屋</a>
        </li>
      </ul>

      <h2>预览</h2>
      <Alert
        showIcon
        type="info"
        message={
          <span>
            请按照{" "}
            <a href="https://github.com/cuke-ui/cuke-ui/blob/master/README.md">
              README
            </a>{" "}
            文档使用
          </span>
        }
        description={
          <div>
            <p>← 左边是组件的列表,你可以点击预览效果</p>
            <p>
              点击右上角 ↗ 的 <Tag type="info">Show Info</Tag> 按钮可以看到{" "}
              <Tag>示例源码</Tag> 和 <Tag>参数列表</Tag>
            </p>
          </div>
        }
      />

      <h2>参考轮子</h2>
      <ul>
        <li>
          <a href="https://github.com/ant-design/ant-design">Ant-Design</a>
        </li>
        <li>
          <a href="https://github.com/FrankFang/gulu">gulu</a>
        </li>
        <li>
          <a href="https://github.com/JeromeLin/dragon-ui">dragon-ui</a>
        </li>
      </ul>
    </article>
  ))
  .add("快速上手", () => (
    <ReactMarkDown
      source={require("./markdown/quickstart.md")}
      renderers={{
        CodeBlock,
        Code: CodeBlock
      }}
    />
  ))

  .add("贡献者列表", () => (
    <ReactMarkDown
      source={require("./markdown/contributors.md")}
      renderers={{
        CodeBlock,
        Code: CodeBlock
      }}
    />
  ))
  .add(`更新日志`, () => (
    <div className="change-log">
      <ReactMarkDown
        source={require("./markdown/changelog.md")}
        renderers={{
          CodeBlock,
          Code: CodeBlock
        }}
      />

      <ReactMarkDown
        source={require("../CHANGELOG.md")}
        renderers={{
          CodeBlock,
          Code: CodeBlock
        }}
      />
    </div>
  ))
  .add(`关于cuke-ui`, () => (
    <>
      <ReactMarkDown
        source={require("./markdown/cuke.md")}
        renderers={{
          CodeBlock,
          Code: CodeBlock
        }}
      />
    </>
  ));
