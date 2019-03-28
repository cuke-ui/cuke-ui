import React from "react"
import { configure, addDecorator } from '@storybook/react';
import { name, repository, version } from "../package.json"
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { configureActions } from '@storybook/addon-actions';
import { withOptions } from '@storybook/addon-options';
import '@storybook/addon-console';
import "../components/styles/index.less"
import "../stories/styles/code.less"

function loadStories() {
  // 介绍
  require('../stories/index');
  // 普通
  require('../stories/general');
  // 视听娱乐
  require('../stories/player');
  // 导航
  require('../stories/navigation')
  // 数据录入
  require('../stories/dataEntry');
  // 数据展示
  require('../stories/dataDisplay');
  // 布局
  require('../stories/grid');
  // 操作反馈
  require('../stories/feedback');
  // 其他
  require('../stories/other'); 
}

configureActions({
  depth: 100
})

addDecorator(withInfo({
  header: true,
  maxPropsIntoLine: 100,
  maxPropObjectKeys: 100,
  maxPropArrayLength: 100,
  maxPropStringLength: 100,
}))
addDecorator(withNotes);
addDecorator(withOptions({
  name: `${name} v${version}`,
  url: repository,
  sidebarAnimations: true,
}))

addDecorator(story => <div style={{ padding: "0 60px 50px" }}>{story()}</div>)
configure(loadStories, module);
