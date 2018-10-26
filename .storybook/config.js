import React from "react"
import { configure, addDecorator } from '@storybook/react';
import { name, repository } from "../package.json"
import { setDefaults } from '@storybook/addon-info';
import { configureActions } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import { version } from '../package.json'
import '@storybook/addon-console';
import "../components/styles/index.less"
import "../stories/styles/code.less"

const req = require.context('../components', true, /\.stories\.js$/)

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

setOptions({
  name: `${name} v${version}`,
  url: repository,
});

configureActions({
  depth: 100
})

setDefaults({
  header: true,
  maxPropObjectKeys: 100,
  maxPropArrayLength: 100
})

addDecorator(story => <div style={{ padding: "20px 40px" }}>{story()}</div>)
configure(loadStories, module);
