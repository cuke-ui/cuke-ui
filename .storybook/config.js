import React from "react"
import { configure, addDecorator } from '@storybook/react';
import { name, repository } from "../package.json"
import { setDefaults } from '@storybook/addon-info';
import { configureActions } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '@storybook/addon-console';
import "../components/styles/index.less"

const req = require.context('../components', true, /\.stories\.js$/)

function loadStories() {
  require('../stories/index');    //介绍
  require('../stories/general');    //普通
  require('../stories/player');     //视听娱乐
  require('../stories/navigation'); //导航
  require('../stories/dataEntry'); //数据录入
  require('../stories/dataDisplay'); //数据展示
  require('../stories/grid'); //布局
  require('../stories/feedback'); //操作反馈
  require('../stories/other'); //其他
}

setOptions({
  name: name,
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