import React from "react";
import { storiesOf } from "@storybook/react";
import BackTop from "../components/back-top";
import Button from "../components/button";
import Divider from "../components/divider";

import "../components/back-top/styles.less";
import "../components/button/styles.less";
import "../components/divider/styles.less";

storiesOf("其他", module)
  .add("BackTop 回到顶部", () => (
    <div style={{ height: 2000 }}>
      <h2>基本使用: 往下滚动</h2>

      <BackTop onClick={() => console.log("click")} />

      <h2>自定义偏移量： 距离顶部100px显示</h2>

      <BackTop visibilityHeight={100} style={{ right: 20, bottom: 120 }} />

      <h2>自定义位置： 距离顶部800px显示</h2>

      <BackTop visibilityHeight={800} style={{ right: 100, bottom: 100 }} />

      <h2>自定义样式</h2>

      <BackTop visibilityHeight={100} style={{ right: 200, bottom: 50 }}>
        <Button type="primary">自定义</Button>
      </BackTop>
    </div>
  ))
  .add("Divider 分割线", () => (
    <div style={{ width: 600 }}>
      <h2>基本使用</h2>
      <p>
        cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui
        cuke ui cuke ui cuke ui cuke ui cuke ui
      </p>
      <Divider />
      <p>
        cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui
        cuke ui cuke ui cuke ui cuke ui cuke ui
      </p>

      <h2>垂直使用</h2>
      <span>cuke-ui</span>
      <Divider type="vertical" />
      <span>cuke-ui</span>

      <h2>虚线使用</h2>
      <p>
        cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui
        cuke ui cuke ui cuke ui cuke ui cuke ui
      </p>
      <Divider dashed />
      <p>
        cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui cuke ui
        cuke ui cuke ui cuke ui cuke ui cuke ui
      </p>

      <h2>不同方向</h2>
      <Divider>标题居中</Divider>
      <Divider position="left">标题在左</Divider>
      <Divider position="right">标题在右</Divider>
    </div>
  ));
